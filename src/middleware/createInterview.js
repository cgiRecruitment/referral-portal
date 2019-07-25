import { CREATE_INTERVIEW, getInterviews } from "../actions/interviewActions";
import { setNotification } from "../actions/notificiationActions";
import { setGeneralError } from "../actions/errorActions";
import axiosClient from "../AxiosClient";

const createInterview = store => next => async action => {
  next(action);

  if (action.type !== CREATE_INTERVIEW) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    action.interview.candidateId = action.interview.selectedProfile[0]["id"];
    const config = {
      method: 'post',
      url: `/interviews`, 
      headers: { 'Content-Type': 'application/json' },
      data : JSON.stringify(action.interview)
    }
    const res = await axiosClient(config);
     if(res.data){
      dispatch(setNotification(res.data));
      dispatch(getInterviews());
     }else{
        dispatch(setGeneralError("Unable to create interview at this time"))
     }
  } catch (e) {
    console.error(e);
  }
};

export { createInterview };
