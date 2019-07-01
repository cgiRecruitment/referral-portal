import {
    SET_NOTIFICATION
} from "../actions/notificiationActions";

const initialState = {
    notification: [],
};

function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                notification: action.data
            };
        default: {
            return state;
        }
    }
}
export default notificationReducer;
