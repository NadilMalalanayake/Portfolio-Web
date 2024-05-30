import logo from "../assets/MM.png"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-21 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-0 my-1 w-12" src={logo} alt="" />
      </div>
      <div className="m-8 flex item-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/nadil-malalanayake" target="_blank">
        <FaLinkedin/>
        </a>
        <a href="https://www.instagram.com/__nadill__/" target="_blank">
        <FaInstagram />
        </a>
        <a href="https://www.facebook.com/nadil.viksure/" target="_blank">
        <FaFacebook />
        </a>
        <a href="https://github.com/NadilMalalanayake" target="_blank">
        <FaGithub />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;