import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import { getProfile } from './middleware/getProfile'
import { getAvailabilityOverview } from './middleware/getAvailabilityOverview'

const initialState = {}
const enhancers = []
const middleware = [
    getProfile,
    getAvailabilityOverview,
    thunk,
    routerMiddleware(),
]

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.devToolsExtension

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)
const store = createStore(rootReducer, initialState, composedEnhancers)

export default store
