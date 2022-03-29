import React from "react";
import axios from "axios";
import { address } from "./server";

export const Addfood = (data) => {
  const request = "http://" + address + "/fooditems";
  return (dispatch) => {
    axios.post(request, data).then((response) => {
      dispatch({
        type: "ADD_FOOD_ITEM",
        payload: response.data,
      });
    });
  };
};

export const GetRestaurant = () => {
  const request = "http://" + address + "/fooditems?&restaurants";
  return (dispatch) => {
    axios.get(request).then((response) => {
        console.log(response.data);
      dispatch({
        type: "GET_RESTAURANT",
        payload: response.data,
      });
    });
  };
};
