import { CREATE_PROFILE, getProfiles } from "../actions/profileActions";
import { setNotification } from "../actions/notificiationActions";
import { endSpinner, loadSpinner } from "../actions/loadingSpinnerActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

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

    const config = {
      method: 'post',
      url: constants.URLS.CREATE_PROFILE,
      headers: { 'Content-Type': 'application/json' },
      data : formData
    }
    const res = await axiosClient(config);

    dispatch(endSpinner());
    
    if (res.data) {
      dispatch(setNotification(res.data));
      dispatch(getProfiles());
    }
  } catch (e) {
    console.error(e);
  }
};

export { createProfile };
