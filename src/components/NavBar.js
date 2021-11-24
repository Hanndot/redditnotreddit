import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="bottom-nav">
      <NavLink to="/" className="link nav-link">
        Homepage
      </NavLink>
      <NavLink to="/search" className="link nav-link">
        Search
      </NavLink>
      <NavLink to="/about" className="link nav-link">
        About
      </NavLink>
      <NavLink to="/srlist" className="link nav-link">
        Subreddit List
      </NavLink>
    </div>
  );
}
