import { SET_CURRENT_USER } from "../actions/types";

const initialState = {
  user: null
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
