import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa";
import LogoLoop from "@/component/LogoLoop";

const Technologies = () => {
    const techLogos = [
        { 
            node: <RiReactjsLine className="text-7xl text-white/70" />, 
            title: "React",
            href: "https://react.dev"
        },
        { 
            node: <TbBrandFlutter className="text-7xl text-white/70" />, 
            title: "Flutter",
            href: "https://flutter.dev"
        },
        { 
            node: <SiMongodb className="text-7xl text-white/70" />, 
            title: "MongoDB",
            href: "https://www.mongodb.com"
        },
        { 
            node: <IoLogoFirebase className="text-7xl text-white/70" />, 
            title: "Firebase",
            href: "https://firebase.google.com"
        },
        { 
            node: <FaNodeJs className="text-7xl text-white/70" />, 
            title: "Node.js",
            href: "https://nodejs.org"
        },
        { 
            node: <FaPython className="text-7xl text-white/70" />, 
            title: "Python",
            href: "https://www.python.org"
        },
        { 
            node: <SiPostman className="text-7xl text-white/70" />, 
            title: "Postman",
            href: "https://www.postman.com"
        },
        { 
            node: <FaUnity className="text-7xl text-white/70" />, 
            title: "Unity",
            href: "https://unity.com"
        },
    ];

    return (
                <LogoLoop
                    logos={techLogos}
                    speed={60}
                    direction="left"
                    logoHeight={10}
                    gap={40}
                    hoverSpeed={0}
                    scaleOnHover
                    fadeOut
                    ariaLabel="Technologies I work with"
                />
    );
};

export default Technologies;
