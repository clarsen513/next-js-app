import Link from "next/link";

export default function MealsPage() {
  return (
    <main>
      <h1>Meals Page</h1>
      <ul>
        <li>
          <Link href="meals/detail-1">detail-1</Link>
        </li>
        <li>
          <Link href="meals/detail-2">detail-2</Link>
        </li>
        <li>
          <Link href="meals/share">Share!</Link>
        </li>
      </ul>
    </main>
  );
}
