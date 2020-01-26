import { GET_ERRORS } from "../../actions/types";
import reducer from "../errors";

describe("errors reducer", () => {
  const initialState = {};
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_ERRORS", () => {
    const errors = { username: ["this field cannot be left blank"] };
    expect(
      reducer(initialState, {
        type: GET_ERRORS,
        errors
      })
    ).toEqual(errors);
  });

  it("should replace the previous state entirely", () => {
    const errors = { newError: "you made another mistake" };
    expect(
      reducer(
        { firstError: "you made a mistake" },
        { type: GET_ERRORS, errors }
      )
    ).toEqual(errors);
  });
});
