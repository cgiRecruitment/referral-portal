import { createStore, applyMiddleware } from "redux";
import reducers from "../reducers";
import middlewares from "../middleware";
import App from "./App";
import { shallow, mount } from "enzyme";
import { Provider } from "react-redux";
import React from "react";

describe("App.js", () => {
  const setUp = (intialState = {}) => {
    const store = createStore(
      reducers,
      intialState,
      applyMiddleware(...middlewares)
    );

    const wrapper = shallow(<App store={store} />)
      .childAt(0)
      .dive();
    console.log(wrapper);
    return wrapper;
  };

  it("should render", () => {
    const component = setUp();
    expect(component).toBeDefined();
  });
});
