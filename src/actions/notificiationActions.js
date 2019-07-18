
export const SET_NOTIFICATION = "SET_NOTIFICATION";
export const CLOSE_NOTIFICATION = "CLOSE_NOTIFICATION";


export const setNotification = data => {
    return {
        type: SET_NOTIFICATION,
        data
    };
};

export const closeNotification = () => {
    return {
        type: CLOSE_NOTIFICATION
    };
};
