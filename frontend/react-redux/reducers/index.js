import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";
import foodItemReducer from "./foodItemReducer";
export default combineReducers({
  countReducer,
  loginReducer,
  foodItemReducer,
});
