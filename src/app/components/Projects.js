import { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import LinkedInEmbedModal from "./atoms/LinkedIn";

const Projects = () => {
    const headingRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: headingRef,
        offset: ["start end", "center center"]
    });

    const textColor = useTransform(scrollYProgress, [0.4, 0.8], ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 1)"]);
    const strokeColor = useTransform(scrollYProgress, [0.4, 0.8], ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"]);

    return (
        <section id="projects" className="py-24 px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="sticky top-0 pt-24 md:pt-32 pb-12 z-50 bg-gradient-to-b from-black via-black to-transparent pointer-events-none"
            >
                <motion.h2 
                    ref={headingRef}
                    style={{ 
                        fontFamily: 'var(--font-syne)',
                        color: textColor,
                        WebkitTextStroke: "1px white",
                        WebkitTextStrokeColor: strokeColor
                    }}
                    className="text-center text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-[-0.05em] uppercase"
                >
                    Projects
                </motion.h2>
            </motion.div>

            {/* Projects Grid - Sticky Stack */}
            <div className="max-w-6xl mx-auto">
                {PROJECTS.map((project, index) => {
                    const stickyTop = 200 + (index * 48); // 240px base + 48px per card
                    const zIndex = index + 1; // Later cards on top
                    
                    return (
                        <div 
                            key={index}
                            className="sticky"
                            style={{ 
                                top: `${stickyTop}px`,
                                zIndex
                            }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false, margin: "-100px" }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                    ease: [0.22, 1, 0.36, 1]
                                }}
                            >
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block"
                        >
                            <div className="group relative bg-neutral-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-neutral-800/50 hover:border-neutral-700/50 hover:bg-neutral-900/95 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/20 cursor-pointer h-[500px] flex flex-col">
                                {/* Card Header - Always Visible */}
                                <div className="flex items-center gap-3 px-6 py-4 border-b border-neutral-800/50 bg-neutral-900/50">
                                    {/* Folder Icon */}
                                    <svg className="w-5 h-5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                    {/* Project Title */}
                                    <h4 className="text-sm font-semibold text-white truncate">
                                        {project.title}
                                    </h4>
                                </div>

                                {/* Card Content */}
                                <div className="flex-1 overflow-hidden mt-16">
                                {/* Subtle gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 via-neutral-800/0 to-neutral-700/0 group-hover:from-neutral-800/5 group-hover:via-neutral-800/5 group-hover:to-neutral-700/10 transition-all duration-500 pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 lg:p-10">
                                    {/* Project Image */}
                                    <div className="lg:w-2/5 flex flex-col gap-4">
                                                <div className="relative aspect-video overflow-hidden rounded-2xl">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                                    />
                                                </div>
                                    </div>

                                    {/* Project Details */}
                                    <div className="lg:w-3/5 flex flex-col justify-between">
                                        <div>
                                            {/* Title */}
                                            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 tracking-tight">
                                                {project.title}
                                            </h3>

                                            {/* Description - Hidden on mobile */}
                                            <p className="hidden md:block text-neutral-300 leading-relaxed mb-6 text-base lg:text-lg">
                                                {project.description}
                                            </p>

                                            {/* Technologies - Hidden on mobile */}
                                            <div className="hidden md:flex flex-wrap gap-2 mb-8">
                                                {project.technologies.map((tech, techIndex) => (
                                                    <span
                                                        key={techIndex}
                                                        className="px-4 py-2 text-sm font-medium bg-neutral-800/60 text-neutral-300 rounded-full border border-neutral-700/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Button - Hidden on mobile */}
                                        <div className="hidden md:block mt-auto">
                                            <div className="inline-flex items-center gap-2 text-white font-medium">
                                                <span>Visit Project</span>
                                                <svg
                                                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth="2"
                                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                    ></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </a>
                            </motion.div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
