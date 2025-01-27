import React from "react";

const MealPage = async({params}) => {
  return (
    <div>
      <div>Meal comp</div>
     <div>{await params.mealSlug}</div>
    </div>
  );
};

export default MealPage;