import React, { useContext } from "react";
import style from "./ShowRecipe.module.css";
import RecipeContext from "../store/RecipeContext";
import Recipe from "../Recipe";

function ShowRecipe(props) {
  const ingContext = useContext(RecipeContext);
  const selectRecipe = [];

  ingContext.Recipes.forEach((recipe) => {
    if (recipe.ing.every((ing) => props.selectedIng.includes(ing.name))) {
      selectRecipe.push(recipe);
    }
  });

  const renderRecipe = selectRecipe.map((recipe, i) => (
    <Recipe
      key={recipe.id}
      src={recipe.src}
      name={recipe.name}
      id={recipe.id}
      recipeClickHandler={props.recipeClickHandler}
    ></Recipe>
  ));

  if (props.selectedIng.length === 0) {
    return <p className={style["error-text"]}>Please Select few ingredients</p>;
  }
  return (
    <div>
      {renderRecipe.length === 0 ? (
        <p className={style["error-text"]}>
          No Recipe Found...Select more ingredients
        </p>
      ) : (
        renderRecipe
      )}
    </div>
  );
}

export default ShowRecipe;
