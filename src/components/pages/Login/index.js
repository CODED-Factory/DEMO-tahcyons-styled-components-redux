import React, { useReducer, useEffect } from "react";
import { connect } from "react-redux";

// Components
import TextFieldGroup from "../../common/TextFieldGroup";
import Alert from "../../common/Alert";

// Styles
import LoginStyles from "./styles/LoginStyles";

// Local Reducers
import userDataReducer from "./userDataReducer";

// Actions
import { login, resetErrors } from "../../../redux/actions";

export const Login = ({ user, errors, login, resetErrors }) => {
  const initialState = {
    username: "",
    password: ""
  };

  const [{ username, password }, dispatch] = useReducer(
    userDataReducer,
    initialState
  );

  useEffect(() => resetErrors, [resetErrors]);

  const onChange = e =>
    dispatch({ type: e.target.name, payload: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    login({ username, password });
  };

  return (
    <LoginStyles className="pa6 black-80">
      <form
        className="measure center bg-white pa4 br2"
        onSubmit={onSubmit}
        data-test="login-form"
      >
        <fieldset id="login" className="ba b--transparent ph0 mh0">
          <legend className="f4 fw6 ph0 mh0">Sign In</legend>
          {errors.detail && <Alert level="error" text={errors.detail} />}
          <TextFieldGroup
            name="username"
            value={username}
            label="Username"
            placeholder="Mr Potato"
            info="a username do you have one?"
            error={errors.username}
            onChange={onChange}
            required
          />
          <TextFieldGroup
            name="password"
            type="password"
            value={password}
            label="Password"
            info="a password do you have one?"
            error={errors.password}
            onChange={onChange}
            required
          />
          <input
            className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
            type="submit"
          />
        </fieldset>
      </form>
    </LoginStyles>
  );
};

const mapStateToProps = ({ errors, auth }) => ({
  user: auth.user,
  errors
});

const mapDispatchToProps = {
  login,
  resetErrors
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
