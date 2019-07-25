import {
  GET_INTERVIEW_TYPE_LIST,
  setInterviewTypeList
} from "../actions/prefillActions";
import axiosClient from "../AxiosClient";

const getInterviewTypes = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEW_TYPE_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(`/interviews/types`);

    if (res.data) {
      dispatch(setInterviewTypeList(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterviewTypes };
