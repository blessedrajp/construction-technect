import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { Check, Shield, Clock, TrendingUp, Globe } from 'lucide-react';

const WhyUs = () => {
    const stats = [
        { label: "Cost Reduction", value: "30%" },
        { label: "Projects Managed", value: "500+" },
        { label: "Time Saved", value: "20hrs/wk" },
    ];

    const benefits = [
        {
            icon: <TrendingUp className="w-6 h-6 text-brand-orange" />,
            title: "Real-time Insights",
            description: "Data-driven decisions at every step."
        },
        {
            icon: <Shield className="w-6 h-6 text-brand-orange" />,
            title: "Quality Assurance",
            description: "Automated checks for compliance and safety."
        },
        {
            icon: <Clock className="w-6 h-6 text-brand-orange" />,
            title: "Time Control",
            description: "Prevent delays with predictive scheduling."
        },
        {
            icon: <Globe className="w-6 h-6 text-brand-orange" />,
            title: "Global Scalability",
            description: "From local pilots to international infrastructure."
        }
    ];

    return (
        <SectionWrapper id="why-us" background="gray">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left: Content */}
                <div className="space-y-8">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Why Leading Firms <br /> Choose Technect
                    </h2>
                    <p className="text-lg text-slate-600">
                        We don't just provide software; we provide certainty. Our platform ensures that every project is delivered on time, on budget, and to the highest quality standards.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-6">
                        {benefits.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="mt-1 p-2 bg-white rounded-lg shadow-sm h-fit">
                                    {item.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                                    <p className="text-sm text-slate-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Stats Visual */}
                <div className="relative">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6 mt-12">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-2xl shadow-lg border-t-4 border-brand-orange text-center"
                            >
                                <div className="text-4xl font-bold text-slate-900 mb-2">{stats[0].value}</div>
                                <div className="text-slate-500 font-medium">{stats[0].label}</div>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-slate-900 rounded-2xl shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-2">{stats[1].value}</div>
                                <div className="text-slate-400 font-medium">{stats[1].label}</div>
                            </motion.div>
                        </div>
                        <div className="space-y-6">
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="p-8 bg-blue-600 rounded-2xl shadow-lg text-center"
                            >
                                <div className="text-4xl font-bold text-white mb-2">{stats[2].value}</div>
                                <div className="text-blue-100 font-medium">{stats[2].label}</div>
                            </motion.div>
                            <div className="h-full rounded-2xl overflow-hidden bg-gray-200 min-h-[160px] relative">
                                <img
                                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2089&auto=format&fit=crop"
                                    alt="Construction architecture"
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default WhyUs;
