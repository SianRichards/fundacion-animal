import SocialMediaButtons from "../social-media-buttons";

const Footer = () => {
  return (
    <footer className="bg-[#f4ce15] flex justify-between items-center px-5 py-2 border-t border-blue-900">
      <p>
        Fundación Huellas de la Calle - Santa Marta | Site Developer: Sian
        Richards
      </p>
      <SocialMediaButtons />
    </footer>
  );
};

export default Footer;
