import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="ui raised padded segment">
      <a className="ui red inverted segment">
        <i className="fire icon"></i>Burnt Bridges Studio
      </a>
      <div className="ui right floated header ">
        <button className="ui button">
          <Link to="/">
            <i className="small home icon"></i>Home
          </Link>
        </button>
        <button className="ui button">
          <Link to="/about">
            <i className="small coffee icon"></i>About
          </Link>
        </button>
        <button className="ui button">
          <Link to="/contact">
            <i className="small bullhorn icon"></i>Contact
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
