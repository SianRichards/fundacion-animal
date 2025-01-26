import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import PageWrapper from "~/components/page-wrapper";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const ContactUs = () => {
  const { languageStrings } = useLoaderData();

  return (
    <PageWrapper languageStrings={languageStrings}>
      <div className="flex-grow">
        <h1 className="text-3xl font-extrabold mt-10 text-center">
          {languageStrings["contact-us"]["title"]}
        </h1>
      </div>
    </PageWrapper>
  );
};

export default ContactUs;
