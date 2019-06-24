import {UPDATE_PROFILE} from "../actions/profileActions";
import {constants} from "../utility/constants";


const updateProfile = store => next => async action => {
    next(action);

    if (action.type !== UPDATE_PROFILE) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        console.log(action.profile.selectedProfile[0]["id"])
        const data = await fetch(constants.host+"/candidates/candidate/"+action.profile.selectedProfile[0]["id"], {
            headers: {
                "Content-Type": "application/json"
            },
            method: "PUT",
            body: JSON.stringify(action.profile)

        })

    } catch (e) {
        console.error(e);
    }
};


export {updateProfile};
