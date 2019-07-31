export const FILE_DOWNLOAD_LINK = "FILE_DOWNLOAD_LINK";

export const getFileDownloadLink = file => {
    return {
      type: FILE_DOWNLOAD_LINK,
      file
    };
  };