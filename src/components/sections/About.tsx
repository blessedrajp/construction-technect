import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <SectionWrapper id="about" background="white">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Visual */}
                <div className="relative">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
                            alt="Construction site managers discussing plans"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                            <div className="text-white">
                                <div className="text-4xl font-bold mb-2">150+</div>
                                <div className="text-sm opacity-90">Countries Served Globally</div>
                            </div>
                        </div>
                    </motion.div>
                    {/* Decorative Elements */}
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -z-10"></div>
                    <div className="absolute -top-10 -left-10 w-64 h-64 bg-highlight/10 rounded-full blur-3xl -z-10"></div>
                </div>

                {/* Content */}
                <div className="space-y-6">
                    <div>
                        <span className="text-brand-orange font-bold tracking-wider text-sm uppercase">About Us</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                            Transforming Construction <br />
                            <span className="text-slate-500">One Project at a Time</span>
                        </h2>
                    </div>

                    <p className="text-lg text-slate-600 leading-relaxed">
                        Construction Technect is a global AI-driven platform transforming the construction industry by connecting the entire value chain. We eliminate silos and bring transparency to every stage of construction.
                    </p>

                    <p className="text-slate-600 leading-relaxed">
                        From Marketplace and Project Management to CRM, ERP, and HRMS, our unified ecosystem enables merchants, architects, civil engineers, contractors, manufacturers, and project managers to collaborate seamlessly.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                        {[
                            "End-to-End Collaboration",
                            "AI-Powered Insights",
                            "Global Marketplace",
                            "Transparent Operations"
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                                <span className="text-slate-800 font-medium">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default About;
