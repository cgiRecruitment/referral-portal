import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { getProfile } from "./middleware/getProfile";
import { getAvailabilityOverview } from "./middleware/getAvailabilityOverview";
import { getSkillSetList } from "./middleware/getSkillsets";
import { getStatusList } from "./middleware/getStatusList";
import { createProfile } from "./middleware/createProfile";
import { createInterview } from "./middleware/createInterview";
import { getScheduleByDate } from "./middleware/getScheduleByDate";
import { loginUser } from "./middleware/loginUser";
import { getMeetinRoomList } from "./middleware/getMeetingRoomList";
import { getInterviewerList } from "./middleware/getInterviewerList";
import { getInterview } from "./middleware/getInterviews";
import { updateProfile } from "./middleware/updateProfile";
import { getInterviewTypes } from "./middleware/getInterviewTypes";
import { createComment } from "./middleware/createComment";

const initialState = {};
const enhancers = [];
const middleware = [
  getProfile,
  getAvailabilityOverview,
  getSkillSetList,
  getStatusList,
  getScheduleByDate,
  loginUser,
  getMeetinRoomList,
  createProfile,
  getInterviewerList,
  getInterview,
  createInterview,
  updateProfile,
  getInterviewTypes,
  createComment,
  thunk,
  routerMiddleware()
];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
