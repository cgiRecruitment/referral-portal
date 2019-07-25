import { CREATE_COMMENT, getProfiles } from "../actions/profileActions";
import { setNotification } from "../actions/notificiationActions";
import axiosClient from "../AxiosClient";

const createComment = store => next => async action => {
  next(action);

  if (action.type !== CREATE_COMMENT) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const config = {
      method: 'post',
      url: `/candidates/candidate/${action.comment.selectedProfile[0]["id"]}/comments`,
      headers: { 'Content-Type': 'application/json' },
      data : JSON.stringify(action.comment)
    }

    const res = await axiosClient(config);
    if (res.data) {
      dispatch(setNotification(res.data));
      dispatch(getProfiles());
    }
  } catch (e) {
    console.error(e);
  }
};

export { createComment };
