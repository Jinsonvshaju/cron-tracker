import React from "react";
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as BatonLogo } from "../../../logo/logo-login-new.svg";
import "./navigation.styles.scss";

function Navigation(props) {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <BatonLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/home">
            HOME
          </Link>
          <Link className="nav-link" to="/cron">
            CRON
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;
