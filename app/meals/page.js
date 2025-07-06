import Link from "next/link";
import cssClasses from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals() {
  const meals = await getMeals();
  return <MealsGrid meals={meals} />;
}

export default async function MealsPage() {
  return (
    <>
      <header className={cssClasses.header}>
        <h1>
          Delicious Meals for Created{" "}
          <span className={cssClasses.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe to make and enjoy.</p>
        <p className={cssClasses.participate}>
          <Link href="meals/share">Share a Favorite Recipe</Link>
        </p>
      </header>
      <main>
        <Suspense
          fallback={<p className={cssClasses.loading}>Loading Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}
