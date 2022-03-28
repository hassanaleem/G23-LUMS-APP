import axios from "axios";
import {address} from "./server"

export const login = (user, password) =>  {
    // console.log("dispatch")
    // const getRequest = "http://" + address + "/login?" + `id=${user}` + `&password=${password}`;
    // console.log("getRequest" , getRequest)
    console.log("yes 2")

    console.log("dispatch")
    const getRequest = "http://" + address + "/login?" + `id=${user}` + `&password=${password}`;
    console.log("getRequest" , getRequest)
    return (dispatch) => {
     axios.get(getRequest)
        .then(response => {
            console.log("response data", response.data)
            dispatch({
                type: "SIGN_IN",
                payload: response
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

}

// export const login = (username, password) => (dispatch) => {
//     // Header
//     // const config = {
//     //   headers: {
//     //     "Content-Type": "application/json",
//     //   },
//     // };
//     // Request body
//     // const body = JSON.stringify({
//     //   username,
//     //   password,
//     // });


//     const getRequest = address + "/login?" + `id=${username}` + `pass=${password}`;
//     console.log(getRequest)
//     axios
//       .get(getRequest)
//       .then((res) => {
//         dispatch({ type: "SIGN_IN", payload: res.data });
//       })
//     //   .catch((err) => {
//     //     dispatch(returnErrors(err.response.data, err.response.status));
//     //     dispatch({
//     //       type: LOGIN_FAIL,
//     //     });
//     //   });
//   };


export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: "SIGN_OUT"
        })
    }
}

export const loginFailed = () => {
    return {
        type: "INCORRECT_CREDENTIALS",
        payload: "Incorrect Credentials"
    }
}