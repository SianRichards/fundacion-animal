import { useNavigate, useParams } from "@remix-run/react";
import { useState } from "react";

const LanguageButton = ({
  countryCode,
  selected,
  setSelected,
}: {
  countryCode: string;
  selected: string;
  setSelected: (countryCode: string) => void;
}) => {
  const navigate = useNavigate();
  const { lang } = useParams();

  const setLanguageParam = (countryCode: string) => {
    const currentURL = window.location.pathname;
    const newURL = currentURL.replace(`/${lang}`, `/${countryCode}`);
    navigate(newURL);
    setSelected(countryCode);
  };

  return (
    <button
      onClick={() => setLanguageParam(countryCode)}
      className={`px-2 text-white ${
        selected === countryCode ? `bg-[#0d9fe8]` : `bg-[#006ba1]`
      }`}
    >
      {countryCode.toUpperCase()}
    </button>
  );
};

const LanguageToggle = () => {
  const { lang } = useParams();
  const [selected, setSelected] = useState(lang || "en");

  const countryCodes = ["en", "es"];

  return (
    <div className="flex justify-around border border-black rounded-md my-1 mr-2">
      {countryCodes.map((countryCode) => {
        return (
          <LanguageButton
            key={countryCode}
            countryCode={countryCode}
            selected={selected}
            setSelected={setSelected}
          />
        );
      })}
    </div>
  );
};

export default LanguageToggle;
