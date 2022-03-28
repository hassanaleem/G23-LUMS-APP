import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  countReducer,
  loginReducer,
});
