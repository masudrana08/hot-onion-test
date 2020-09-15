import { Grid } from '@material-ui/core';
import React from 'react';
import map from '../../images/map.png'
import byke from '../../images/image/byke.png'
const OrderPlaced = () => {
    const getDeliveryDetails=JSON.parse(localStorage.getItem("deliveryDetails"))
    return (
        <div style={{padding:"20px 10%"}}>
            <Grid container item xs={12} spacing={5}>
            <Grid item xs={12} md={6}>
                <img style={{width:"100%"}} src={map} alt=""/>
            </Grid>
            <Grid item xs={12} md={6}>
                <div style={{padding:"0 15%"}}>
                    <img style={{width:"100px"}} src={byke} alt=""/>
                    <h3>Your Location</h3>
                    <h4>
                        {
                            getDeliveryDetails && <div>
                                <span>{getDeliveryDetails.postOffice}, </span>
                                <span>{getDeliveryDetails.district}</span>
                            </div>
                        }
                    </h4>
                </div>
            </Grid>
        </Grid>
        </div>
    );
};

export default OrderPlaced;