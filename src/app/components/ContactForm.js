"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import GlassSurface from "@/component/GlassSurface";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [status, setStatus] = useState({ type: '', message: '' });
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Rate limiting check - 1 message per minute
        const lastSubmitTime = localStorage.getItem('lastEmailSubmit');
        const currentTime = Date.now();
        const oneMinute = 60 * 1000; // 60 seconds in milliseconds
        
        if (lastSubmitTime && (currentTime - parseInt(lastSubmitTime)) < oneMinute) {
            const remainingTime = Math.ceil((oneMinute - (currentTime - parseInt(lastSubmitTime))) / 1000);
            setStatus({
                type: 'error',
                message: `Lütfen ${remainingTime} saniye bekleyin.`
            });
            return;
        }
        
        setIsLoading(true);
        setStatus({ type: '', message: '' });

        try {
            // EmailJS configuration
            // IMPORTANT: User needs to replace these with their actual EmailJS credentials
            const serviceId = 'service_g57vzjb';  // Replace with your EmailJS service ID
            const templateId = 'template_apovtzy'; // Replace with your EmailJS template ID
            const publicKey = 'AgVT4w7vcx-47klpD';   // Replace with your EmailJS public key
ş
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                to_email: 'sidar4932@gmail.com'
            };

            await emailjs.send(
                serviceId,
                templateId,
                templateParams,
                publicKey
            );

            // Save submission time for rate limiting
            localStorage.setItem('lastEmailSubmit', currentTime.toString());

            setStatus({
                type: 'success',
                message: 'Mesajınız başarıyla gönderildi! ✓'
            });
            
            // Reset form
            setFormData({
                name: "",
                email: "",
                message: ""
            });

            // Close form after 2 seconds
            setTimeout(() => {
                setIsExpanded(false);
                setStatus({ type: '', message: '' });
            }, 2000);

        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({
                type: 'error',
                message: 'Mesaj gönderilemedi. Lütfen tekrar deneyin.'
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="fixed bottom-6 right-6 z-50 pointer-events-auto"
        >
            <AnimatePresence mode="wait">
                {!isExpanded ? (
                    // Collapsed Button
                    <motion.div
                        key="button"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GlassSurface
                            width={160}
                            height={56}
                            borderRadius={28}
                            borderWidth={0.07}
                            brightness={0}
                            opacity={0.15}
                            blur={12}
                            displace={0.5}
                            backgroundOpacity={0.5}
                            saturation={1}
                            distortionScale={-180}
                            xChannel="R"
                            yChannel="G"
                        >
                            <button
                                onClick={() => setIsExpanded(true)}
                                className="w-full h-full flex items-center justify-center gap-2 px-6
                                         text-white font-medium hover:scale-105 active:scale-95
                                         transition-transform duration-200"
                            >
                                <span>Contact Me</span>
                            </button>
                        </GlassSurface>
                    </motion.div>
                ) : (
                    // Expanded Form
                    <motion.div
                        key="form"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <GlassSurface
                            width={380}
                            height="auto"
                            borderRadius={24}
                            borderWidth={0.07}
                            brightness={0}
                            opacity={0.15}
                            blur={12}
                            displace={0.5}
                            backgroundOpacity={0.5}
                            saturation={1}
                            distortionScale={-180}
                            xChannel="R"
                            yChannel="G"
                            className="p-6"
                        >
                            <form onSubmit={handleSubmit} className="w-full space-y-4">
                                {/* Header with Close Button */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-white mb-1">
                                            İletişime Geç
                                        </h3>
                                        <p className="text-sm text-neutral-400">
                                            Mesajınızı gönderin
                                        </p>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsExpanded(false);
                                            setStatus({ type: '', message: '' });
                                        }}
                                        className="text-neutral-400 hover:text-white transition-colors p-1"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <line x1="18" y1="6" x2="6" y2="18"></line>
                                            <line x1="6" y1="6" x2="18" y2="18"></line>
                                        </svg>
                                    </button>
                                </div>

                                {/* Status Message */}
                                {status.message && (
                                    <div className={`p-3 rounded-xl text-sm ${
                                        status.type === 'success' 
                                            ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
                                            : 'bg-red-500/20 text-red-300 border border-red-500/30'
                                    }`}>
                                        {status.message}
                                    </div>
                                )}

                                {/* Name Input */}
                                <div>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Adınız"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 
                                                 rounded-xl text-white placeholder-neutral-500
                                                 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900/70
                                                 disabled:opacity-50 disabled:cursor-not-allowed
                                                 transition-all duration-300"
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="E-posta"
                                        required
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 
                                                 rounded-xl text-white placeholder-neutral-500
                                                 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900/70
                                                 disabled:opacity-50 disabled:cursor-not-allowed
                                                 transition-all duration-300"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Mesajınız"
                                        required
                                        rows={4}
                                        disabled={isLoading}
                                        className="w-full px-4 py-3 bg-neutral-900/50 border border-neutral-700/50 
                                                 rounded-xl text-white placeholder-neutral-500 resize-none
                                                 focus:outline-none focus:border-neutral-500 focus:bg-neutral-900/70
                                                 disabled:opacity-50 disabled:cursor-not-allowed
                                                 transition-all duration-300"
                                    />
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full px-6 py-3 bg-white text-black font-medium rounded-xl
                                             hover:bg-neutral-200 active:scale-[0.98]
                                             disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-white
                                             transition-all duration-300 ease-out flex items-center justify-center gap-2"
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Gönderiliyor...</span>
                                        </>
                                    ) : (
                                        'Gönder'
                                    )}
                                </button>
                            </form>
                        </GlassSurface>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ContactForm;
