import { getProfile } from "./getProfile";
import { getAvailabilityOverview } from "./getAvailabilityOverview";
import { getSkillSetList } from "./getSkillsets";
import { getStatusList } from "./getStatusList";
import { createProfile } from "./createProfile";
import { createInterview } from "./createInterview";
import { getScheduleByDate } from "./getScheduleByDate";
import { loginUser } from "./loginUser";
import { getMeetinRoomList } from "./getMeetingRoomList";
import { getInterviewerList } from "./getInterviewerList";
import { getInterview } from "./getInterviews";
import { updateProfile } from "./updateProfile";
import { getInterviewTypes } from "./getInterviewTypes";
import { createComment } from "./createComment";
import { updateInterview } from "./updateInterview";
import { getFileDownloadLink } from "./downloadFile";
import { routerMiddleware } from "react-router-redux";
import thunk from "redux-thunk";

const middlewares = [
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
  updateInterview,
  getInterviewTypes,
  createComment,
  getFileDownloadLink,
  thunk,
  routerMiddleware()
];

export default middlewares;
