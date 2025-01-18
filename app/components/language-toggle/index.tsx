import { useNavigate, useParams } from "@remix-run/react";

const LanguageToggle = () => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const setLanguageParam = (countryCode: string) => {
    const currentURL = window.location.pathname;
    const newURL = currentURL.replace(`/${lang}`, `/${countryCode}`);
    navigate(newURL);
  };

  return (
    <div className="flex justify-around border border-black">
      <button onClick={() => setLanguageParam("en")} className="px-2">
        EN
      </button>
      <button
        onClick={() => setLanguageParam("es")}
        className="px-2 border-l border-black"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
