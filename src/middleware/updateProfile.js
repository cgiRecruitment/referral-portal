import { updateProfileStore, UPDATE_PROFILE } from "../actions/profileActions";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const updateProfile = store => next => async action => {
  next(action);

  if (action.type !== UPDATE_PROFILE) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const config = {
      method: 'put',
      url: constants.URLS.UPDATE_PROFILE.replace('%PATH_PARAM%', action.profile.selectedProfile[0]["id"]),
      headers: { 'Content-Type': 'application/json' },
      data : action.profile
    }
    const res = await axiosClient(config);
    if(res.data){
      dispatch(updateProfileStore(res.data));
      dispatch(setNotification(res.data));
    }else{
      dispatch(setGeneralError(constants.UPDATE_PROFILE_ERROR))
    }
  } catch (e) {
    console.error(e);
  }
};

export { updateProfile };
