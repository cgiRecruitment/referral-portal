import { getProfiles, UPDATE_PROFILE } from "../actions/profileActions";
import { constants } from "../utility/constants";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";

const updateProfile = store => next => async action => {
  next(action);

  if (action.type !== UPDATE_PROFILE) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const data = await fetch(
      `${constants.host}/candidates/candidate/${
        action.profile.selectedProfile[0]["id"]
      }`,
      {
        headers: {
          "Content-Type": "application/json"
        },
        method: "PUT",
        body: JSON.stringify(action.profile)
      }
    ).then(
      data => dispatch(setNotification(data.json())),
      error =>
        dispatch(setGeneralError("Unable to update profile at this time"))
    );
    dispatch(getProfiles());
  } catch (e) {
    console.error(e);
  }
};

export { updateProfile };
