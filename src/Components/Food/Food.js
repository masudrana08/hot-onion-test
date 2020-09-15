import React from 'react';
import './Food.css'
import { Link } from 'react-router-dom';
const Food = (props) => {
    const {name, img, shortDescription, id}=props.food
    
    return (
       
            <Link to={`/food/${id}`} style={{textDecoration:"none", color:"black"}}>
                <div className="food-container"> 
                    <img style={{width:"150px"}} src={img} alt=""/>
                    <h5>{name}</h5>
                    <small>{shortDescription}</small>
                </div>
            </Link>
        
    );
};

export default Food;