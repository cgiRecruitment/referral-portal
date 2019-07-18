import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import profileReducer from "./profileReducer";
import calenderReducer from "./calenderReducer";
import prefillReducer from "./prefillReducer";
import userReducer from "./userReducer";
import errorReducer from "./errorReducer";
import interviewReducer from "./interviewReducer";
import notificationReducer from "./notificationReducer";
import loadingSpinnerReducer from "./loadingSpinnerReducer";

export default combineReducers({
  routing: routerReducer,
  profileReducer,
  calenderReducer,
  prefillReducer,
  userReducer,
  errorReducer,
  notificationReducer,
  interviewReducer,
  loadingSpinnerReducer
});
