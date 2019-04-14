import { SET_SKILL_SET_LIST, SET_STATUS_LIST } from "../actions/prefillActions";

const initialState = {
  skillSet: [],
  status: []
};

function prefillReducer(state = initialState, action) {
  switch (action.type) {
    case SET_SKILL_SET_LIST:
      return {
        ...state,
        skillSet: action.data
      };
    case SET_STATUS_LIST:
      return {
        ...state,
        status: action.data
      };
    default: {
      return state;
    }
  }
}

export default prefillReducer;
