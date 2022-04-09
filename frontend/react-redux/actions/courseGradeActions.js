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
          .post(`${address}/coursegrades`, body, config)
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