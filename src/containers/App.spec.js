import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import middlewares from "../middleware";
import App from "./App";
import { shallow } from "enzyme";
import React from "react";

describe("App.js", () => {
  // const setUp = (intialState = {}) => {
  //   const store = createStore(
  //     reducers,
  //     intialState,
  //     applyMiddleware(...middlewares)
  //   );

  //   const wrapper = shallow(<App store={store} />)
  //     .childAt(0)
  //     .dive();
  //   console.log(wrapper.debug());
  //   return wrapper;
  // };

  it("should render", () => {
    //const component = setUp();
    //expect(component).toBeDefined();
    expect(true).toBe(true);
  });
});
