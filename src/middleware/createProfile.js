import {CREATE_PROFILE} from "../actions/profileActions";
import {constants} from "../utility/constants";
import {setNotification} from "../actions/notificiationActions";

const createProfile = store => next => async action => {
    next(action);

    if (action.type !== CREATE_PROFILE) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        const data = await fetch(`${constants.host}/candidates`, {
            headers: {
                "Content-Type": "application/json",
                "Accept" : "application/json"
            },
            method: "POST",
            body: action.profile,
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


export {createProfile};
