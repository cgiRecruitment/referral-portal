import { UPDATE_INTERVIEW } from "../actions/interviewActions";
import { constants } from "../utility/constants";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";

const updateInterview = store => next => async action => {
  next(action);

  if (action.type !== UPDATE_INTERVIEW) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(
      `${constants.host}/interviews/${
        action.interview.selectedInterview[0]["id"]
      }`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(action.interview)
      }
    ).then(
      data => dispatch(setNotification(data.json())),
      error =>
        dispatch(setGeneralError("Unable to update interview at this time"))
    );
  } catch (e) {
    console.error(e);
  }
};

export { updateInterview };
