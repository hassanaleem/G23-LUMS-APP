import axios from "axios";
import { address } from "./server";

export const postEvents = (name, date, time, type) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    name,
    date,
    time,
    type,
  });
  return (dispatch) => {
    axios
      .post(`${address}/events`, body, config)
      .then((resp) => {
        dispatch({
          type: "POST_EVENT",
          payload: "Success",
        });
      })
      .catch((err) => {
        dispatch({
          type: "POST_EVENT_FAIL",
          payload: "Failure",
        });
      });
  };
};

export const getEvents = () => {
  return (dispatch) => {
    axios
      .get(`${address}/events`)
      .then((resp) => {
        dispatch({
          type: "GET_EVENTS",
          payload: resp.data,
        });
      })
      .catch((err) => {});
  };
};
