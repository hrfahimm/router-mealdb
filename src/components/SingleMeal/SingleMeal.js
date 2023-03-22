import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import "./SingleMeal.css";
const SingleMeal = () => {
	const {idmeal} = useParams();
	const [meal, setMeal] = useState({});
	useEffect(() => {
		fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`)
			.then((res) => res.json())
			.then((data) => setMeal(data?.meals[0]));
	}, []);
	return (
		<div className="meal">
			<img src={meal.strMealThumb} alt="" />
			<h1>{meal.strMeal}</h1>
		</div>
	);
};

export default SingleMeal;
