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
    <div>
      <NavBar />
      <div className="flex flex-col items-center content-center mt-5 gap-5">
        <h1 className="text-2xl font-bold">About Us</h1>
        <img src="https://placedog.net/300" />
        <div className="w-2/3 text-lg">
          <p>{languageStrings["about-us-content"]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
