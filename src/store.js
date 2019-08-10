import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import middlewares from "./middleware";

const enhancers = [];
const initialState = {};

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

export default store;
