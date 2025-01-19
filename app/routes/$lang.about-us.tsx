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
      <div className="flex flex-col items-center content-center gap-5 bg-santa-marta bg-cover h-full">
        <h1 className="text-2xl font-bold mt-3">About Us</h1>
        <img src="https://placedog.net/300" />
        <div className="w-2/3 text-lg bg-white px-1 rounded-md bg-opacity-90">
          <p>{languageStrings["about-us-content"]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
