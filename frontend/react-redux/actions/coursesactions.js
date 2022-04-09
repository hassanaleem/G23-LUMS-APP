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

export const addCourse = (course_id, name, timings, day,  instructorId, creditHours) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    course_id,
    name,
    timings,
    day,
    instructorId,
    creditHours,
  });
  return (dispatch) => {
    axios
      .post(`${address}/courses`, body, config)
      .then((resp) => {
        dispatch({
          type: "ADD_COURSE",
          payload: "Success",
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_COURSE_FAILED",
          payload: "Failed",
        });
      });
  };
};




