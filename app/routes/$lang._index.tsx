import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";
import Logo from "../assets/images/logo.jpeg";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import Footer from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Fundacion Huellas De La Calle - Santa Marta" },
    {
      name: "description",
      content: "Fundacion Huellas De La Calle - Santa Marta",
    },
  ];
};

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

export default function Index() {
  const { languageStrings } = useLoaderData();
  return (
    <div className="flex flex-col min-h-screen w-full bg-cover bg-center">
      <NavBar languageStrings={languageStrings} />
      <div className="flex flex-col items-center flex-grow gap-5 py-5">
        <h1 className="pt-2 text-3xl font-extrabold">
          FUNDACIÓN HUELLAS DE LA CALLE - SANTA MARTA
        </h1>
        <h2 className="font-bold text-xl">
          {languageStrings["home-page-tag-line"]}
        </h2>
        <img src={Logo} width="400" height="auto" alt="logo" />
      </div>
      <Footer />
    </div>
  );
}
