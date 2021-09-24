import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/GGlogo.png";

const Navigation = () => {
  return (
    <div className="Nav">
      <div className="links">
        <NavLink className="navItems" to="/">
          <img className="logo" src={logo}></img>
        </NavLink>
        <NavLink className="navItems" to="/">
          About Our Product
        </NavLink>
        {/* <NavLink className="navItems" to="/about">
          Our Story
        </NavLink> */}
        <NavLink className="navItems" to="/recipes">
          Recipes and Tips
        </NavLink>
        <NavLink className="navItems" to="/purchase">
          Contact / Purchase
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
