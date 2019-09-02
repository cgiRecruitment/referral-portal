import { UPLOAD_DOCUMENT } from "../actions/documentAction";
import { constants } from "../utility/constants";
import axiosClient from "../AxiosClient";
import { setGeneralError } from "../actions/errorActions";
import { setNotification } from "../actions/notificiationActions";

const uploadCandidateDocument = store => next => async action => {
  next(action);

  if (action.type !== UPLOAD_DOCUMENT) {
    return;
  }

  const dispatch = store.dispatch;

  try {

    const config = {
      method: 'post',
      url: constants.URLS.UPLOAD_CANDIDATE_DOCUMENT.replace('%PATH_PARAM%',action.data.candidateId)
    }

    const res = await axiosClient(config);
    if(res){
      dispatch(setNotification("Successful Upload"));
    }    
  
  } catch (e) {
    console.error(e);
  }
};

export { uploadCandidateDocument };
