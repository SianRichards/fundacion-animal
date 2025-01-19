import Footer from "../footer";
import Header from "../header";
import LanguageToggle from "../language-toggle";
import NavBar from "../nav-bar";

const HeaderChildren = ({ languageStrings }) => {
  return (
    <>
      <h1 className="py-4 text-3xl font-extrabold text-center">
        {languageStrings.global["organisation-name"]}
      </h1>
      <div className="flex justify-between">
        <NavBar languageStrings={languageStrings} />
        <LanguageToggle />
      </div>
    </>
  );
};

const PageWrapper = ({ children, languageStrings }) => (
  <div className="flex flex-col min-h-screen w-full bg-cover bg-center">
    <Header>
      <HeaderChildren languageStrings={languageStrings} />
    </Header>
    {children}
    <Footer />
  </div>
);

export default PageWrapper;
