import React from "react";

const MealPage = ({params}) => {
  return (
    <div>
      <div>Meal comp</div>
     <div>{params.mealSlug}</div>
    </div>
  );
};

export default MealPage;