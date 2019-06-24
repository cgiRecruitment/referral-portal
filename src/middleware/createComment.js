import {CREATE_COMMENT} from "../actions/profileActions";
import {constants} from "../utility/constants";


const createComment = store => next => async action => {
    next(action);

    if (action.type !== CREATE_COMMENT) {
        return;
    }

    const dispatch = store.dispatch;

    try {
        console.log(action.comment.selectedProfile[0]["id"])
        const data = await fetch(constants.host+"/candidates/candidate/"+action.comment.selectedProfile[0]["id"]+"/comments", {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(action.comment)

        })

    } catch (e) {
        console.error(e);
    }
};


export {createComment};
