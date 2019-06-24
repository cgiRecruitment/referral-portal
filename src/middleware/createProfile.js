import {CREATE_PROFILE} from "../actions/profileActions";
import {constants} from "../utility/constants";

const createProfile = store => next => async action => {
    next(action);

    if (action.type !== CREATE_PROFILE) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        console.log(action.profile)
        const data = await fetch(constants.host +"/candidates", {
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            method: "POST",
            body: action.profile,
        });

    } catch (e) {
        console.error(e);
    }
};


export {createProfile};
