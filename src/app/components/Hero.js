import { HERO_CONTENT, HERO_STRINGS } from "../constants";
import { motion } from "motion/react";
import profilePic from "../../../public/images/profile.png";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import CustomButton from "./atoms/button";
import TypewriterComponent from "typewriter-effect";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            delay: delay,
        },
    },
});

export const Hero = () => {
    return (
        <div className="border-b border-neutral-800 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                        >
                            Sidar Adıgüzel
                        </motion.h1>
                        <motion.span
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
                        >
                            <TypewriterComponent
                                options={{
                                    strings: HERO_STRINGS,
                                    autoStart: true,
                                    loop: true,
                                    cursor: "_",
                                    cursorClassName: "typewriter-cursor",
                                    delay: 50,
                                    deleteSpeed: 30,
                                }}
                            />
                        </motion.span>
                        <motion.p
                            variants={container(1)}
                            initial="hidden"
                            animate="visible"
                            className="my-2 max-w-xl py-6 font-light tracking-tighter"
                        >
                            {HERO_CONTENT}
                        </motion.p>
                        <motion.div
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                        >
                            <CustomButton href="/Sidar_Adiguzel_CV_2025.pdf" text="CV" />
                        </motion.div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex justify-center">
                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <Image
                                src={profilePic}
                                alt="Sidar Adıgüzel"
                                width={500}
                                height={500}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
};
