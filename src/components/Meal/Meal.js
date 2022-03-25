import React from "react";
import "./Meal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Meal = (props) => {
//   console.log(props.meal);
  const { meal, handleAddToCart } = props;
  const { strMealThumb, strMeal, strArea, strCategory } = meal;
  return (
    <div className="meal-container">
      <img src={strMealThumb} alt="" />
      <h2>{strMeal}</h2>
      <p><span>Origin: </span>{strArea}</p>
      <p><span>Category: </span>{strCategory}</p>
      <button className="btn-cart" onClick={() => handleAddToCart(strMeal)}>
        <p className="btn-text">Add to cart</p>
      <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Meal;
