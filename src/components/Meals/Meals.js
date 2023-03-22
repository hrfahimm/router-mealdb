import React, { useEffect, useState } from "react";
import Meal from "../Meal/Meal";
import "./Meals.css";
const Meals = () => {
    const [search, setSearch] = useState('');
    const [meals, setMeals] = useState([])
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
            .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [search])
    const handelSearchFild = e => {
        const search = e.target.value;
        setSearch(search)
    }
	return (
        <div className="meals-container">
            <div className="search">
                <input onChange={handelSearchFild} type="text" placeholder="Search Here......." />
            </div>
            <div className="meals">
            {meals.map(meal =>(<Meal key={meal.idMeal} meal={meal}></Meal>))}
            </div>
		</div>
	);
};

export default Meals;
