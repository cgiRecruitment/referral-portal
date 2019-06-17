import {UPDATE_PROFILE} from "../actions/profileActions";
import {constants} from "../utility/constants";
import {setGeneralError} from "../actions/errorActions";
import {loginLogoutStatus} from "../actions/userActions";

const updateProfile = store => next => async action => {
    next(action);

    if (action.type !== UPDATE_PROFILE) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        const data = await fetch(constants.host+"/candidates/candidate/"+action.profile.id+"/status", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: action.profile,

        })
            .then(() => {
                window.location = "/";
            });

    } catch (e) {
        console.error(e);
    }
};


export {updateProfile};
