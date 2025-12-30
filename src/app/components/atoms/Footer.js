import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
    return (
        <footer id="contact" className="relative py-16 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto">
                {/* Main Content */}
                <div className="text-center mb-12">
                    {/* Logo & Name */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center mb-8"
                    >
                        <Image
                            src="/favicon.ico"
                            width={60}
                            height={60}
                            alt="Sidar Adıgüzel"
                            className="mb-4 opacity-90"
                        />
                        <h3 className="text-2xl font-semibold text-white mb-2">
                            Sidar Adıgüzel
                        </h3>
                        <p className="text-neutral-400 text-sm">
                            Software Engineer
                        </p>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 text-neutral-400 text-sm"
                    >
                        <a 
                            href="mailto:sidar4932@gmail.com"
                            className="hover:text-white transition-colors duration-300"
                        >
                            sidar4932@gmail.com
                        </a>
                        <span className="hidden sm:block text-neutral-600">•</span>
                        <span>İstanbul, Türkiye</span>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex items-center justify-center gap-6 mb-8"
                    >
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/sidar-adıgüzel-820696296/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 transition-all duration-300 hover:scale-110"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-neutral-300"
                            >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/sidarpttr"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="w-12 h-12 flex items-center justify-center rounded-full bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 transition-all duration-300 hover:scale-110"
                        >
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-neutral-300"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </motion.div>

                    {/* Additional Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Link
                            href="/istanbul-evden-eve-nakliyat"
                            className="text-sm text-neutral-500 hover:text-neutral-300 transition-colors duration-300"
                        >
                            Katılım Nakliyat
                        </Link>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-neutral-700 to-transparent mb-8"></div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-center"
                >
                    <p className="text-sm text-neutral-500">
                        © 2025 Sidar Adıgüzel. All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
};
