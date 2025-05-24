import { RiReactjsLine } from "react-icons/ri";
import { TbBrandFlutter } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { FaUnity } from "react-icons/fa";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <TbBrandFlutter className="text-7xl text-[#02569B]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-[#47A248]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoFirebase className="text-7xl text-[#FFCA28]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaNodeJs className="text-7xl text-[#339933]" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-[#3776AB]" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPostman className="text-7xl text-[#FF6C37]" />
                </div>

                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaUnity className="text-7xl text-white" />
                </div>
            </div>
        </div>
    );
};

export default Technologies;
