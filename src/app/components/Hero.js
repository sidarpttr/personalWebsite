import GradientText from "@/component/GradientText";
import { HERO_CONTENT } from "../constants";
import { motion } from "motion/react";

const fadeIn = (delay) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            delay: delay,
            ease: [0.25, 0.4, 0.25, 1],
        },
    },
});

export const Hero = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center">
            <div className="max-w-4xl mx-auto text-center px-4">
                {/* Main Heading */}
                <motion.div
                    variants={fadeIn(0.2)}
                    initial="hidden"
                    animate="visible"
                    className="mb-6"
                >
                    <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight">
                            Sidar Adıgüzel
                    </h1>
                </motion.div>

                {/* Description */}
                <motion.div
                    variants={fadeIn(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto mb-12 leading-relaxed font-bold"
                >
                    <GradientText
                        colors={["#ffffff","#68a2c9ff","#FFFFFF"]}
                        animationSpeed={5}
                        direction="horizontal"
                        yoyo={true}
                        className="text-xl md:text-3xl lg:text-4xl font-extralight tracking-wider"
                    >
                        SOFTWARE ENGINEER
                    </GradientText>
                </motion.div>
            </div>
        </div>
    );
};
