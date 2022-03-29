import axios from "axios";
import { address } from "./server";

<<<<<<< HEAD
export const login = (user, password) =>  {
    const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // Request body
    const body = JSON.stringify({
    user,
    password,
    });
    return (dispatch) => {
    axios.post(`${address}/login`, body, config)
    .then(resp => {
        dispatch({
            type: "SIGN_IN",
            payload: resp.data
        })
    })
    .catch(err => {
        dispatch({
            type: "SIGN_IN_FAILED",
            payload: "Failed"
        })
    })
    }}

=======
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
>>>>>>> Jawad

export const logout = () => {
  return (dispatch) => {
    dispatch({
      type: "SIGN_OUT",
    });
  };
};
