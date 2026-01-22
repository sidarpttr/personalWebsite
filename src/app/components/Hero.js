"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect, useRef } from "react";
import Image from "next/image";
import aboutmePic from "../../../public/images/me.png";
import { LogoMarquee } from "./LogoMarquee";

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
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const imageRef = useRef(null);

    const springConfig = { damping: 25, stiffness: 200 };
    const x = useSpring(mouseX, springConfig);
    const y = useSpring(mouseY, springConfig);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!imageRef.current) return;

            const rect = imageRef.current.getBoundingClientRect();
            const imageCenterX = rect.left + rect.width / 2;
            const imageCenterY = rect.top + rect.height / 2;

            // Calculate distance from cursor to image center
            const deltaX = e.clientX - imageCenterX;
            const deltaY = e.clientY - imageCenterY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            // Magnetic effect: stronger when closer (within 400px)
            const maxDistance = 400;
            if (distance < maxDistance) {
                const strength = (maxDistance - distance) / maxDistance;
                mouseX.set(deltaX * strength * 0.15);
                mouseY.set(deltaY * strength * 0.15);
            } else {
                mouseX.set(0);
                mouseY.set(0);
            }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-center relative overflow-hidden px-4 sm:px-0 py-0 lg:py-0">
            {/* Background Heading */}
            <motion.h1
                variants={fadeIn(0.2)}
                initial="hidden"
                animate="visible"
                className="absolute top-[13%] sm:top-[9%] left-0 right-0 text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[8rem] 2xl:text-[10rem] font-syne font-extrabold tracking-[-0.05em] leading-[0.85] uppercase text-center z-0 whitespace-nowrap px-4 opacity-10 sm:opacity-100 bg-clip-text text-transparent bg-gradient-to-b from-[#A5D7E8] via-[#E0F2F7] to-white"
                style={{ fontFamily: 'var(--font-syne)' }}
            >
                HI, I'M SIDAR
            </motion.h1>

            {/* Main Content Container */}
            <div className="w-full max-w-7xl flex flex-col lg:flex-row items-center justify-between relative z-10 gap-12 lg:gap-0">
                {/* Left - Tagline */}
                <motion.div
                    variants={fadeIn(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xs space-y-3 text-center lg:text-left order-2 lg:order-1"
                >
                    <p className="text-sm sm:text-base md:text-lg font-extralight tracking-wide text-white/80 leading-relaxed">
                        Building solutions that matter,
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-extralight tracking-wide text-white/80 leading-relaxed">
                        regardless of the stack
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-extralight tracking-wide text-white/80 leading-relaxed">
                        From mobile apps to web platforms
                    </p>
                    <p className="text-sm sm:text-base md:text-lg font-extralight tracking-wide text-white/80 leading-relaxed">
                        I deliver results
                    </p>
                </motion.div>

                {/* Center - Large Profile Image */}
                <motion.div
                    ref={imageRef}
                    variants={fadeIn(0.6)}
                    initial="hidden"
                    animate="visible"
                    style={{ x, y }}
                    className="w-[280px] h-[340px] sm:w-[400px] sm:h-[480px] md:w-[450px] md:h-[550px] lg:w-[500px] lg:h-[600px] xl:w-[600px] xl:h-[700px] relative cursor-pointer order-1 lg:order-2"
                >
                    <Image
                        src={aboutmePic}
                        alt="Sidar Adıgüzel"
                        width={600}
                        className="object-contain w-full h-full"
                        priority
                    />
                </motion.div>

                {/* Right - VIEW CV Button (Desktop) */}
                <motion.div
                    variants={fadeIn(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="hidden lg:block order-3"
                >
                    <motion.a
                        href="/Sidar_Adiguzel_CV_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-4 bg-white text-black font-bold rounded-full text-base tracking-wide hover:bg-neutral-100 transition-all shadow-xl pointer-events-auto inline-block"
                    >
                        VIEW CV
                    </motion.a>
                </motion.div>

                {/* Mobile VIEW CV (Below Tagline) */}
                <motion.div
                    variants={fadeIn(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="lg:hidden order-3"
                >
                    <motion.a
                        href="/Sidar_Adiguzel_CV_2025.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-3 bg-white text-black font-bold rounded-full text-sm tracking-wide hover:bg-neutral-100 transition-all shadow-xl pointer-events-auto inline-block"
                    >
                        VIEW CV
                    </motion.a>
                </motion.div>
            </div>

            {/* Logo Marquee at the bottom */}
            <div className="absolute bottom-4 lg:bottom-0 left-0 w-full z-20">
                <LogoMarquee />
            </div>
        </div>
    );
};
