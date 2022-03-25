import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import Cart from "../Cart/Cart";
import "./Meals.css";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  const [cart, setCart] = useState([]);
  // console.log(cart);
  const handleAddToCart = (strMeal) => {
    setCart([...cart,strMeal]);
  };
  return (
    <div className="container">
      <div className="meals-container">
        {meals.map((meal) => (
          <Meal
            key={meal.idMeal}
            meal={meal}
            handleAddToCart={handleAddToCart}
          ></Meal>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Meals;













/* strInstructions:
strMeal: "Apple Frangipan Tart"
strMealThumb: */

  /* <Meal key={meal.idMeal} ></Meal>  */
