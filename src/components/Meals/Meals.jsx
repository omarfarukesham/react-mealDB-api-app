import React from 'react';
import './Meals.css';

const Meals = (props) => {
    //console.log(props)
    return (
        <div>
            <div className='info'>
                <h4>{props.meal.strMeal}</h4>
                <img src={props.meal.strMealThumb} alt="Meal Img" />
            </div>
        </div>
      
            
       
    );
};

export default Meals;