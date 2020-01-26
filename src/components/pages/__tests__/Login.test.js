import React from "react";
import { shallow, mount } from "enzyme";

// Components
import { Login } from "../Login";

// Test Utils
import { type, fakeUserData } from "../../../testUtils";

describe("<Login />", () => {
  const mockLogin = jest.fn();
  const userData = fakeUserData();
  const { username, password } = userData;

  it("renders and matches snapshot", () => {
    const wrapper = shallow(<Login errors={{}} />);
    expect(wrapper.find('[data-test="login-form"]')).toMatchSnapshot();
  });

  it("updates the form contents when there are changes", () => {
    const wrapper = mount(<Login errors={{}} />);
    type(wrapper, "username", username);
    type(wrapper, "password", password);
    expect(wrapper.find('[data-test="login-form"]')).toMatchSnapshot();
  });

  it("renders errors on the form", () => {
    const wrapper = shallow(
      <Login
        errors={{
          username: ["this field cannot be blank"],
          password: ["this field cannot be blank"]
        }}
      />
    );
    expect(wrapper.find('[data-test="login-form"]')).toMatchSnapshot();
  });

  it("submits the user data", async () => {
    const wrapper = mount(<Login login={mockLogin} errors={{}} />);
    type(wrapper, "username", username);
    type(wrapper, "password", password);

    wrapper.find("form").simulate("submit");

    expect(mockLogin).toHaveBeenCalledTimes(1);
    expect(mockLogin).toHaveBeenCalledWith(userData);
  });
});
