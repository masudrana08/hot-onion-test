import { Button, Grid } from '@material-ui/core';
import React, {  useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MyContext } from '../../App';
import foodData from '../../foodData'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const FoodDetails = () => {
    const [cartLength,setCartLength]=useContext(MyContext)
    const {id}=useParams()
    const selectedFood=foodData.find(food=>food.id==id)
    const {name, img, description,price,category} = selectedFood

    const commonFood = foodData.filter(food=>food.category===category)
    const [a, setA]=useState(0)
    const [b, setB]=useState(1)
    const handleSuggestFood = () =>{
        a<5 ? setA(a+1) : setA(0)
        b <5 ? setB(b+1) : setB(1)

    }
    
    const addItem = ()=>{

        

        const getListedFood=JSON.parse(localStorage.getItem("listedFood"))
        const foodBucket=getListedFood ? [...getListedFood,selectedFood]
                :[selectedFood]
        localStorage.setItem("listedFood",JSON.stringify(foodBucket))
        
        const length=JSON.parse(localStorage.getItem("listedFood"))?.length
        setCartLength(length)
    }
    return (
        <>
            <Grid item container xs={12} style={{textAlign:"center", padding:"10%"}}>
            <Grid item xs={12} md={6}>
                <h1>{name}</h1>
                <small>{description}</small>

                <div style={{textAlign:"left"}}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <h1>{price}$</h1> 
                    <h2 style={{boxShadow:"5px 5px 30px lightgrey", borderRadius:"30px", padding:"2px 15px", marginLeft:"10px"}}>
                        <span>-</span>
                        <span style={{padding:"0 10px"}}>1</span>
                        <span>+</span>
                    </h2>
                </div>
                <Button onClick={addItem} variant="contained" color="secondary" style={{borderRadius:"30px"}}>Add</Button>
                </div>
                <Link to={`/food/${commonFood[a].id}`}>
                    <img style={{width:"150px"}} src={commonFood[a].img} alt=""/>
                </Link>
                <Link to={`/food/${commonFood[b].id}`}>
                <img style={{width:"150px"}} src={commonFood[b].img} alt=""/>
                </Link>
                <ArrowForwardIosIcon style={{cursor:"pointer"}} color="secondary" variant="containet" fontSize="large" onClick={handleSuggestFood} />
                
            </Grid>
            <Grid item xs={12} md={6}>
                <img  style={{width:"500px"}} src={img} alt=""/>
            </Grid>
        </Grid>

        
        </>
    );
};

export default FoodDetails;