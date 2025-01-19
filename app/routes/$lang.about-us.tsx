import NavBar from "~/components/nav-bar";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const AboutUs = () => {
  const { languageStrings } = useLoaderData();

  return (
    <div className="h-screen">
      <NavBar languageStrings={languageStrings} />
      <div className="flex flex-col items-center content-center gap-7 bg-santa-marta bg-cover h-full">
      <h1 className="text-3xl font-extrabold text-white mt-10 text-center">
          {languageStrings["about-us"]}
        </h1>
        <div className="flex justify-center gap-4 h-2/5">
          <img src="https://placedog.net/300" className="rounded-md" />
          <div className="w-1/2 text-lg text-center content-center bg-white px-2 rounded-md bg-opacity-90">
            <p>{languageStrings["about-us-content"]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
