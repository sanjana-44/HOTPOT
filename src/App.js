import "./App.css";
import React, { useState, useContext } from "react";
import Recipe from "./Recipe";
import AddButton from "./AddButton";
import BuyIngredients from "./BuyComponents/BuyIngredients";
import Card from "./SelectComponents/Card";
import RecipeContext from "./store/RecipeContext";
import RecipeDetails from "./RecipeDetails";

function App() {
  const [favourite, setFavourite] = useState(false);
  const [select, setSelect] = useState(false);
  const [ingredients, setIngredients] = useState(false);
  const [suggestion, setSuggestion] = useState(false);
  const [language, setLanguage] = useState(false);
  const [logout, setLogout] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState(false);

  const recipes = useContext(RecipeContext);
  // console.log(recipes.ingredients);

  const stateArr = [
    setFavourite,
    setSelect,
    setIngredients,
    setSuggestion,
    setLanguage,
    setLogout,
    setRecipeDetails,
  ];

  function restFalse(index) {
    for (let i = 0; i < stateArr.length; i++) {
      if (i === index) {
        continue;
      }
      stateArr[i](false);
    }
  }

  document
    .querySelector(".navbar")
    .querySelectorAll("a")
    .forEach(function (el, i) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        restFalse(i);
        stateArr[i](true);
      });
    });
  if (favourite) {
    document
      .querySelector(".navbar")
      .querySelector(".favourite").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".favourite").style.backgroundColor = "#ffb4b4";
  }
  if (select) {
    document
      .querySelector(".navbar")
      .querySelector(".select").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".select").style.backgroundColor = "#ffb4b4";
  }
  if (ingredients) {
    document
      .querySelector(".navbar")
      .querySelector(".ingredients").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".ingredients").style.backgroundColor = "#ffb4b4";
  }
  if (suggestion) {
    document
      .querySelector(".navbar")
      .querySelector(".suggestion").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".suggestion").style.backgroundColor = "#ffb4b4";
  }
  if (language) {
    document
      .querySelector(".navbar")
      .querySelector(".language").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".language").style.backgroundColor = "#ffb4b4";
  }
  if (logout) {
    document
      .querySelector(".navbar")
      .querySelector(".logout").style.backgroundColor = "#ffdeb4";
  } else {
    document
      .querySelector(".navbar")
      .querySelector(".logout").style.backgroundColor = "#ffb4b4";
  }

  let returnVal = "";

  if (ingredients) {
    returnVal = (
      <div>
        <BuyIngredients></BuyIngredients>
        <BuyIngredients></BuyIngredients>
        <BuyIngredients></BuyIngredients>
        <BuyIngredients></BuyIngredients>
        <BuyIngredients></BuyIngredients>
        <AddButton></AddButton>
      </div>
    );
  }

  if (select) {
    returnVal = (
      <div>
        <Card recipeClickHandler={onRecipeClickHandler}></Card>
      </div>
    );
  }

  if (favourite) {
    returnVal = (
      <div>
        <Recipe></Recipe>
        <AddButton></AddButton>
      </div>
    );
  }

  function onRecipeClickHandler(id) {
    setRecipeDetails(id);
  }

  if (recipeDetails) {
    returnVal = <RecipeDetails id={recipeDetails}></RecipeDetails>;
  }
  return (
    returnVal || (
      <div>
        {recipes.Recipes.map((recipe, i) => (
          <Recipe
            key={i}
            src={recipe.src}
            name={recipe.name}
            recipeClickHandler={onRecipeClickHandler}
            id={recipe.id}
          ></Recipe>
        ))}
      </div>
    )
  );
}

export default App;
