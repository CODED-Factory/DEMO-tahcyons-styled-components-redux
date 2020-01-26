import axios from "axios";
import jwt from "jwt-simple";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";

// Actions
import { logout, checkForExpiredToken, login } from "../authentication";
import { SET_CURRENT_USER, GET_ERRORS } from "../types";

// Test Utils
import { fakeUserData } from "../../../testUtils";

// Mocks
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock("axios");

describe("logout", () => {
  it("creates an action to set the current user to null", () => {
    const expectedAction = { type: SET_CURRENT_USER, payload: null };
    expect(logout()).toEqual(expectedAction);
  });

  it("clears the token from localstorage", () => {
    logout();
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
  });

  it("clears the axios authorization header", () => {
    axios.defaults.headers.common.Authorization = "LOL!";
    logout();
    expect(axios.defaults.headers.common.Authorization).toBe(undefined);
  });
});

describe("checkForExpiredToken", () => {
  const userData = fakeUserData();
  const user = {
    username: userData.username,
    exp: new Date().getTime() / 1000 + 10000
  };
  const token = jwt.encode(user, "lol");

  let store;

  beforeEach(() => {
    localStorage.setItem.mockClear();
    store = mockStore({ user: null });
  });

  it("does nothing if there is no token", async () => {
    await store.dispatch(checkForExpiredToken());
    expect(store.getActions()).toEqual([]);
  });

  it("creates an action to set the current user if the token hasn't expired", async () => {
    localStorage.setItem("token", token);
    const expectedActions = [{ type: SET_CURRENT_USER, payload: user }];
    await store.dispatch(checkForExpiredToken());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it("calls logout if the token is expired", async () => {
    user.exp = new Date().getTime() / 1000 - 10000;
    const expiredToken = jwt.encode(user, "lol");
    localStorage.setItem("token", expiredToken);

    axios.defaults.headers.common.Authorization = "LOL!";

    const expectedActions = [{ type: SET_CURRENT_USER, payload: null }];
    await store.dispatch(checkForExpiredToken());
    expect(store.getActions()).toEqual(expectedActions);
    expect(localStorage.removeItem).toHaveBeenCalledWith("token");
    expect(axios.defaults.headers.common.Authorization).toBe(undefined);
  });
});

describe("login", () => {
  const userData = fakeUserData();
  let store;
  let user;
  let token;

  beforeEach(() => {
    localStorage.setItem.mockClear();
    store = mockStore({ user: null });
    user = { username: userData.username, exp: new Date().getTime() + 10000 };
    token = jwt.encode(user, "lol");
  });

  it("makes a request to the correct url with the correct data", async () => {
    axios.post.mockImplementationOnce(() =>
      Promise.resolve({ data: { access: token } })
    );

    await store.dispatch(login(userData));

    expect(axios.post).toHaveBeenCalledWith("/api/token/", userData);
  });

  it("sets the current user on success", async () => {
    const expectedActions = [{ type: SET_CURRENT_USER, payload: user }];

    axios.post.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          access: token
        }
      })
    );

    await store.dispatch(login(userData));

    expect(store.getActions()).toEqual(expectedActions);
    expect(localStorage.setItem).toHaveBeenCalledWith("token", token);
  });

  it("creates an error action on error", async () => {
    const errors = {
      username: ["this field cannot be blank"],
      password: ["this field cannot be blank"]
    };
    const expectedActions = [{ type: GET_ERRORS, errors }];

    axios.post.mockImplementationOnce(() =>
      Promise.reject({
        response: {
          data: errors
        }
      })
    );

    await store.dispatch(login());

    expect(store.getActions()).toEqual(expectedActions);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  it("logs the error if it is unexpected", async () => {
    const error = {
      message: "I'm an unexpected error!"
    };
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => error);

    axios.post.mockImplementationOnce(() => Promise.reject(error));

    await store.dispatch(login());

    expect(store.getActions()).toEqual([]);
    expect(localStorage.setItem).not.toHaveBeenCalled();
    expect(consoleSpy).toHaveBeenCalledWith(error);
  });
});
