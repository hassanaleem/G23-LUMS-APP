import axios from "axios";
import { address } from "./server";


export const getNotifications = (id) => {
    const request = address + `/notifications?id=${id}`;
    return (dispatch) => {
      axios.get(request).then((response) => {
        dispatch({
          type: "GET_NOTIFICATIONS",
          payload: response.data,
        });
      });
    };
  };

  export const clearNotifications = (id) => {
    const request = address + `/notifications`;

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Request body
    const body = JSON.stringify({
      id
    });


    return (dispatch) => {
      axios.post(request, body, config).then((response) => {
        dispatch({
          type: "CLEAR_NOTIFICATIONS",
          payload: "",
        });
      }).catch((error) => {})
    };
  };
  