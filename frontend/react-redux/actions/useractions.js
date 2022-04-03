import axios from "axios";
import { address } from "./server";

export const addUser = (userData) => {
  const postRequest = address + "/users";
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

export const findUser = (userId) => {
  const postRequest = address + "/users?id=" + userId;
  return async (dispatch) => {
    await axios
      .get(postRequest)
      .then((response) => {
        dispatch({
          type: "FIND_USER",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "FIND_USER_FAILED",
          payload: "Failed",
        });
      });
  };
};
export const clearState = () => {
  return {
    type: "CLEAR_STATE",
  };
};
