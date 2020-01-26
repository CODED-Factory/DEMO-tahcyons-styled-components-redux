import React from "react";
import { shallow, mount } from "enzyme";
import { Navbar } from "../Navbar";

describe("<Navbar />", () => {
  it("renders with a login button if there's no user", () => {
    const wrapper = shallow(<Navbar />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders with a logout button if there's a user", () => {
    const wrapper = shallow(<Navbar user={{ username: "mr potato" }} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("logs the user out when the logout button is pressed", () => {
    const mockLogout = jest.fn();
    const wrapper = shallow(
      <Navbar user={{ username: "mr potato" }} logout={mockLogout} />
    );
    wrapper.find(".b").simulate("click");
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
