import {CREATE_INTERVIEW} from "../actions/interviewActions";
import {constants} from "../utility/constants";

const createInterview = store => next => async action => {
    next(action);

    if (action.type !== CREATE_INTERVIEW) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        console.log(action.interview)
        action.interview.candidateId = action.interview.selectedProfile[0]["id"]
        console.log(action.interview.candidateId)
        const data = await fetch(constants.host+"/interviews", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(action.interview)

        })

    } catch (e) {
        console.error(e);
    }
};


export {createInterview};
