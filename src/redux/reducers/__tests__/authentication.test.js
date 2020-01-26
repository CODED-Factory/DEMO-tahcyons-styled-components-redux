import { SET_CURRENT_USER } from "../../actions/types";
import reducer from "../authentication";

describe("authentication reducer", () => {
  const initialState = { user: null };
  it("should return the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SET_CURRENT_USER", () => {
    const user = { username: "mr potato", exp: new Date().getTime / 1000 };
    expect(
      reducer(initialState, {
        type: SET_CURRENT_USER,
        payload: user
      })
    ).toEqual({ user });
  });
});
