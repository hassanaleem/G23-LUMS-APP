import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";

import eventsReducer from "./eventsReducer";

import foodItemReducer from "./foodItemReducer";
export default combineReducers({
  countReducer,
  loginReducer,
  eventsReducer,
  foodItemReducer,
});
