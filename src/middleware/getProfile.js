import { GET_PROFILES, setProfiles } from "../actions/profileActions";
import axiosClient from "../AxiosClient";

const getProfile = store => next => async action => {
  next(action);

  if (action.type !== GET_PROFILES) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(`/candidates/`);

    if (res.data) {
      dispatch(setProfiles(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getProfile };
