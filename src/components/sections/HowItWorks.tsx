import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Link2, Database, Brain, Rocket, Trophy } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <Link2 className="w-6 h-6" />,
            title: "Connect",
            description: "Link all stakeholders on one platform."
        },
        {
            icon: <Database className="w-6 h-6" />,
            title: "Centralize",
            description: "Unify project data and documentation."
        },
        {
            icon: <Brain className="w-6 h-6" />,
            title: "Analyze",
            description: "Apply AI to optimize execution strategies."
        },
        {
            icon: <Rocket className="w-6 h-6" />,
            title: "Execute",
            description: "Deploy resources efficiently and track progress."
        },
        {
            icon: <Trophy className="w-6 h-6" />,
            title: "Deliver",
            description: "Complete projects with confidence and quality."
        }
    ];

    return (
        <SectionWrapper id="how-it-works" background="white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    How It Works
                </h2>
                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                    From the first blueprint to the final handover, our process is designed for clarity and speed.
                </p>
            </div>

            <div className="relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-8"></div>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative flex flex-col items-center text-center group"
                        >
                            <div className="w-16 h-16 rounded-full bg-white border-2 border-brand-orange text-brand-orange flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-lg z-10">
                                {step.icon}
                            </div>
                            <div className="md:absolute top-8 left-1/2 w-[calc(100%+2rem)] h-0.5 bg-brand-orange scale-x-0 group-hover:scale-x-100 transition-transform origin-left -z-10 hidden md:block"></div>

                            <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                            <p className="text-sm text-slate-500">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default HowItWorks;
