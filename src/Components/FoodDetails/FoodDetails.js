import { Button, Grid } from '@material-ui/core';
import React, {  useState } from 'react';
import { useParams } from 'react-router-dom';
import foodData from '../../foodData'

const FoodDetails = () => {
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
                <Button variant="contained" color="secondary" style={{borderRadius:"30px"}}>Add</Button>
                </div>
                <img style={{width:"150px"}} src={commonFood[a].img} alt=""/>
                <img style={{width:"150px"}} src={commonFood[b].img} alt=""/>
                <button onClick={handleSuggestFood}>change</button>
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width:"500px"}} src={img} alt=""/>
            </Grid>
        </Grid>

        
        </>
    );
};

export default FoodDetails;