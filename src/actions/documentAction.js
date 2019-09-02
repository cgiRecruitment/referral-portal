export const FILE_DOWNLOAD_LINK = "FILE_DOWNLOAD_LINK";
export const DELETE_DOCUMENT = "DELETE_DOCUMENT";
export const UPLOAD_DOCUMENT = "UPLOAD_DOCUMENT";

export const getFileDownloadLink = file => {
    return {
      type: FILE_DOWNLOAD_LINK,
      file
    };
  };

  export const deleteCandidateDocument = data => {
    return {
      type: DELETE_DOCUMENT,
      data
    };
  };

  export const uploadCandidateDocument = data => {
    return {
      type: UPLOAD_DOCUMENT,
      data
    };
  };