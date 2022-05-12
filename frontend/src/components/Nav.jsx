/* eslint-disable react/button-has-type */
import { Link } from "react-router-dom";
import logo from "../assets/Logo3.png";

import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar_mt">
      <div className="navbar_logo_mt" />
      <Link to="/" className="nav_logo_mt">
        <img src={logo} className="nav_logo_mt" alt="logo" />
      </Link>
    </nav>
  );
}

export default Nav;
