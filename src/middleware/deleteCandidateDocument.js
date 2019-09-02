import { DELETE_DOCUMENT } from "../actions/documentAction";
import { constants } from "../utility/constants";
import axiosClient from "../AxiosClient";
import { setGeneralError } from "../actions/errorActions";
import { setNotification } from "../actions/notificiationActions";

const deleteCandidateDocument = store => next => async action => {
  next(action);

  if (action.type !== DELETE_DOCUMENT) {
    return;
  }

  const dispatch = store.dispatch;

  try {

    const config = {
      method: 'post',
      url: constants.URLS.DELETE_CANDIDATE_DOCUMENT.replace('%PATH_PARAM%',action.data.candidateId)
      .replace('%QUERY_PARAM%', action.data.fileId)
    }

    const res = await axiosClient(config);
    if(res){
      dispatch(setNotification("Successful Deletion"));
    }    
  
  } catch (e) {
    console.error(e);
  }
};

export { deleteCandidateDocument };
