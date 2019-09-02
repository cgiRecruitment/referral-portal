import { FILE_DOWNLOAD_LINK } from "../actions/documentAction";
import { constants } from "../utility/constants";
import axiosClient from "../AxiosClient";
import downloadFile from "../utility/downloadFileHelper";
import { setGeneralError } from "../actions/errorActions";

const getFileDownloadLink = store => next => async action => {
  next(action);

  if (action.type !== FILE_DOWNLOAD_LINK) {
    return;
  }

  const dispatch = store.dispatch;

  try {
    const result = await axiosClient.
    get(constants.URLS.GET_FILE_DOWNLOAD_LINK.replace('%PATH_PARAM%',action.file.uploadFileId));
       
    if (result.data) {    
    downloadFile(result.data, action.file.fileName);
    }else{
      dispatch(setGeneralError(constants.FILE_DOWNLOAD_ERROR))
   }
  } catch (e) {
    console.error(e);
  }
};

export { getFileDownloadLink };
