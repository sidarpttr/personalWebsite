import { useRef } from "react";
import { PROJECTS } from "../constants";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import CustomButton from "./atoms/button";
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
                className="max-w-6xl mx-auto mb-20"
            >
                <motion.h2 
                    ref={headingRef}
                    style={{ 
                        fontFamily: 'var(--font-syne)',
                        color: textColor,
                        WebkitTextStroke: "1px white",
                        WebkitTextStrokeColor: strokeColor
                    }}
                    className="my-12 md:my-20 text-center text-3xl sm:text-5xl md:text-6xl font-syne font-extrabold tracking-[-0.05em] uppercase"
                >
                    Projects
                </motion.h2>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto space-y-16">
                {PROJECTS.map((project, index) => (
                    <motion.div
                        key={index}
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
                            <div className="group relative bg-neutral-900/30 backdrop-blur-sm rounded-3xl overflow-hidden border border-neutral-800/50 hover:border-neutral-700/50 hover:bg-neutral-900/40 transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-900/20 cursor-pointer">
                                {/* Subtle gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-800/0 via-neutral-800/0 to-neutral-700/0 group-hover:from-neutral-800/5 group-hover:via-neutral-800/5 group-hover:to-neutral-700/10 transition-all duration-500 pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 lg:p-10">
                                    {/* Project Image */}
                                    <div className="lg:w-2/5 flex flex-col gap-4">
                                        {project.image === "null" ? (
                                            <LinkedInEmbedModal />
                                        ) : (
                                            <>
                                                {project.title === "Film Atlası — Mobile Movie Explorer App" && (
                                                    <div className="relative overflow-hidden rounded-2xl">
                                                        <Image
                                                            src={project.image2}
                                                            alt={project.title}
                                                            className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                            width={400}
                                                            height={400}
                                                        />
                                                    </div>
                                                )}
                                                <div className="relative overflow-hidden rounded-2xl">
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                                                        width={400}
                                                        height={400}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                    {/* Project Details */}
                                    <div className="lg:w-3/5 flex flex-col justify-between">
                                        <div>
                                            {/* Title */}
                                            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4 tracking-tight">
                                                {project.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-neutral-300 leading-relaxed mb-6 text-base lg:text-lg">
                                                {project.description}
                                            </p>

                                            {/* Technologies */}
                                            <div className="flex flex-wrap gap-2 mb-8">
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

                                        {/* Button */}
                                        <div className="mt-auto">
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
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
