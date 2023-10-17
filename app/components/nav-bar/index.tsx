import React, { useState } from "react";
import { NavLink } from "@remix-run/react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            About Us
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            Donate
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "active" : "inactive"
            }
          >
            Home
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
