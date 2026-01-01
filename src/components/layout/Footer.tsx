import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
            <div className="container-custom">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="Construction Technect" className="h-10 w-auto object-contain" />
                            <span className="text-xl font-heading font-bold text-slate-900">
                                Construction<span className="text-brand-orange">Technect</span>
                            </span>
                        </div>
                        <p className="text-slate-500 max-w-sm mb-6">
                            Empowering the construction industry with intelligent, transparent, and connected solutions.
                        </p>
                        <div className="flex gap-4">
                            {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="p-2 bg-white rounded-full text-slate-400 hover:text-brand-orange hover:shadow-sm transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links 1 */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['Marketplace', 'Project Management', 'Financials', 'Analytics'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links 2 */}
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-500 hover:text-brand-orange transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-slate-400 text-sm">
                        © {new Date().getFullYear()} Construction Technect. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-sm text-slate-400">
                        <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
