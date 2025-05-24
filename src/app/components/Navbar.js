import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <p className="font font-bold text-4xl">SA</p>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a
                    href="https://www.linkedin.com/in/sidar-ad%C4%B1g%C3%BCzel-820696296/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/sidarpttr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.instagram.com/sidar.adguzel/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaInstagram />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
