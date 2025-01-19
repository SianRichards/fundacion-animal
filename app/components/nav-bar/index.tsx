import { NavLink, useLocation, useParams } from "@remix-run/react";
import LanguageToggle from "../language-toggle";

const Link = ({
  routeName,
  displayName,
}: {
  routeName: string;
  displayName: string;
}) => {
  const { lang } = useParams();
  const { pathname } = useLocation();
  const languagePrefix = lang ? `/${lang}` : "";

  return (
    <li className="-mb-px mr-1 rounded-t-md">
      <NavLink
        to={`${languagePrefix}/${routeName}`}
        className={({ isActive }) => {
          const isExactHome =
            routeName === "" && pathname === `${languagePrefix}/`;
          return isExactHome || (isActive && routeName !== "")
            ? "active !bg-[#006ba1] rounded-t-md !text-white !border-none"
            : "inactive rounded-t-md";
        }}
      >
        {displayName}
      </NavLink>
    </li>
  );
};

const NavBar = ({ languageStrings }) => {
  return (
    <nav className="bg-[#f4ce15] flex justify-between pr-10 border-b border-blue-900">
      <ul className="flex border-b mt-1 ml-1">
        <Link
          routeName=""
          displayName={languageStrings["navigation"]["home"]}
        />
        <Link
          routeName="about-us"
          displayName={languageStrings["navigation"]["about-us"]}
        />
        <Link
          routeName="how-to-help"
          displayName={languageStrings["navigation"]["how-to-help"]}
        />
        <Link
          routeName="adoptable-dogs"
          displayName={languageStrings["navigation"]["adoptable-dogs"]}
        />
        <Link
          routeName="news"
          displayName={languageStrings["navigation"]["news"]}
        />
      </ul>
      <div className="flex gap-4">
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default NavBar;
