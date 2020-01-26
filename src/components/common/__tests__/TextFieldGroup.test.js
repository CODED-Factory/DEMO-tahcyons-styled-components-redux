import React from "react";
import { shallow } from "enzyme";

// Components
import TextFieldGroup from "../TextFieldGroup";

// Test Utils
import { type } from "../../../testUtils";

describe("TextFieldGroup", () => {
  describe("rendering", () => {
    it("renders with basic props", () => {
      const wrapper = shallow(
        <TextFieldGroup
          name="password"
          type="password"
          value="password123"
          label="Password"
          onChange={() => {}}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
    it("renders with optional props", () => {
      const wrapper = shallow(
        <TextFieldGroup
          name="password"
          type="password"
          value=""
          label="Password"
          required
          disabled
          info="put yo password"
          placeholder="password123"
          error="y u no password?!"
          onChange={() => {}}
        />
      );
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe("interaction", () => {
    it("runs the onChange function", () => {
      const onChange = jest.fn();
      const wrapper = shallow(
        <TextFieldGroup
          name="password"
          type="password"
          value="password123"
          label="Password"
          onChange={onChange}
        />
      );
      type(wrapper, "password", "password123");
      expect(onChange).toHaveBeenCalled();
    });
  });
});
