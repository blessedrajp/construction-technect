import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Button from '../ui/Button';
import { ArrowRight, BarChart3, Building2, ShieldCheck } from 'lucide-react';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
            {/* Background Decor */}
            <div className="absolute inset-x-0 top-0 h-[500px] opacity-30 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-transparent to-transparent" />

            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="container-custom relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        AI-Driven Construction Intelligence
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 leading-[1.1] tracking-tight">
                        Building the <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gray to-brand-orange">
                            Future with AI
                        </span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
                        Construction Technect transforms the industry by connecting the entire value chain on one intelligent, transparent, and cost-effective platform.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        <Button size="lg" icon={<ArrowRight className="w-4 h-4" />}>
                            Request a Demo
                        </Button>
                        <Button size="lg" variant="outline">
                            Explore Platform
                        </Button>
                    </div>

                    <div className="pt-8 flex items-center gap-8 text-sm text-slate-500 font-medium">
                        <div className="flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-green-500" />
                            <span>Enterprise Security</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <BarChart3 className="w-5 h-5 text-blue-500" />
                            <span>Real-time Analytics</span>
                        </div>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <div className="relative h-[600px] hidden lg:block perspective-1000">
                    <motion.div
                        style={{ y: y1 }}
                        className="absolute right-0 top-10 w-4/5 h-[500px] bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 z-10"
                    >
                        {/* Mock UI Dashboard */}
                        <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 flex items-center px-4 space-x-2 border-b border-slate-700">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                        </div>
                        <div className="p-6 grid grid-cols-3 gap-6 mt-6">
                            <div className="col-span-2 space-y-4">
                                <div className="h-32 rounded-lg bg-slate-800/50 border border-slate-700 p-4">
                                    <div className="w-1/3 h-4 bg-slate-700 rounded mb-2"></div>
                                    <div className="w-full h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded"></div>
                                </div>
                                <div className="h-48 rounded-lg bg-slate-800/50 border border-slate-700 p-4">
                                    <div className="flex items-end justify-between h-full gap-2">
                                        {[40, 70, 50, 90, 60, 80].map((h, i) => (
                                            <div key={i} className="w-full bg-blue-500 rounded-t-sm opacity-80" style={{ height: `${h}%` }}></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="h-20 rounded-lg bg-slate-700/30 border border-slate-700"></div>
                                <div className="h-20 rounded-lg bg-slate-700/30 border border-slate-700"></div>
                                <div className="h-20 rounded-lg bg-slate-700/30 border border-slate-700"></div>
                                <div className="h-20 rounded-lg bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center text-emerald-400 font-bold">
                                    +24% ROI
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        style={{ y: y2 }}
                        className="absolute left-0 bottom-20 w-3/5 h-[300px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6 z-20"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 rounded-lg bg-orange-100 text-brand-orange">
                                <Building2 />
                            </div>
                            <div>
                                <div className="text-sm text-gray-500">Active Projects</div>
                                <div className="text-2xl font-bold text-gray-900">1,248</div>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">Site A - Foundation</span>
                                <span className="text-green-600 font-medium">On Track</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-green-500 w-[85%]"></div>
                            </div>

                            <div className="flex items-center justify-between text-sm pt-2">
                                <span className="text-gray-600">Site B - Structural</span>
                                <span className="text-yellow-600 font-medium">Delayed</span>
                            </div>
                            <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                                <div className="h-full bg-yellow-500 w-[60%]"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
