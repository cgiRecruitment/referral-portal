import { SET_PROFILES } from "../actions/profileActions";

const initialState = {
  profiles: false
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.data,
        activeProfiles: action.data.filter(profile =>
            profile.status == "Application Received" ||
            profile.status == "Interview Scheduled" ||
            profile.status == "Offer Made" ||
            profile.status == "On Hold")
      };
    default: {
      return state;
    }
  }
}

export default profileReducer;
