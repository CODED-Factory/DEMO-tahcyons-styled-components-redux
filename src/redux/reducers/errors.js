import { GET_ERRORS } from "../actions/types";

const initialState = {};

export default (state = initialState, { type, errors }) => {
  switch (type) {
    case GET_ERRORS:
      return errors;

    default:
      return state;
  }
};
