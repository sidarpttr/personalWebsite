import { ABOUT_ME } from "../constants";
import { motion } from "motion/react";
import aboutmePic from "../../../public/images/me.png";
import Image from "next/image";
import Technologies from "./Technologies";
import GradualBlurMemo from "@/component/GradualBlur";
import ScrollReveal from "@/component/ScrollReveal";

export const About = ({ scrollContainerRef }) => {
    return (
        <div id="about" className="pb-14">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-col items-center gap-8">
                {/* Profile Image */}
                <motion.div
                    whileInView={{ opacity: 1, scale: 1 }}
                    initial={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center justify-center"
                >
                    <Image
                        src={aboutmePic}
                        alt="Sidar About"
                        className="w-[200px] md:w-[250px] rounded-[30px] hover:-translate-y-2 duration-500 shadow-2xl"
                    />
                </motion.div>

                {/* ScrollReveal Text */}
                <div className="w-full max-w-5xl px-6">
                    <ScrollReveal
                        scrollContainerRef={scrollContainerRef}
                        enableBlur={true}
                        baseOpacity={0.3}
                        baseRotation={0}
                        blurStrength={6}
                        containerClassName="my-0"
                        textClassName="text-xl md:text-2xl leading-relaxed md:leading-loose font-normal text-neutral-100 tracking-wide text-justify"
                        rotationEnd="bottom bottom"
                        wordAnimationEnd="bottom bottom"
                    >
                        {ABOUT_ME}
                    </ScrollReveal>
                </div>

                {/* Technologies */}
                <motion.div
                    whileInView={{ opacity: 1, y: 0 }}
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="w-full"
                >
                    <Technologies />
                </motion.div>
            </div>
        </div>
    );
};
