import { GET_PROFILES, setProfiles } from "../actions/profileActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const getProfile = store => next => async action => {
  next(action);

  if (action.type !== GET_PROFILES) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(constants.URLS.PROFILES);

    if (res.data) {
      dispatch(setProfiles(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getProfile };
