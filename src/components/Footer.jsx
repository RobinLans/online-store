import { FaGithub, FaDiscord } from "react-icons/fa";

function Footer() {
  return (
    <div
      className="absolute bottom-0 bg-primary-lBeige w-4/5 xl:w-footer h-28 mb-4 mt-4 myBorder flex justify-center items-center 
    "
    >
      <a
        href="https://github.com/RobinLans/online-store"
        className="text-6xl m-2"
      >
        <FaGithub />
      </a>
      <a href="https://discord.gg/8cPFw3kR" className="text-6xl m-2">
        <FaDiscord />
      </a>
      <p className="absolute bottom-0 right-2">Made by: Robin Lans</p>
    </div>
  );
}

export default Footer;
