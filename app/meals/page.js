import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
import { Suspense } from "react";

async function Meals(){
  const meals = await getMeals();
  return <MealsGrid meals={meals} />
}

export default function MealsPage() {
  
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>choose your favorite food!</p>
        <p className={classes.cta}>
            <Link href="/meals/share">
                Share your Favorite Recipe
            </Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense fallback={<p className={classes.loading}>Fetching ...</p>}>
          <Meals />
        </Suspense>
        
      </main>
    </>
  );
}