import axios from "axios";
import { address } from "./server";

export const login = (user, password) => {
  const getRequest =
    "http://" + address + "/login?" + `id=${user}` + `&password=${password}`;
  return (dispatch) => {
    axios
      .get(getRequest)
      .then((response) => {
        dispatch({
          type: "SIGN_IN",
          payload: response.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: "SIGN_IN_FAILED",
          payload: "Failed",
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
