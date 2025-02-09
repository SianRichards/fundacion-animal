import type { MetaFunction } from "@remix-run/node";
import Logo from "../assets/images/logo.jpeg";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import PageWrapper from "~/components/page-wrapper";

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
    <PageWrapper languageStrings={languageStrings}>
      <div className="flex flex-col items-center flex-grow gap-5 py-4 bg-blue-100">
        <h2 className="font-bold text-xl w-96 text-center">
          {languageStrings["home"]["tag-line"]}
        </h2>
        <img src={Logo} width="350" height="auto" alt="logo" />
      </div>
    </PageWrapper>
  );
}
