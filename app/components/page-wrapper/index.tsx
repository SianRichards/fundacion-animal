import Footer from "../footer";
import NavBar from "../nav-bar";

const PageWrapper = ({ children, languageStrings }) => {
  return (
    <div className="flex flex-col min-h-screen w-full bg-cover bg-center">
      <NavBar languageStrings={languageStrings} />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
