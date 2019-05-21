import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const LOGIN_TRUE = "LOGIN_TRUE";
export const LOGIN_FALSE = "LOGIN_FALSE";

//check if the user is logged in , maybe check is there is a token ...
export const checkCurentLogin = () => dispatch => {
  console.log("check if a user is logged");
  const username = localStorage.getItem("bookUser");
  username ? dispatch({ type: LOGIN_TRUE }) : dispatch({ type: LOGIN_FALSE });
};

export const login = userData => dispatch => {
  dispatch({ type: LOGIN_START });
  axios
    .post("https://backend-books.herokuapp.com/api/login", userData)
    .then(res => {
      localStorage.setItem("bookrUser", userData.username); //sending the username to localstorage
      localStorage.setItem("token", res.data.token); //sending the token in local storage
      dispatch({ type: LOGIN_SUCCESS, payload: userData.username });
    })
    .catch(err => dispatch({ type: LOGIN_FAILURE, payload: err.message }));
};
