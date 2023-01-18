import "./Recipe.css";

function Recipe(props) {
  function clickedHandler() {
    props.recipeClickHandler(props.id);
  }
  return (
    <div className="cl" onClick={clickedHandler}>
      <img src={props.src} className="food-img" alt="food-img"></img>
      <h1>{props.name}</h1>
    </div>
  );
}

export default Recipe;
