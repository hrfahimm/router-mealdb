import React from "react";
import {Link} from "react-router-dom";

import "./Meal.css";
const Meal = (props) => {
	const {strMeal, strInstructions, strMealThumb, idMeal} = props.meal;
	return (
		<div className="meal">
			<img src={strMealThumb} alt="" />
			<h1> {strMeal}</h1>
			<h6>{strInstructions.slice(0, 50)}</h6>
			<Link to={`/meal/${idMeal}`}>
				<button>Details</button>
			</Link>
		</div>
	);
};

export default Meal;
