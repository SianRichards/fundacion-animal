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
    <div className="max-h-screen">
      <NavBar />
      <div className="m-5">
        <div className="flex flex-col items-center m-5">
          <h1 className="text-2xl m-1 font-bold">About Us</h1>
          <img src="https://placedog.net/300" />
        </div>
        <div className="desktop:grid grid-cols-3 gap-3 mobile: grid-rows-3 gap-y-3 bg-green-100">
          <p>{languageStrings["about-us-content"]}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
