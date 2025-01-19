import SocialMediaButtons from "../social-media-buttons";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const Footer = () => {
  const { languageStrings } = useLoaderData();
  return (
    <footer className="bg-[#f4ce15] flex justify-between items-center px-5 py-2 border-t border-blue-900">
      <div></div>
      <p className="pl-10">
        {languageStrings["global"]["organisation-name"]} - Santa Marta |{" "}
        {languageStrings["footer"]["site-developer"]}: Sian Richards
      </p>
      <SocialMediaButtons />
    </footer>
  );
};

export default Footer;
