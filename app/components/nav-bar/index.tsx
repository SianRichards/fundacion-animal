import { NavLink, useParams } from "@remix-run/react";
import LanguageToggle from "../language-toggle";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

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

const NavBar = () => {
  const { languageStrings } = useLoaderData();

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
