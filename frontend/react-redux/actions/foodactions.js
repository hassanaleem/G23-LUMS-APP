import React from "react";
import axios from "axios";
import { address } from "./server";

export const Addfood = (data) => {
  const request = address + "/fooditems";
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
  const request = address + "/fooditems?&restaurants";
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_RESTAURANT",
        payload: response.data,
      });
    });
  };
};

export const getAllFoodItems = () => {
  const request = address + "/fooditems?&allData";
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_ALL_FOOD_ITEMS",
        payload: response.data,
      });
    });
  };
};
