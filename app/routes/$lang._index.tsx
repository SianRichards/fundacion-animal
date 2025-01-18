import type { MetaFunction } from "@remix-run/node";
import NavBar from "~/components/nav-bar";
import Logo from "../assets/images/logo.jpeg";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import SantaMartaNight from "../assets/images/santa-marta-at-night.jpg";

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
    <div>
      <NavBar />
      <div className="text-xl font-bold flex flex-col items-center gap-5">
        <h1 className="pt-2">FUNDACIÓN HUELLAS DE LA CALLE - SANTA MARTA</h1>
        <p>{languageStrings["home-page-tag-line"]}</p>
        <img src={Logo} width="400" height="auto" alt="logo" />
      </div>
    </div>
  );
}
