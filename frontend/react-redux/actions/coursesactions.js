import React from "react";
import axios from "axios";
import { address } from "./server";

export const getGrade = (id) => {
  const request = address + "/grades?" + `id=${id}`;
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_GRADE",
        payload: response.data,
      });
    });
  };
};
