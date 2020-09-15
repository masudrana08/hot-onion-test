import { FormGroup } from "@material-ui/core";
import React, { useState } from "react";

const DeliveryDetails = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({});

  const getDeliveryDetails = JSON.parse(
    localStorage.getItem("deliveryDetails")
  );

  const formHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("deliveryDetails", JSON.stringify(deliveryDetails));
  };
  return (
    <form className="form-container" onSubmit={formHandler}>
      <h2 style={{color:"#4e4e4e", borderBottom:"1px solid lightgray", paddingBottom:"10px"}}>Edit Delivery Details</h2>
      <FormGroup >
        <input
          name="receiverName"
          onBlur={(event) =>
            setDeliveryDetails({
              ...deliveryDetails,
              receiverName: event.target.value,
            })
          }
          type="text"
          placeholder="Receiver Name"
          value={
              getDeliveryDetails && getDeliveryDetails.receiverName
          }
        />

        <input
          name="phone"
          onBlur={(event) =>
            setDeliveryDetails({
              ...deliveryDetails,
              phone: event.target.value,
            })
          }
          type="text"
          placeholder="Phone or Telephone Number"
          value={
            getDeliveryDetails && getDeliveryDetails.phone
        }
        />

        <input
          name="postOffice"
          onBlur={(event) =>
            setDeliveryDetails({
              ...deliveryDetails,
              postOffice: event.target.value,
            })
          }
          type="text"
          placeholder="Post Office and Post Code"
          value={
            getDeliveryDetails && getDeliveryDetails.postOffice
        }
        />

        <input
          name="district"
          onBlur={(event) =>
            setDeliveryDetails({
              ...deliveryDetails,
              district: event.target.value,
            })
          }
          type="text"
          placeholder="District Name"
          value={
            getDeliveryDetails && getDeliveryDetails.district
        }
        />

        <textarea
          name="detailsInfo"
          onBlur={(event) =>
            setDeliveryDetails({
              ...deliveryDetails,
              detailsInfo: event.target.value,
            })
          }
          rows="10"
          type="text"
          placeholder="Extra details information"
          value={
            getDeliveryDetails && getDeliveryDetails.detailsInfo
        }
        />

        <input type="submit" value="Save and Continue" />
      </FormGroup>
    </form>
  );
};

export default DeliveryDetails;
