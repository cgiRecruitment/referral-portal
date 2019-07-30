import { FILE_DOWNLOAD_LINK } from '../actions/downloadFileActions';

const initialState = {
    downloadFile: false
};

export default function downloadFileReducer( state = initialState, action ) {
    switch(action.type) {

        case FILE_DOWNLOAD_LINK: {
            return state = {
                ...state,
                downloadFile: true
            }
        }

        default: {
            return state;
        }
    }
}