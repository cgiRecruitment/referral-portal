import { STORE_AVAILABILITY_OVERVIEW } from '../actions/calenderActions'

const initialState = {
    availabilityOverview: []
}

function calenderReducer(state = initialState, action) {
    switch (action.type) {
        case STORE_AVAILABILITY_OVERVIEW:
            return {
                ...state,
                availabilityOverview: action.data
            };
        default: {
            return state
        }
    }

}

export default calenderReducer
