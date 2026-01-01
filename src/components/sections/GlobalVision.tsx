import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

const GlobalVision = () => {
    return (
        <SectionWrapper id="global" background="dark" className="relative min-h-[600px] flex items-center">
            {/* Background Map Visual (Abstract) */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                    </pattern>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-slate-900"></div>
            </div>

            <div className="container-custom relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        From Local Builds to <br />
                        <span className="text-brand-orange">Global Infrastructure</span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">
                        Technect scales with you. Whether you're managing a single site or a multinational portfolio, our platform adapts to your complexity.
                    </p>
                </motion.div>

                {/* Animated Connecting Dots */}
                <div className="relative w-full max-w-4xl mx-auto h-[300px] opacity-60">
                    {/* Abstract representational dots */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-4 h-4 bg-brand-orange rounded-full shadow-[0_0_15px_rgba(249,115,22,0.6)]"
                            style={{
                                top: `${Math.random() * 80 + 10}%`,
                                left: `${Math.random() * 80 + 10}%`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2 + Math.random() * 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                    {/* Connecting lines could be SVG here, keeping it simple for now */}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default GlobalVision;
