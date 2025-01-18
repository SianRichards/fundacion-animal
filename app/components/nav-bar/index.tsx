import { NavLink, useParams } from "@remix-run/react";
import LanguageToggle from "../language-toggle";

const NavBar = () => {
  const { lang } = useParams(); // Extract the current language from the route params
  const languagePrefix = lang ? `/${lang}` : ""; // Default to an empty string if no lang is provided

  return (
    <nav className="bg-gray-100 flex justify-between pr-10">
      <ul className="flex border-b">
        <li className="-mb-px mr-1">
          <NavLink
            to={`${languagePrefix}/`}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Home
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to={`${languagePrefix}/about-us`}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            About us
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to={`${languagePrefix}/donate`}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Donate
          </NavLink>
        </li>
        <li className="-mb-px mr-1">
          <NavLink
            to={`${languagePrefix}/dogs`}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Adoptable dogs
          </NavLink>
        </li>
      </ul>
      <LanguageToggle />
    </nav>
  );
};

export default NavBar;
