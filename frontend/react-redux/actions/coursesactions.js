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

export const addGrade = (courseId, name, timings, instructorId, creditHours ) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  // Request body
  const body = JSON.stringify({
    courseId,
    name,
    timings,
    instructorId,
    creditHours,
  });
  return (dispatch) => {
    axios.post(`${address}/courses`, body, config).then((response) => {
    dispatch({
        type: "ADD_COURSE",
        payload: response.data,
      });
    });
  };

}


