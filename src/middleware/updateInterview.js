import { getInterviews, UPDATE_INTERVIEW } from "../actions/interviewActions";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";
import axiosClient from "../AxiosClient";
import { constants } from "../utility/constants";

const updateInterview = store => next => async action => {
  next(action);

  if (action.type !== UPDATE_INTERVIEW) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const config = {
      method: 'put',
      url: constants.URLS.UPDATE_INTERVIEW.replace('%PATH_PARAM%',action.interview.selectedInterview[0]["id"]),
      headers: { 'Content-Type': 'application/json' },
      data : JSON.stringify(action.interview)
    }
    const res = await axiosClient(config);
    if(res.data){
      dispatch(setNotification(res.data));
  }else{
      dispatch(setGeneralError("Unable to update interview at this time"));
  }
    dispatch(getInterviews());
  } catch (e) {
    console.error(e);
  }
};

export { updateInterview };
