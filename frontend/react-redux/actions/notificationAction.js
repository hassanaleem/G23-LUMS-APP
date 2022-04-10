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
  