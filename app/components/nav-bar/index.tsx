import { NavLink, useParams } from "@remix-run/react";
import LanguageToggle from "../language-toggle";

const Link = ({
  routeName,
  displayName,
}: {
  routeName: string;
  displayName: string;
}) => {
  const { lang } = useParams();
  const languagePrefix = lang ? `/${lang}` : "";

  return (
    <li className="-mb-px mr-1">
      <NavLink
        to={`${languagePrefix}/${routeName}`}
        className={({ isActive }) =>
          isActive ? "active" : "inactive rounded-t-md"
        }
      >
        {displayName}
      </NavLink>
    </li>
  );
};

const NavBar = ({ languageStrings }) => {
  return (
    <nav className="bg-[#f4ce15] flex justify-between pr-10">
      <ul className="flex border-b mt-1 ml-1">
        <Link routeName="" displayName={languageStrings["home"]} />
        <Link routeName="about-us" displayName={languageStrings["about-us"]} />
        <Link
          routeName="how-to-help"
          displayName={languageStrings["how-to-help"]}
        />
        <Link
          routeName="adoptable-dogs"
          displayName={languageStrings["adoptable-dogs"]}
        />
        <Link routeName="news" displayName={languageStrings["news"]} />
      </ul>
      <LanguageToggle />
    </nav>
  );
};

export default NavBar;
