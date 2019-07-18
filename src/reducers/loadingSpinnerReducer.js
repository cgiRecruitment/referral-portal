import { SERVICE_CALL_INTIATED, SERVICE_CALL_COMPLETED } from '../actions/loadingSpinnerActions';

const initialState = {
    serviceCallStatus: false
};

export default function loadingSpinnerReducer( state = initialState, action ) {
    switch(action.type) {

        case SERVICE_CALL_INTIATED: {
            return state = {
                ...state,
                serviceCallStatus: true
            }
        }

        case SERVICE_CALL_COMPLETED: {
            return state = {
                ...state,
                serviceCallStatus: false
            }
        }

        default: {
            return state;
        }
    }
}