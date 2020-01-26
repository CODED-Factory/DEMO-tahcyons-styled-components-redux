import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// Images
import logo from "../../images/logo.svg";

// Styles
import NavbarStyles from "./styles/NavbarStyles";

// Actions
import { logout } from "../../redux/actions";

export const Navbar = ({ user, logout }) => {
  return (
    <NavbarStyles className="bg-white shadow-1 fixed left-0 top-0 w-100">
      <div className="container flex justify-between items-center pv3">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to={user ? "/" : "/login"}
          onClick={user && logout}
          className="b ph3 pv2 input-reset ba b--black grow pointer f6 dib"
        >
          {user ? "LOGOUT" : "LOGIN"}
        </Link>
      </div>
    </NavbarStyles>
  );
};

const mapStateToProps = ({ auth }) => ({
  user: auth.user
});

const mapDispatchToProps = {
  logout
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
