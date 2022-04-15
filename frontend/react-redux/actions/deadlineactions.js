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
  const request = address + "/deadlines";
  return (dispatch) => {
    axios.post(request, data).then((response) => {
      dispatch({
        type: "ADD_DEADLINE",
        payload: response.data,
      });
    });
  };
};

export const updateDeadline = (
  newTime,
  newDate,
  Course_ID,
  Instructor_Id,
  Deadline_Title,
  Deadline_Time,
  Deadline_Date
) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    newTime,
    newDate,
    Course_ID,
    Instructor_Id,
    Deadline_Title,
    Deadline_Time,
    Deadline_Date,
  });
  return (dispatch) => {
    axios
      .put(`${address}/deadlines`, body, config)
      .then((response) => {
        dispatch({
          type: "UPDATE_DEADLINE",
          payload: response.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: "UPDATE_DEADLINE_FAIL",
          payload: "",
        });
      });
  };
};

export const SearchDeadlines = (courseID, instructorID) => {
  const request =
    address +
    "/deadlines?" +
    `type=2` +
    `&courseID=${courseID}` +
    `&instructorID=${instructorID}`;
  return (dispatch) => {
    axios
      .get(request)
      .then((resp) => {
        dispatch({
          type: "SEARCH_DEADLINE",
          payload: resp.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "SEARCH_DEADLINE_FAIL",
          payload: "Failed",
        });
      });
  };
};

export const clearMessage = () =>
{
  return (dispatch) => {
    dispatch({
      type: "CLEAR_DEADLINE_MESSAGE",
      payload: "",
    });
  }
}
