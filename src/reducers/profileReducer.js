import {CREATE_PROFILE, SET_PROFILES, UPDATE_PROFILE} from "../actions/profileActions";

const initialState = {
    profiles: false
};

const activeProfile = ["Application Received", "Interview Scheduled", "Offer Made", "On Hold"]

function profileReducer(state = initialState, action) {
    switch (action.type) {
        case SET_PROFILES:

            const activeProfiles = action.data.filter(profile =>
                activeProfile.includes(profile.status));
            const allButRejectedProfiles = action.data.filter(profile => profile.status != "Rejected");

            return {
                ...state,
                activeProfiles: activeProfiles,
                allButRejectedProfiles: allButRejectedProfiles,
                profiles: action.data
            }


        case CREATE_PROFILE:
            return {
                ...state,
                profile: action.data
            }

        case UPDATE_PROFILE:
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
