import { combineReducers } from "redux";
import countReducer from "./countReducer";
import loginReducer from "./loginReducer";
import eventsReducer from "./eventsReducer";
import fooditemReducer from "./fooditemReducer";
export default combineReducers({
  countReducer,
  loginReducer,
  eventsReducer,
  fooditemReducer,
});
