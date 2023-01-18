import style from "./Card.module.css";
import classes from "./Ingredients.module.css";
import React, { useContext, useState } from "react";
import Ingredients from "./Ingredients";
import RecipeContext from "../store/RecipeContext";
import ShowRecipe from "./ShowRecipe";

function Card(props) {
  const ingContext = useContext(RecipeContext);
  const [showRecipe, setShowRecipe] = useState("");
  const [item, setItem] = useState([]);

  if (item === undefined) {
    setItem([]);
  }

  function getIngredients(inglist, eventEl) {
    if (!item?.includes(inglist)) {
      setItem((previousItems) => {
        return [...previousItems, inglist];
      });
      eventEl.target
        .closest("." + classes.box)
        .classList.add(classes.seletedIng);
    } else {
      setItem((previousItems) => {
        const arr = previousItems.filter(function (el) {
          return el !== inglist;
        });
        return arr;
      });
      eventEl.target
        .closest("." + classes.box)
        .classList.remove(classes.seletedIng);
    }
  }

  const showRecipeButtonHandler = () => {
    if (!showRecipe) {
      setShowRecipe(
        <ShowRecipe
          selectedIng={item}
          recipeClickHandler={props.recipeClickHandler}
        ></ShowRecipe>
      );
    } else {
      setShowRecipe("");
    }
  };
  return (
    <React.Fragment>
      {showRecipe ||
        ingContext.ingredients.map((ing, index) => {
          return (
            <div key={index} className={style.outer}>
              <header className={style.head}>{ing.name}</header>
              <hr className={style.line} />

              <div>
                <Ingredients
                  selectedItem={item}
                  giveIng={getIngredients}
                  list={ing.list}
                ></Ingredients>
              </div>
              <hr className={style.extend} />
            </div>
          );
        })}
      <button className={style.show} onClick={showRecipeButtonHandler}>
        {showRecipe ? "Show Ingredients" : "Show Recipe"}
      </button>
    </React.Fragment>
  );
}

export default Card;
