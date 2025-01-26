import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import PageWrapper from "~/components/page-wrapper";
import SantaMartaMap from "../assets/images/santa-marta-map.jpeg";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const AboutUs = () => {
  const { languageStrings } = useLoaderData();

  return (
    <PageWrapper languageStrings={languageStrings}>
      <div className="flex flex-grow flex-col items-center content-center gap-7 bg-santa-marta bg-cover h-full">
        <h1 className="text-3xl font-extrabold text-white mt-3 text-center">
          {languageStrings["about-us"]["title"]}
        </h1>
        <div className="flex gap-4">
          <img src="https://placedog.net/300" className="rounded-md" />
          <img
            src={SantaMartaMap}
            width="300"
            height="auto"
            alt="Map of Santa Marta, Colombia"
            className="rounded-md"
          />
        </div>
        <div className="w-1/2 text-lg text-center content-center bg-white px-2 rounded-md bg-opacity-90 mb-7">
          <p> {languageStrings["about-us"]["content"]}</p>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutUs;
