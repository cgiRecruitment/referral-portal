import {CREATE_INTERVIEW} from "../actions/interviewActions";
import {constants} from "../utility/constants";
import {setNotification} from "../actions/notificiationActions";

const createInterview = store => next => async action => {
    next(action);

    if (action.type !== CREATE_INTERVIEW) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        action.interview.candidateId = action.interview.selectedProfile[0]["id"]
        const data = await fetch(`${constants.host}/interviews`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(action.interview)
        })
            .then(data => data.json())
            .then(response => {
                return response;
            });

        if (data) {
            dispatch(setNotification(data))
        }

    } catch (e) {
        console.error(e);
    }
};


export {createInterview};
