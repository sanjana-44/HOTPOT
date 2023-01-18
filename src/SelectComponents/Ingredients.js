import style from "./Ingredients.module.css";
import React from "react";

function Ingredients(props) {
  function ingClickHandler(event) {
    const itemClicked = event.target
      .closest("." + style.box)
      .querySelector("." + style.ing).textContent;
    props.giveIng(itemClicked, event);
  }
  return props.list.map((ing, index) => (
    <div
      key={index}
      className={`${style.box} ${
        props.selectedItem.includes(ing) ? style.seletedIng : ""
      }`}
      onClick={ingClickHandler}
    >
      <p className={style.ing}>{ing}</p>
    </div>
  ));
}

export default Ingredients;
