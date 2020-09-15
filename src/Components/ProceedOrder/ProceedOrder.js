import { Grid } from '@material-ui/core';
import React from 'react';
import CartDetails from '../CartDetails/CartDetails';
import DeliveryDetails from '../DeliveryDetails/DeliveryDetails';

const ProceedOrder = () => {
    return (
        <Grid container item xs={12} style={{display:"flex", width:"100%", padding:"30px 60px"}} spacing={5}>
            <Grid item xs={12} md={6}>
                <DeliveryDetails></DeliveryDetails>
            </Grid>

            <Grid item xs={12} md={6}>
                <CartDetails ></CartDetails>
            </Grid>
        </Grid>
    );
};

export default ProceedOrder;