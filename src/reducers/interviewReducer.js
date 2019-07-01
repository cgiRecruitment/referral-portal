import {CREATE_INTERVIEW, SET_INTERVIEWS} from "../actions/interviewActions";

const initialState = {
    interviews: false
};


function interviewReducer(state = initialState, action) {
    switch (action.type) {
        case SET_INTERVIEWS:
            return {
                ...state,
                interviews: action.data,
            }

        case CREATE_INTERVIEW:
            return {
                ...state,
                interview: action.data
            }
        default: {
            return state;
        }
    }
}

export default interviewReducer;
