"use client";
import { useRef, useEffect, useState, useCallback, useMemo } from "react";
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
];

// Easing function for smooth animation feel
const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

export const About = ({ scrollContainerRef }) => {
    const containerRef = useRef(null);
    const lottieRef = useRef(null);
    const animationFrameRef = useRef(null);
    const targetFrameRef = useRef(0);
    const currentFrameRef = useRef(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Set initial Lottie frame to show content immediately on load
    useEffect(() => {
        if (lottieRef.current) {
            // Start at frame 1 to show initial animation state
            lottieRef.current.goToAndStop(1, true);
        }
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
        container: scrollContainerRef,
    });

    // Optimized spring physics - mobile needs more responsive, desktop more smooth
    // Mobile: Higher stiffness for snappier response to touch
    // Desktop: Softer for premium scrolling feel
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: isMobile ? 100 : 80,      // Mobile more responsive
        damping: isMobile ? 25 : 35,          // Mobile less damping for quicker response
        restDelta: 0.0001
    });

    // Frame interpolation for butter-smooth animation
    // Mobile uses faster interpolation for more responsive feel
    const animateToFrame = useCallback((targetFrame) => {
        const animate = () => {
            if (!lottieRef.current) return;

            const current = currentFrameRef.current;
            const target = targetFrame;
            const distance = target - current;
            
            // Use interpolation for smooth frame transitions
            // Mobile: faster interpolation (0.25) for more direct tracking
            // Desktop: slower interpolation (0.15) for smoother feel
            const interpolationFactor = isMobile ? 0.25 : 0.15;
            const threshold = isMobile ? 0.05 : 0.1; // Mobile more sensitive
            
            if (Math.abs(distance) > threshold) {
                // Ease towards target frame
                const easedDistance = distance * interpolationFactor;
                currentFrameRef.current = current + easedDistance;
                lottieRef.current.goToAndStop(currentFrameRef.current, true);
                animationFrameRef.current = requestAnimationFrame(animate);
            } else {
                // Snap to final frame
                currentFrameRef.current = target;
                lottieRef.current.goToAndStop(target, true);
            }
        };

        // Cancel previous animation frame
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
        }
        
        animate();
    }, [isMobile]);

    useEffect(() => {
        const unsubscribe = smoothProgress.on("change", (latest) => {
            if (lottieRef.current) {
                const totalFrames = lottieRef.current.getDuration(true);
                // Apply easing to scroll progress for more natural feel
                const easedProgress = easeOutCubic(Math.min(latest / 0.9, 1));
                const targetFrame = easedProgress * totalFrames;
                targetFrameRef.current = targetFrame;
                animateToFrame(targetFrame);
            }
        });

        return () => {
            unsubscribe();
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, [smoothProgress, animateToFrame]);

    // Smoother heading transitions with slight overlap for premium feel
    // First heading starts visible (1) so users see content immediately on load
    const opacity0 = useTransform(smoothProgress, [0, 0.1, 0.2], [1, 1, 0]);  // Stays visible at start
    const opacity1 = useTransform(smoothProgress, [0.18, 0.28, 0.38], [0, 1, 0]);
    const opacity2 = useTransform(smoothProgress, [0.36, 0.50, 0.62], [0, 1, 0]);
    const opacity3 = useTransform(smoothProgress, [0.60, 0.75, 0.9], [0, 1, 0]);  // Last heading

    const headingOpacities = [opacity0, opacity1, opacity2, opacity3];

    // Dynamic scroll height calculation for optimal experience
    // Mobile: 80vh per heading (very fast, responsive), Desktop: 200vh per heading (comfortable)
    const scrollHeightPerHeading = isMobile ? 80 : 200;
    const totalScrollHeight = HEADINGS.length * scrollHeightPerHeading;

    // Lottie renderer settings for optimal performance
    const lottieRendererSettings = useMemo(() => ({
        preserveAspectRatio: 'xMidYMid slice',
        clearCanvas: true,
        progressiveLoad: true,
        hideOnTransparent: true
    }), []);


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
            style={{ height: `${totalScrollHeight}vh` }}
            className="relative"
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
                    <div 
                        className="w-full md:w-full h-auto md:h-auto scale-[2.4] md:scale-100 relative top-[-5%] md:top-0"
                        style={{
                            transform: 'translateZ(0)', // GPU acceleration
                            willChange: 'transform',     // Performance hint
                            backfaceVisibility: 'hidden' // Prevent flickering
                        }}
                    >
                        <Lottie
                            lottieRef={lottieRef}
                            animationData={isMobile ? mobilePhonesAnimation : phonesAnimation}
                            loop={false}
                            autoplay={false}
                            renderer="svg"  // SVG renderer for best performance
                            rendererSettings={lottieRendererSettings}
                            className="w-full h-full object-cover"
                            style={{
                                transform: 'translateZ(0)',
                                willChange: 'transform'
                            }}
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
                                fontFamily: 'var(--font-syne)',
                                transform: 'translateZ(0)', // GPU acceleration
                                willChange: 'opacity'        // Performance hint
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
