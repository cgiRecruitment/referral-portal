import {
    SET_NOTIFICATION,
    CLOSE_NOTIFICATION
} from "../actions/notificiationActions";

const initialState = {
    showNotification: false,
    notification: [],
};

function notificationReducer(state = initialState, action) {
    switch (action.type) {
        case SET_NOTIFICATION:
            return {
                ...state,
                showNotification: true,
                notification: action.data
            };

        case CLOSE_NOTIFICATION:
            return {
                ...state,
                showNotification: false,
                notification: []
            };
        default: {
            return state;
        }
    }
}
export default notificationReducer;
