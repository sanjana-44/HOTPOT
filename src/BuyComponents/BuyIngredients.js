import BuyButton from "./BuyButton";
import style from "./BuyIngredients.module.css";

function BuyIngredients(props) {
  return (
    <div className={style["ing-box"]}>
      <h1 className={style.text}>{props.ingname}</h1>
      <BuyButton></BuyButton>
    </div>
  );
}

export default BuyIngredients;
