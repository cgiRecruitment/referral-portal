import {CREATE_PROFILE, SET_PROFILES} from "../actions/profileActions";

const initialState = {
    profiles: false
};

const activeProfile = ["Application Received", "Interview Scheduled", "Offer Made", "On Hold"]

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:
            return {
                ...state,
                profiles: action.data,
                activeProfiles: action.data.filter(profile =>
                    activeProfile.includes(profile.status)),
                allButRejectedProfiles: action.data.filter(profile => profile.status != "Rejected CGI")
            }

        case CREATE_PROFILE:
            return {
                ...state,
                profile: action.data
            }
        default: {
            return state;
        }
    }
}

export default profileReducer;
