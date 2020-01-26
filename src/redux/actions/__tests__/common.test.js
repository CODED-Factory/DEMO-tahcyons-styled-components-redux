// Actions
import { resetErrors } from "../common";
import { GET_ERRORS } from "../types";

describe("resetErrors", () => {
  it("resets the error state", () => {
    const expectedAction = { type: GET_ERRORS, errors: {} };
    expect(resetErrors()).toEqual(expectedAction);
  });
});
