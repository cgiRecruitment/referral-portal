import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
import profileReducer from "./profileReducer";
import calenderReducer from "./calenderReducer";
import prefillReducer from "./prefillReducer";
import userReducer from "./userReducer";

export default combineReducers({
  routing: routerReducer,
  profileReducer,
  calenderReducer,
  prefillReducer,
  userReducer
});
