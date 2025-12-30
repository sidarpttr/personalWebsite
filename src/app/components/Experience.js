import { EXPERIENCES } from "../constants";
import { motion } from "motion/react";

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6 lg:px-12">
            {/* Section Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6 }}
                className="max-w-4xl mx-auto mb-20"
            >

            <h2 className="my-20 text-center text-4xl">
                Experience
            </h2>
            </motion.div>

            {/* Vertical Timeline */}
            <div className="max-w-4xl mx-auto relative">
                {/* Vertical Line */}
                <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-neutral-700 via-neutral-600 to-neutral-700"></div>

                {/* Timeline Items */}
                <div className="space-y-12 pb-[400px]">
                    {EXPERIENCES.map((experience, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, margin: "-50px" }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="relative pl-20"
                        >
                            {/* Circle Marker */}
                            <div className="absolute left-0 top-2 flex items-center justify-center">
                                <div className="w-16 h-16 rounded-full bg-black border-4 border-neutral-600 flex items-center justify-center z-10 group-hover:border-neutral-500 transition-all duration-300">
                                    <div className="w-3 h-3 rounded-full bg-neutral-400"></div>
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className="group bg-neutral-900/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 border border-neutral-800/50 hover:border-neutral-700/50 hover:bg-neutral-900/40 transition-all duration-300 hover:shadow-xl hover:shadow-neutral-900/20">
                                {/* Year */}
                                <div className="inline-flex items-center gap-2 mb-3">
                                    <span className="text-xs font-medium text-neutral-500 tracking-wider uppercase">
                                        {experience.year}
                                    </span>
                                </div>

                                {/* Role & Company */}
                                <h3 className="text-xl lg:text-2xl font-semibold text-white mb-1 tracking-tight">
                                    {experience.role}
                                </h3>
                                <p className="text-base text-neutral-400 mb-4 font-medium">
                                    {experience.company}
                                </p>

                                {/* Description */}
                                <p className="text-neutral-300 leading-relaxed mb-6 text-sm lg:text-base">
                                    {experience.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2">
                                    {experience.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1.5 text-xs font-medium bg-neutral-800/60 text-neutral-300 rounded-full border border-neutral-700/50 hover:bg-neutral-800 hover:border-neutral-600 transition-all duration-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
