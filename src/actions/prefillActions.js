export const GET_STATUS_LIST = "GET_STATUS_LIST";
export const SET_STATUS_LIST = "SET_STATUS_LIST";
export const GET_SKILL_SET_LIST = "GET_SKILL_SET_LIST";
export const SET_SKILL_SET_LIST = "SET_SKILL_SET_LIST";

export const getSkillSetList = () => {
  return {
    type: GET_SKILL_SET_LIST
  };
};

export const setSkillSetList = data => {
  return {
    type: SET_SKILL_SET_LIST,
    data
  };
};

export const getStatusList = () => {
  return {
    type: GET_STATUS_LIST
  };
};

export const setStatusList = data => {
  return {
    type: SET_STATUS_LIST,
    data
  };
};
