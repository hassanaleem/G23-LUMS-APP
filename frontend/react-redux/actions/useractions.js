import axios from "axios";
import { address } from "./server";

export const addUser = (userData) => {
  const postRequest = "http://" + address + "/users";
  console.log(postRequest);
  return (dispatch) => {
    axios
      .post(postRequest, userData)
      .then((response) => {
        dispatch({
          type: "ADD_USER",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "ADD_USER_FAILED",
          payload: "Failed",
        });
      });
  };
};
