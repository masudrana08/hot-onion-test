import React, { useState } from 'react';
import foodData from '../../foodData'
import Food from '../Food/Food';
import Grid from '@material-ui/core/Grid';
const Foods = () => {
    const [category,setCategory]=useState("lunch");
    let filteredFood=foodData.filter(food=>{
        return food.category === category
    })

    
    return (
        <div style={{paddingLeft:"30px",width:"90%", margin:"auto"}}>

            <div style={{margin:"auto",marginBottom:"30px", display:"flex", justifyContent:"space-around", width:"40%"}}>
                <h6 style={{cursor:"pointer"}} onClick={()=>setCategory("breakfast")}>breakfast</h6>
                <h6 style={{cursor:"pointer"}} onClick={()=>setCategory("lunch")}>lunch</h6> 
                <h6 style={{cursor:"pointer"}} onClick={()=>setCategory("dinner")}>dinner</h6>
            </div>

            <Grid item container xs={12} md={12} spacing={5} >
                {
                filteredFood.map(food=>{
                    return(
                        <Grid key={food.id} item xs={12} md={4} >
                            <Food  food={food}></Food>
                         </Grid>
                    )
                })
                }
            </Grid>
        </div>
    );
};

export default Foods;