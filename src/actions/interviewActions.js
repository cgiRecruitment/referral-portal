export const SET_INTERVIEWS = "SET_INTERVIEWS";
export const GET_INTERVIEWS = "GET_INTERVIEWS";
export const CREATE_INTERVIEW = "CREATE_INTERVIEW";

export const setInterviews = data => {
    return {
        type: SET_INTERVIEWS,
        data
    };
};

export const getInterviews = () => {
    return {
        type: GET_INTERVIEWS
    };
};

export const createInterview = interview => {
    return {
        type: CREATE_INTERVIEW,
        interview
    };
};