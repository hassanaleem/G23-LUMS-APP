import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";
import eventsReducer from "./eventsReducer";
import foodItemReducer from "./fooditemReducer";
import usersReducer from "./usersReducer";
import deadlineReducer from "./deadlineReducer";
import courseReducer from "./courseReducer";
import courseGradeReducer from "./courseGradeReducer";
import notificationReducer from "./notificationReducer";
export default combineReducers({
  countReducer,
  loginReducer,
  eventsReducer,
  foodItemReducer,
  usersReducer,
  deadlineReducer,
  courseReducer,
  courseGradeReducer,
  notificationReducer,
});
