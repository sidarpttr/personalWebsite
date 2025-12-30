import { ABOUT_ME } from "../constants";
import { motion } from "motion/react";
import Technologies from "./Technologies";
import ScrollReveal from "@/component/ScrollReveal";

export const About = ({ scrollContainerRef }) => {
    return (
        <div id="about" className="pb-14">
            <h2 className="my-20 text-center text-4xl">
                About
                <span className="text-neutral-500"> Me</span>
            </h2>
            <div className="flex flex-col items-center gap-8">

                {/* ScrollReveal Text */}
                <div className="w-full max-w-5xl px-6">
                    <ScrollReveal
                        scrollContainerRef={scrollContainerRef}
                        enableBlur={true}
                        baseOpacity={0.3}
                        baseRotation={0}
                        blurStrength={6}
                        containerClassName="my-0"
                        textClassName="text-lg md:text-xl leading-relaxed md:leading-loose font-light text-neutral-100 tracking-wide text-justify"
                        rotationEnd="bottom right"
                        wordAnimationEnd="bottom right"
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
