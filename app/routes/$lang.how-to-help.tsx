import NavBar from "~/components/nav-bar";
import { useLoaderData } from "@remix-run/react";
import en from "~/language-strings/en.json";
import es from "~/language-strings/es.json";
import { json } from "@remix-run/node";

export const loader = async ({ params }: { params: { lang: string } }) => {
  const languageStrings = params.lang === "es" ? es : en;
  return json({ languageStrings });
};

const HowToHelp = () => {
  const { languageStrings } = useLoaderData();

  return (
    <div className="h-screen flex flex-col">
      <NavBar languageStrings={languageStrings} />
      <div className="px-6 pb-4 space-y-6">
        <header className="text-center">
          <h1 className="text-4xl font-extrabold mt-3 mb-2 text-gray-800">
            {languageStrings["how-to-help"]}
          </h1>
          <h2 className="text-xl font-semibold text-gray-600">
            Fundación Huellas de la Calle - Santa Marta, Magdalena
          </h2>
          <p className="text-md text-gray-500 mt-2">
            Helping abandoned animals find hope and care
          </p>
        </header>

        <div className="flex gap-4">
          <section className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Ways to Donate
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <h3 className="font-semibold text-gray-700">
                  Bancolombia - Savings Account
                </h3>
                <p>
                  Account Number:{" "}
                  <span className="font-mono text-gray-800">51799884180</span>
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-700">
                  Bancolombia - Ahorro a la Mano
                </h3>
                <p>
                  Account Number:{" "}
                  <span className="font-mono text-gray-800">03216280015</span>
                </p>
              </li>
              <li>
                <h3 className="font-semibold text-gray-700">Nequi</h3>
                <p>
                  Account Number:{" "}
                  <span className="font-mono text-gray-800">3008058874</span>
                </p>
              </li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Why Your Support Matters
            </h2>
            <p className="text-gray-600 mb-4">
              With your contributions, you are helping to save countless lives.
              Your donations go toward:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Rescuing abandoned animals</li>
              <li>Providing food and medical care</li>
              <li>Finding loving homes for animals in need</li>
            </ul>
          </section>

          <section className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Follow Us on Social Media
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-semibold">Instagram:</span>
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
                <span className="font-semibold">Facebook:</span>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline ml-2"
                >
                  Fundación Huellas de la Calle - Santa Marta
                </a>
                <p className="ml-6">
                  Join the Facebook group:{" "}
                  <span className="font-semibold">Casos Santa Marta 🐾</span>
                </p>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;
