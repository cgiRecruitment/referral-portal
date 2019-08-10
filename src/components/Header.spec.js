import { shallow } from "enzyme";
import Header from "./Header";
import React from "react";
import { findByAttribute } from "../TestHelper";

describe("Header component", () => {
  const setUp = props => {
    return shallow(<Header {...props} />);
  };

  it("should render header", () => {
    const props = {
      logout: jest.fn()
    };
    const component = setUp(props);
    const wrapper = findByAttribute(component, "headerComponent");
    expect(wrapper.length).toBe(1);
  });

  it("should render header links", () => {
    const props = {
      logout: jest.fn()
    };
    const component = setUp(props);
    const wrapper = findByAttribute(component, "headerLinks");
    expect(wrapper.length).toBe(4);
  });

  it("should work properly on logout", () => {
    const props = {
      logout: jest.fn()
    };
    const component = setUp(props);
    const wrapper = findByAttribute(component, "logout");
    expect(wrapper.length).toBe(1);
    wrapper.simulate("click");
    expect(props.logout.mock.calls.length).toBe(1);
  });
});
