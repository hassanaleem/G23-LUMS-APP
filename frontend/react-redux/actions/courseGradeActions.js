import React from "react";
import axios from "axios";
import { address } from "./server";

export const addGrade = (Course_ID, Grade, Student_ID) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({
    Course_ID,
    Grade,
    Student_ID,
  });
  return (dispatch) => {
    axios
      .put(`${address}/coursegrades`, body, config)
      .then((resp) => {
        dispatch({
          type: "ADD_GRADE",
          payload: "Success",
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_GRADE_FAILED",
          payload: "Failed",
        });
      });
  };
};
export const getGrade = (id) => {
  const request = address + "/coursegrades?type=1&" + `id=${id}`;
  return (dispatch) => {
    axios.get(request).then((response) => {
      dispatch({
        type: "GET_GRADE",
        payload: response.data,
      });
    });
  };
};

export const clearMessage = () => {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_COURSEGRADE_MESSAGE",
    });
  };
};
