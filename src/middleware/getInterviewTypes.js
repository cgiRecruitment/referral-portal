import {
  GET_INTERVIEW_TYPE_LIST,
  setInterviewTypeList
} from "../actions/prefillActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";


const getInterviewTypes = store => next => async action => {
  next(action);

  if (action.type !== GET_INTERVIEW_TYPE_LIST) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const res = await axiosClient.get(constants.URLS.INTERVIEW_TYPE);

    if (res.data) {
      dispatch(setInterviewTypeList(res.data));
    }
  } catch (e) {
    console.error(e);
  }
};

export { getInterviewTypes };
