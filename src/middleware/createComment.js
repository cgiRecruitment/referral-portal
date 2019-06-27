import {CREATE_COMMENT} from "../actions/profileActions";
import {constants} from "../utility/constants";
import {setNotification} from "../actions/notificiationActions";


const createComment = store => next => async action => {
    next(action);

    if (action.type !== CREATE_COMMENT) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        const data = await fetch(`${constants.host}/candidates/candidate/${action.comment.selectedProfile[0]["id"]}/comments`, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(action.comment)
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


export {createComment};
