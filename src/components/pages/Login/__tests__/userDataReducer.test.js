import reducer from "../userDataReducer";

describe("userData reducer", () => {
  const initialState = { username: "something", password: "something else" };
  it("should return the initial state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  it("should handle changing the username", () => {
    const expectedState = { username: "mr potato", password: "something else" };
    const action = { type: "username", payload: "mr potato" };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });

  it("should handle changing the password", () => {
    const expectedState = { username: "something", password: "lololo" };
    const action = { type: "password", payload: "lololo" };
    expect(reducer(initialState, action)).toEqual(expectedState);
  });
});
