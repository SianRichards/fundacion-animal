import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";
import PageWrapper from "~/components/page-wrapper";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const HowToHelp = () => {
  const { languageStrings } = useLoaderData();

  return (
    <PageWrapper languageStrings={languageStrings}>
      <div className="px-6 pb-4 space-y-6 flex-grow bg-blue-100">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold mt-3 mb-2 text-gray-800">
            {languageStrings["navigation"]["how-to-help"]}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            {languageStrings["global"]["organisation-name"]} - Santa Marta,
            Magdalena
          </h2>
          <p className="text-md text-gray-500 mt-2">
            {languageStrings["how-to-help"]["helping-abandoned-animals"]}
          </p>
        </header>

        <div className="flex gap-4 mx-4">
          <section className="bg-gray-50 rounded-lg p-6 shadow-md w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {languageStrings["how-to-help"]["ways-to-donate"]}
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <h3 className="font-semibold text-gray-700">
                  {
                    languageStrings["how-to-help"][
                      "bancolombia-savings-account"
                    ]
                  }
                </h3>
                <p>
                  {languageStrings["how-to-help"]["account-number"]}:{" "}
                  <span className="font-mono text-gray-800">51799884180</span>
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-700">
                  {
                    languageStrings["how-to-help"][
                      "bancolombia-ahorro-a-la-mano"
                    ]
                  }
                </h3>
                <p>
                  {languageStrings["how-to-help"]["account-number"]}:{" "}
                  <span className="font-mono text-gray-800">03216280015</span>
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-700">
                  {languageStrings["how-to-help"]["nequi"]}
                </h3>
                <p>
                  {languageStrings["how-to-help"]["account-number"]}:{" "}
                  <span className="font-mono text-gray-800">3008058874</span>
                </p>
              </li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {languageStrings["how-to-help"]["why-your-support-matters"]}
            </h2>
            <p className="text-gray-600 mb-4">
              {languageStrings["how-to-help"]["support-impact-description"]}
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                {languageStrings["how-to-help"]["rescuing-abandoned-animals"]}
              </li>
              <li>
                {languageStrings["how-to-help"]["providing-food-medical-care"]}
              </li>
              <li>{languageStrings["how-to-help"]["finding-loving-homes"]}</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              {languageStrings["how-to-help"]["follow-us-on-social-media"]}
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">
                  {languageStrings["how-to-help"]["instagram"]}:
                </span>
                <a
                  href="https://www.instagram.com/huellasdelacallesm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline ml-2"
                >
                  @huellasdelacallesm
                </a>
              </li>
              <li>
                <span className="font-semibold">
                  {languageStrings["how-to-help"]["facebook"]}:
                </span>
                <a
                  href="https://www.facebook.com/huellasdelacallesm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline ml-2"
                >
                  {languageStrings["global"]["organisation-name"]}
                </a>
                <p className="ml-6">
                  {languageStrings["how-to-help"]["join-facebook-group"]}:{" "}
                  <span className="font-semibold">
                    {languageStrings["how-to-help"]["facebook-group-name"]}
                  </span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default HowToHelp;
