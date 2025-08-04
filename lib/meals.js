import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  DynamoDBDocumentClient,
  ScanCommand,
  GetCommand,
  PutCommand,
} from "@aws-sdk/lib-dynamodb";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";

const client = new DynamoDBClient({ region: "us-east-1" });
const docClient = DynamoDBDocumentClient.from(client);
const s3 = new S3({ region: "us-east-1" });
const s3BucketName = process.env.S3_BUCKET_NAME;
const dynamoDBTableName = process.env.DYNAMODB_TABLE_NAME;

export async function getMeals() {
  const command = new ScanCommand({
    TableName: dynamoDBTableName,
  });
  const response = await docClient.send(command);
  return response.Items;
}

export async function getMeal(slug) {
  const command = new GetCommand({
    TableName: dynamoDBTableName,
    Key: { slug },
  });
  const response = await docClient.send(command);
  return response.Item;
}

export async function saveMeal(meal) {
  try {
    meal.slug = slugify(meal.title, { lower: true });
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split(".").pop();
    const filename = `${meal.slug}.${extension}`;

    const bufferedImage = await meal.image.arrayBuffer();

    // Upload to S3
    await s3.putObject({
      Bucket: s3BucketName,
      Key: filename,
      Body: Buffer.from(bufferedImage),
      ContentType: meal.image.type,
    });

    meal.image = filename;

    // Save to DynamoDB
    const command = new PutCommand({
      TableName: "meals",
      Item: meal,
    });

    await docClient.send(command);
  } catch (error) {
    console.error("Error saving meal:", error);
    throw error;
  }
}
