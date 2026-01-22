"use client";
import { useRef, useEffect } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import Lottie from "lottie-react";
import phonesAnimation from "../../../public/animations/phones.json";

const HEADINGS = [
    "FULL STACK DEVELOPER",
    "MOBILE EXPERT",
    "WEB ARCHITECT",
    "PROBLEM SOLVER",
    "INNOVATION DRIVEN"
];

export const About = ({ scrollContainerRef }) => {
    const containerRef = useRef(null);
    const lottieRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
        container: scrollContainerRef,
    });

    useEffect(() => {
        const unsubscribe = scrollYProgress.on("change", (latest) => {
            if (lottieRef.current) {
                const totalFrames = lottieRef.current.getDuration(true);
                const frame = Math.floor(latest * totalFrames);
                lottieRef.current.goToAndStop(frame, true);
            }
        });

        return () => unsubscribe();
    }, [scrollYProgress]);

    // Simple opacity animations for each heading
    const opacity0 = useTransform(scrollYProgress, [0, 0.15, 0.2], [0, 1, 0]);
    const opacity1 = useTransform(scrollYProgress, [0.2, 0.35, 0.4], [0, 1, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.4, 0.55, 0.6], [0, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.6, 0.75, 0.8], [0, 1, 0]);
    const opacity4 = useTransform(scrollYProgress, [0.8, 0.95, 1], [0, 1, 0]);

    const headingOpacities = [opacity0, opacity1, opacity2, opacity3, opacity4];

    return (
        <div 
            id="about" 
            ref={containerRef}
            className="relative h-[700vh]"
        >
            {/* Fixed animation that stays in viewport */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Lottie Animation */}
                <div className="w-full absolute inset-0 flex items-center justify-center md:opacity-40 opacity-60">
                    <div className="w-full md:w-full h-[400%] md:h-auto scale-[2.3] md:scale-100 relative">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={phonesAnimation}
                            loop={false}
                            autoplay={false}
                            className="w-full h-full object-cover"
                        />
                        {/* Stronger gradient fade overlay for mobile */}
                        <div className="absolute inset-0 md:hidden pointer-events-none bg-gradient-to-b from-black from-0% via-transparent via-30% via-70% to-black to-100%"></div>
                    </div>
                </div>

                {/* Animated Headings */}
                <div className="relative z-10 flex items-center justify-center h-full">
                    {HEADINGS.map((heading, index) => (
                        <motion.h2
                            key={index}
                            style={{ opacity: headingOpacities[index] }}
                            className="absolute text-3xl sm:text-4xl md:text-7xl lg:text-8xl xl:text-9xl font-bold text-white text-center px-4 md:px-8 leading-tight"
                        >
                            {heading}
                        </motion.h2>
                    ))}
                </div>
            </div>
        </div>
    );
};
