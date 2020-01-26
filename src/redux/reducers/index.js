import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";

const rootReducer = combineReducers({
  auth: authReducer,
  errors: errorReducer
});

export default rootReducer;
