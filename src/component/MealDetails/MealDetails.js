import React, { useEffect, useState } from 'react';

const MealDetails = () => {
    const [meal, setMeal] = useState({})
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772`
        fetch(url)
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            setMeal(data?.meals?.[0])
        })
        .catch((error) => console.log(error))
    },[])
    return (
        <div>
            <h1>This Is MealDetails</h1>
            <h2>Name: {meal?.strMeal}</h2>
        </div>
    );
};

export default MealDetails;