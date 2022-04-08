import React from "react";
import axios from "axios";
import { address } from "./server";

export const getDeadline = (id) => {
  const request = address + "/deadlines?" + `id=${id}`;
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_DEADLINE",
        payload: response.data,
      });
    });
  };
};

export const addDeadline = (data) => {
  const request = "http://" + address + "/deadlines";
  return (dispatch) => {
    axios.post(request, data).then((response) => {
      dispatch({
        type: "ADD_DEADLINE",
        payload: response.data,
      });
    });
  };
};

export const updateDeadline = (data) => {
  return (dispatch) => {
    axios.put(request, data).then((response) => {
      dispatch({
        type: "UPDATE_DEADLINE",
        payload: response.data,
      });
    });
  };
}
