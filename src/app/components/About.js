"use client";
import { useRef, useEffect, useState } from "react";
import { useScroll, motion, useTransform, useSpring } from "motion/react";
import Lottie from "lottie-react";
import phonesAnimation from "../../../public/animations/phones.json";
import mobilePhonesAnimation from "../../../public/animations/mobile_phones.json";
import LogoLoop from "@/component/LogoLoop";
import { SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiDocker, SiNodedotjs, SiFlutter, SiPostman, SiLinux } from "react-icons/si";

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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
        container: scrollContainerRef,
    });

    // Smooth the scroll progress for a "soft" feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            if (lottieRef.current) {
                const totalFrames = lottieRef.current.getDuration(true);
                const frame = Math.floor(latest * totalFrames);
                lottieRef.current.goToAndStop(frame, true);
            }
        });

        return () => unsubscribe();
    }, [smoothProgress]);

    // Simple opacity animations for each heading (using smoothProgress)
    const opacity0 = useTransform(smoothProgress, [0, 0.15, 0.2], [0, 1, 0]);
    const opacity1 = useTransform(smoothProgress, [0.2, 0.35, 0.4], [0, 1, 0]);
    const opacity2 = useTransform(smoothProgress, [0.4, 0.55, 0.6], [0, 1, 0]);
    const opacity3 = useTransform(smoothProgress, [0.6, 0.75, 0.8], [0, 1, 0]);
    const opacity4 = useTransform(smoothProgress, [0.8, 0.95, 1], [0, 1, 0]);

    const headingOpacities = [opacity0, opacity1, opacity2, opacity3, opacity4];


    const techLogos = [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
        { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
        { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
        { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
        { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
        { node: <SiPostman />, title: "Postman", href: "https://www.postman.com" },
        { node: <SiLinux />, title: "Linux", href: "https://www.kernel.org" },
    ];


    return (
        <div 
            id="about" 
            ref={containerRef}
            className="relative h-[200vh] sm:h-[1200vh]"
        >
                {/* LogoLoop at the top for Desktop only */}
                {!isMobile && (
                    <LogoLoop
                        logos={techLogos.map(logo => ({
                            ...logo,
                            node: <div className="text-white/30 hover:text-white/80 transition-colors uppercase font-syne font-medium">{logo.node}</div>
                        }))}
                        speed={100}
                        loop={false}
                        direction="left"
                        logoHeight={60}
                        gap={80}
                        hoverSpeed={0}
                        fadeOut
                        fadeOutColor="black"
                        useCustomRender={false}
                    />
                )}

            {/* Fixed animation that stays in viewport */}
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Background Lottie Animation */}
                <div className="w-full absolute inset-0 flex items-center justify-center md:opacity-40 opacity-100">
                    <div className="w-full md:w-full h-auto md:h-auto scale-[2.4] md:scale-100 relative top-[-5%] md:top-0">
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={isMobile ? mobilePhonesAnimation : phonesAnimation}
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
                            style={{ 
                                opacity: headingOpacities[index],
                                fontFamily: 'var(--font-syne)'
                            }}
                            className="absolute text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-syne font-bold text-white text-center px-4 md:px-8 leading-[0.85] tracking-[-0.05em] uppercase"
                        >
                            {heading}
                        </motion.h2>
                    ))}
                </div>

                {/* LogoLoop at the bottom for Mobile only - inside sticky to be visible during animation */}
                {isMobile && (
                    <div className="absolute bottom-8 left-0 w-full z-30">
                        <LogoLoop
                            logos={techLogos.map(logo => ({
                                ...logo,
                                node: <div className="text-white/30 hover:text-white/80 transition-colors uppercase font-syne font-medium">{logo.node}</div>
                            }))}
                            speed={100}
                            direction="left"
                            logoHeight={60}
                            gap={80}
                            hoverSpeed={0}
                            fadeOut
                            fadeOutColor="black"
                            useCustomRender={false}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};
