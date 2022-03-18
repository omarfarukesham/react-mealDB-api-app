import React from 'react';
import './Meals.css';

const Meals = (props) => {
//     console.log(props.cartCount)
//    const {countPlus} = props;
    return (
        <div >
            <div className='info'  >
                {/* <h1>Buy Qty:{count} </h1> */}
                <h4>Name :{props.meal.strMeal}</h4>
                <img src={props.meal.strMealThumb} alt="Meal Img" />
                <button onClick={props.cartCount} className='btn btn-info m-3'>Order Now</button>
                <button  className='btn btn-warning my-3'> Detail</button>
            </div>
        </div>
      
            
       
    );
};

export default Meals;