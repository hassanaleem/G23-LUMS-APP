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
    }).catch((err) => {
      dispatch({
        type: "ADD_FOOD_ITEM_FAIL",
        payload: "Failure",
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

export const clearState = () => {
  return {
    type: "CLEAR_STATE",
  };
};

export const updateFoodItem = (data) => {
  const request = address + "/fooditems";
  return (dispatch) => {
    axios.put(request, data).then((response) => {
      dispatch({
        type: "UPDATE_FOOD_ITEM",
        payload: response.data,
      });
    });
  };
};

export const clearMessage = () => {
  return {
    type: "CLEAR_FOOD_MESSAGE",
  };
}
