"use client";
import { motion } from "motion/react";

const LOGOS = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
];

export const LogoMarquee = () => {
    return (
        <div className="w-full  overflow-hidden bg-black/20">
            <div className="relative flex">
                {/* Animated logo strip */}
                <motion.div
                    className="flex gap-16 flex-shrink-0"
                    animate={{
                        x: [0, -640],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 15,
                            ease: "linear",
                        },
                    }}
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS].map((logo, index) => (
                        <div
                            key={`logo-${index}`}
                            className="flex-shrink-0 w-32 h-32 flex items-center justify-center"
                        >
                            <img
                                src={logo}
                                alt={`Logo ${(index % LOGOS.length) + 1}`}
                                className="w-full h-full object-contain opacity-20 hover:opacity-100 transition-opacity filter grayscale hover:grayscale-0"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};
