import { getMeal } from "@/lib/meals";
import cssClasses from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export default async function DetailsPage({ params }) {
  const { mealDetailsSlug } = await params;
  console.log("mealDetailsSlug", mealDetailsSlug);
  const meal = await getMeal(mealDetailsSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <Suspense fallback={<p className={cssClasses.loading}>Loading Meal...</p>}>
      <header className={cssClasses.header}>
        <div className={cssClasses.image}>
          <Image
            src={`https://carter-larsen-next-js-app-bucket.s3.us-east-1.amazonaws.com/${meal.image}`}
            alt={meal.title}
            fill
          />
        </div>
        <div className={cssClasses["header-text"]}>
          <h1>{meal.title}</h1>
          <p className={cssClasses.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={cssClasses.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={cssClasses.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </Suspense>
  );
}
