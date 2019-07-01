import { CREATE_INTERVIEW } from "../actions/interviewActions";
import { constants } from "../utility/constants";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";

const createInterview = store => next => async action => {
  next(action);

  if (action.type !== CREATE_INTERVIEW) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    action.interview.candidateId = action.interview.selectedProfile[0]["id"];
    await fetch(`${constants.host}/interviews`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(action.interview)
    }).then(
      data => dispatch(setNotification(data.json())),
      error =>
        dispatch(setGeneralError("Unable to create interview at this time"))
    );
  } catch (e) {
    console.error(e);
  }
};

export { createInterview };
