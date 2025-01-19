import { FaFacebook, FaInstagram } from "react-icons/fa";

const SocialMediaButtons = () => {
  return (
    <div className="flex items-center gap-1">
      <a
        href="https://www.facebook.com/huellasdelacallesm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#006ba1]"
      >
        <FaFacebook size={32} />
      </a>

      <a
        href="https://www.instagram.com/huellasdelacallesm"
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#e652b2]"
      >
        <FaInstagram size={32} />
      </a>
    </div>
  );
};

export default SocialMediaButtons;
