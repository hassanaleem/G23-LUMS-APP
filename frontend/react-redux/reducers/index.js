import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";
import eventsReducer from "./eventsReducer";
import foodItemReducer from "./fooditemReducer";
import usersReducer from "./usersReducer";
import courseReducer from "./courseReducer";
export default combineReducers({
  countReducer,
  loginReducer,
  eventsReducer,
  foodItemReducer,
  usersReducer,
  courseReducer,
});
