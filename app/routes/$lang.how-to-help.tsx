import NavBar from "~/components/nav-bar";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const HowToHelp = () => {
  const { languageStrings } = useLoaderData();

  return (
    <div>
      <NavBar languageStrings={languageStrings} />
      How to help
    </div>
  );
};

export default HowToHelp;
