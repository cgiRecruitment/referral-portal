export const constants = {
  host: "https://manage-candidates-test.cfapps.io",

  pageSize: 20,
  REJECTED: "Rejected",
  OFFER_MADE: "Offer Made",
  JOINED: "Joined",
  DISABLED: "disabled",
  AUTH_TOKEN: "auth-token",
  ACTIVE_PROFILES: [
    "Application Received",
    "Interview Scheduled",
    "Offer Made",
    "On Hold"
  ],
  URLS:{
    CREATE_COMMENT: "/candidates/candidate/%PATH_PARAM%/comments",
    INTERVIEW:"/interviews",
    CREATE_PROFILE: "/candidates/create",
    INTERVIEW_TYPE: "/interviews/types",
    INTERVIEW_LOCATION: "/interviews/locations",
    PROFILES: "/candidates/",
    SKILLS: "/candidates/skills",
    STATUS: "/candidates/status",
    LOGIN: "/login",
    UPDATE_INTERVIEW: "/interviews/%PATH_PARAM%",
    UPDATE_PROFILE: "/candidates/candidate/",
    GET_FILE_DOWNLOAD_LINK: "/candidates/download/%PATH_PARAM%"
  },
  SESSION_EXPIRED: "Session Expired. Please login again",
  UPDATE_INTERVIEW_ERROR: "Unable to update interview at this time",
  UPDATE_PROFILE_ERROR: "Unable to update profile at this time",
  CREATE_INTERVIEW_ERROR: "Unable to create interview at this time",
  FILE_DOWNLOAD_ERROR: "Unable to download file"
};
