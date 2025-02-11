import Link from "next/link";
import React from "react";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/MealsGrid";
import {getMeals} from'@/lib/meals'

export const metadata = {
  title: 'All Meals',
  description: 'Browse the delicious meals, shared by a food-loving community.',
};

const MealsPage = () => {
  const meals = getMeals();
  return (
    <>
      <header className={classes.header}>
        <h1>Delicious meals, created <span className={classes.highlight}>by you!</span></h1>
        <p>Choose your favorite recipe and cook it yourself. It is easy and fun!</p>
        <p className={classes.cta}>
          <Link href="/meals/share"> Share your favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals}/>
      </main>
    </>
  );
};

export default MealsPage;
