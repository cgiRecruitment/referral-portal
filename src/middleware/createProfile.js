import { CREATE_PROFILE, getProfiles } from "../actions/profileActions";
import { constants } from "../utility/constants";
import { setNotification } from "../actions/notificiationActions";
import { endSpinner, loadSpinner } from "../actions/loadingSpinnerActions";

const createProfile = store => next => async action => {
  next(action);

  if (action.type !== CREATE_PROFILE) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    var formData = new FormData();
    var candidateInformation = action.profile;

    dispatch(loadSpinner());

    Array.from(candidateInformation.documents).map((file) => {
      formData.append("uploadingFiles", file);
    });  

    formData.append("candidate", candidateInformation.details);

    const data = await fetch(`${constants.host}/candidates/create`, {
     
      method: "POST",
      body: formData
    }).then(data => data.json());

    dispatch(endSpinner());
    
    if (data) {
      dispatch(setNotification(data));
      dispatch(getProfiles());
    }
  } catch (e) {
    console.error(e);
  }
};

export { createProfile };
