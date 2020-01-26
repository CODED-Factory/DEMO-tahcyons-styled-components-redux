import { GET_ERRORS } from "./types";

export const resetErrors = () => ({ type: GET_ERRORS, errors: {} });
