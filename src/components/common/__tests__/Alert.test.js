import React from "react";
import { shallow } from "enzyme";

// Components
import Alert from "../Alert";

describe("Alert", () => {
  it("renders correctly", () => {
    let wrapper;
    wrapper = shallow(<Alert level={"warning"} text="warning" />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<Alert level={"error"} text="error" />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<Alert level={"info"} text="info" />);
    expect(wrapper).toMatchSnapshot();

    wrapper = shallow(<Alert level={"success"} text="success" />);
    expect(wrapper).toMatchSnapshot();
  });
});
