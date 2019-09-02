import { FILE_DOWNLOAD_LINK, DELETE_DOCUMENT, UPLOAD_DOCUMENT } from '../actions/documentAction';

const initialState = {
    downloadFile: false,
    deleteDocument: false,
    uploadDocument: false
};

export default function documentReducer( state = initialState, action ) {

    switch (action.type) {
        case FILE_DOWNLOAD_LINK:
            return state = {
                ...state,
                downloadFile: true
            };
    
        // case DELETE_DOCUMENT:
        //   return {
        //     ...state,
        //     deleteDocument
        //   };
        
        case UPLOAD_DOCUMENT:
          return {
            ...state,
            uploadDocument: true
          };
            
        default: {
          return state;
        }
      }
}