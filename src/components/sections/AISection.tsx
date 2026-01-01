import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { motion } from 'framer-motion';
import { BrainCircuit, LineChart, ShieldAlert, Zap } from 'lucide-react';

const AISection = () => {
    return (
        <SectionWrapper id="ai-intelligence" background="dark">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Content */}
                <div className="order-2 lg:order-1 space-y-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium">
                        <BrainCircuit className="w-4 h-4" />
                        <span>Proprietary AI Engine</span>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white">
                        Intelligence Built into <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                            Every Decision
                        </span>
                    </h2>

                    <p className="text-lg text-slate-300 leading-relaxed">
                        Our AI doesn't just analyze past data—it predicts future risks. From cost optimization to safety hazards, get real-time intelligence that keeps your projects on track and under budget.
                    </p>

                    <div className="space-y-6">
                        {[
                            {
                                icon: <Zap className="w-6 h-6 text-yellow-400" />,
                                title: "Predictive Decision-Making",
                                description: "Forecast bottlenecks before they delay your timeline."
                            },
                            {
                                icon: <LineChart className="w-6 h-6 text-blue-400" />,
                                title: "Cost Optimization",
                                description: "Identify waste and optimize resource allocation automatically."
                            },
                            {
                                icon: <ShieldAlert className="w-6 h-6 text-red-400" />,
                                title: "Risk Identification",
                                description: "Detect safety compliance issues in real-time."
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex gap-4"
                            >
                                <div className="mt-1 p-2 rounded-lg bg-slate-800 border border-slate-700 h-fit">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1">{feature.title}</h3>
                                    <p className="text-slate-400">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Visualization */}
                <div className="order-1 lg:order-2 relative h-[500px] bg-slate-800 rounded-2xl border border-slate-700 p-8 shadow-2xl overflow-hidden flex flex-col">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                        <div className="text-white font-bold text-lg">Project Health Score</div>
                        <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">98/100 Excellent</div>
                    </div>

                    {/* Central Chart */}
                    <div className="flex-1 flex items-center justify-center relative">
                        <div className="absolute w-64 h-64 border-[16px] border-slate-700 rounded-full"></div>
                        <div className="absolute w-64 h-64 border-[16px] border-blue-500 rounded-full border-t-transparent border-r-transparent rotate-45"></div>
                        <div className="text-center z-10">
                            <div className="text-5xl font-bold text-white">98%</div>
                            <div className="text-slate-400 text-sm">Efficiency</div>
                        </div>
                    </div>

                    {/* Floating Data Points */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-20 right-10 bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-lg"
                    >
                        <div className="text-xs text-slate-400">Material Cost</div>
                        <div className="text-green-400 font-bold">-12.5%</div>
                    </motion.div>

                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute bottom-20 left-10 bg-slate-900 border border-slate-700 p-3 rounded-lg shadow-lg"
                    >
                        <div className="text-xs text-slate-400">Schedule Drift</div>
                        <div className="text-blue-400 font-bold">0 Days</div>
                    </motion.div>

                    <div className="absolute inset-0 bg-blue-500/5 pointer-events-none"></div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AISection;
