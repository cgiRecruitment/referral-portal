import { FILE_DOWNLOAD_LINK } from '../actions/downloadFileActions';

const initialState = {
    downloadFile: false
};

export default function downloadFileReducer( state = initialState, action ) {

    if(action.type ===  FILE_DOWNLOAD_LINK) {
        return state = {
            ...state,
            downloadFile: true
        }
    }else{
        return state;
    }
}