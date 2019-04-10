import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import profileReducer from './profileReducer'
import calenderReducer from './calenderReducer'


export default combineReducers({
    routing: routerReducer,
    profileReducer,
    calenderReducer

})

