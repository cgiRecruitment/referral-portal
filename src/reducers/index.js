import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profileReducer'


export default combineReducers({
    routing: routerReducer,
    profileReducer

})

