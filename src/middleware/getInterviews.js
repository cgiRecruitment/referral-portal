import { GET_INTERVIEWS, setInterviews } from "../actions/interviewActions";
import axiosClient from "../AxiosClient";

const getInterview = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEWS) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(`/interviews/`);

    if (res.data) {
      dispatch(setInterviews(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterview };
