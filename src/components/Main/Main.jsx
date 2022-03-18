import React, { useEffect, useState } from 'react';
import Meals from '../Meals/Meals';
import './Main.css'

const Main = () => {

   const[meals, setMeal] = useState([])

    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=f')
        .then(res => res.json())
        .then(data => setMeal(data.meals))
    },[])

    return (
        <div className='miniComponent'>
            {
            meals.map(meal => <Meals meal={meal}></Meals>)
            }
        </div>

       
      
    );
};

export default Main;