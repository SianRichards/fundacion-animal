import { NavLink } from "@remix-run/react";

const NavBar = () => {
  return (
    <nav>
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <NavLink
            to="/about-us"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About us
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/donate"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Donate
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to="/dogs"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Adoptable dogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
