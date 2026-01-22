"use client";
import { useRef } from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { LogoMarquee } from "./components/LogoMarquee";
import { About } from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import { Footer } from "./components/atoms/Footer";
import ContactForm from "./components/ContactForm";
import GlassSurface from "@/component/GlassSurface";
import Particles from "@/component/Particles";

export default function Home() {
    const scrollContainerRef = useRef(null);
    
    return (
        <div ref={scrollContainerRef} className="overflow-x-hidden text-neutral-300 antialiased selection:bg-gray-300 selection:text-black h-screen overflow-y-scroll snap-y snap-mandatory">
            {/* Fixed Appbar */}
            <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none px-8 pt-5 flex justify-center">
                <div className="max-w-3xl w-full pointer-events-auto">
                    <GlassSurface
                        width="100%" 
                        height={56}
                        borderRadius={30}
                        borderWidth={0.07}
                        brightness={0}
                        opacity={0.13}
                        blur={11}
                        displace={0.5}
                        backgroundOpacity={0.4}
                        saturation={1}
                        distortionScale={-180}
                        xChannel="R"
                        yChannel="G"
                        className="px-8"
                    >
                        <div className="w-full h-full flex items-center justify-between">
                            {/* Left: Code Symbol */}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="24" 
                                height="24" 
                                viewBox="0 0 19 13"
                                className="fill-white/80 hover:fill-white transition-colors cursor-pointer"
                                id="code"
                            >
                                <path fillRule="evenodd" d="M5.204 3.419a.997.997 0 0 0 0-1.401l-.013-.013a.975.975 0 0 0-1.388 0L.288 5.553a.998.998 0 0 0 0 1.402l3.515 3.548a.975.975 0 0 0 1.388 0l.013-.013a.997.997 0 0 0 0-1.401L3.09 6.955a.998.998 0 0 1 0-1.402l2.114-2.134zm13.508 2.134-3.515-3.548a.975.975 0 0 0-1.388 0l-.013.013a.997.997 0 0 0 0 1.401l2.115 2.134a.998.998 0 0 1 0 1.402l-2.115 2.134a.997.997 0 0 0 0 1.401l.013.013a.975.975 0 0 0 1.388 0l3.515-3.548a.998.998 0 0 0 0-1.402zm-5.903-4.145-5.062 10.83c-.164.341-.452.762-.823.762h-.02c-.721 0-1.192-.98-.873-1.641L11.064.631c.164-.34.772-.606.772-.606V0c.982 0 1.292.747.973 1.408z"></path>
                            </svg>
                            
                            {/* Center: Navigation Links */}
                            <nav className="flex items-center gap-6">
                                <a 
                                    href="#about" 
                                    className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Hakkımda
                                </a>
                                <a 
                                    href="#experience" 
                                    className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Tecrübe
                                </a>
                                <a 
                                    href="#projects" 
                                    className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                                >
                                    Projeler
                                </a>
                                <a 
                                    href="#contact" 
                                    className="text-white/70 hover:text-white transition-colors text-sm font-medium"
                                >
                                    İletişim
                                </a>
                            </nav>
                        </div>
                    </GlassSurface>
                </div>
            </div>

            {/* Content layer - positioned above background */}
            <div className="relative z-10 pointer-events-auto">
                {/* Hero Section - Full Screen */}
                <section className="h-screen snap-start snap-always flex items-center justify-center pointer-events-none">
                    <div className="container">
                        <Hero />
                    </div>
                </section>

                {/* About Section - Full Screen */}
                <section className="min-h-screen snap-start snap-always flex items-center justify-center">
                    <div className="container mx-auto">
                        <About scrollContainerRef={scrollContainerRef} />
                    </div>
                </section>

                {/* Experience Section - Full Screen */}
                <section className="min-h-screen snap-start snap-always flex items-center justify-center pointer-events-none">
                    <div className="container mx-auto px-8">
                        <Experience />
                    </div>
                </section>

                {/* Projects Section - Full Screen */}
                <section className="min-h-screen snap-start snap-always flex items-center justify-center">
                    <div className="container mx-auto px-8 pointer-events-auto">
                        <Projects />
                    </div>
                </section>

                {/* Contact Section - Full Screen */}
                <section className="min-h-screen snap-start snap-always flex items-center justify-center">
                    <div className="container mx-auto px-8 pointer-events-auto">
                        <Footer />
                    </div>
                </section>

            </div>
        </div>
    );
}
