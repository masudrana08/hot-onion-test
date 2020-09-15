import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const CartDetails = () => {
  const getListedFood = JSON.parse(localStorage.getItem("listedFood"));
  let totalPrice = 0;
  let deliveryFee= 3;
  let taxFee=2;
  return (
    <div style={{padding:"0 15%"}}>
        <div style={{color:"#4e4e4e"}}>
        <h3><span style={{fontWeight:"400"}}>From</span> Gulsan Plaza Restaurant</h3>
        <h4 style={{fontWeight:"500"}}>Arriving in 25-30 minute</h4>
        </div>
      {getListedFood &&
        getListedFood.map((food) => {
          totalPrice = food.price + totalPrice;
          return (
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center",
                border:"1px solid lightgrey",
                borderRadius:"10px",
                padding:"10px"
              }}
            >
              <div style={{marginRight:"20%"}}>
                <img
                  style={{ width: "100px"}}
                  src={food.img}
                  alt=""
                />
              </div>
              <div>
                <h4 style={{ margin: "2px" }}>{food.name}</h4>
                <h2 style={{ color: " #fa0778", margin: "0" }}>
                  {food.price}$
                </h2>
              </div>
            </div>
          );
        })}
      <div style={{ color:"grey"}}>
      <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Subtotal Price</span>
          <span>{totalPrice}$</span>
        </h4>

        <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Delivery Fee</span>
          <span>{deliveryFee}$</span>
        </h4>

        <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Tax Fee</span>
          <span>{taxFee}$</span>
        </h4>

        <h3 style={{display:"flex", justifyContent:"space-between", borderTop:"1px solid lightgrey", paddingTop:"10px"}}>
          <span>Total Price</span>
          <span>{totalPrice+deliveryFee+taxFee}$</span>
        </h3>
        <Link to="/order-placed">
        <Button style={{width:"100%"}} variant="contained" color="secondary">Place order</Button>
        </Link>
      </div>

    </div>
  );
};

export default CartDetails;
