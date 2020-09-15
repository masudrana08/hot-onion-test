import React, { useState } from "react";

const CartDetails = () => {
  const getListedFood = JSON.parse(localStorage.getItem("listedFood"));
  let totalPrice = 0;
  let deliveryFee= 3;
  let taxFee=2;
  return (
    <div>
      {getListedFood &&
        getListedFood.map((food) => {
          totalPrice = food.price + totalPrice;
          return (
            <div
              style={{
                display: "flex",
                marginBottom: "10px",
                alignItems: "center"
              }}
            >
              <div>
                <img
                  style={{ width: "120px", marginRight: "20px", padding:"0 50px" }}
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
      <div style={{padding:"10px 40px", color:"grey"}}>
      <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Subtotal Price</span>
          <span>{totalPrice}</span>
        </h4>

        <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Delivery Fee</span>
          <span>{deliveryFee}</span>
        </h4>

        <h4 style={{display:"flex", justifyContent:"space-between"}}>
          <span>Tax Fee</span>
          <span>{taxFee}</span>
        </h4>

        <h3 style={{display:"flex", justifyContent:"space-between", borderTop:"1px solid lightgrey", paddingTop:"10px"}}>
          <span>Total Price</span>
          <span>{totalPrice+deliveryFee+taxFee}</span>
        </h3>
      </div>
    </div>
  );
};

export default CartDetails;
