import React from 'react';
import ReactModal from "../ReactModal/ReactModal";
import './Meals.css';

const Meals = (props) => {
//     console.log(props.cartCount)
//    const {countPlus} = props;
    return (
        <div 
        data-aos="flip-right"
        data-aos-easing="linear"
        data-aos-duration="1500"
         >
            <div className='info'  >
                {/* <h1>Buy Qty:{count} </h1> */}
                <h4>Name :{props.meal.strMeal}</h4>
                <img src={props.meal.strMealThumb} alt="Meal Img" />
                <button onClick={props.cartCount} className='btn btn-info m-3'>Order Now</button>
                <ReactModal product={props.meal}></ReactModal>
            </div>
        </div>
      
            
       
    );
};

export default Meals;