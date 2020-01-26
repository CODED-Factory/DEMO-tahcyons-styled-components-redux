import React from "react";
import Helmet from "react-helmet";
import { Switch, Route, Redirect } from "react-router-dom";

// Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

// Styles
import AppStyles from "./styles/AppStyles";

const App = () => {
  return (
    <>
      <Helmet>
        <title>Custom Title</title>
      </Helmet>
      <Navbar />
      <AppStyles className="pt5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect to="/" />
        </Switch>
      </AppStyles>
      <Footer />
    </>
  );
};

export default App;
