import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { cn } from '../../lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Platform', href: '#platform' },
        { name: 'Solutions', href: '#solutions' },
        { name: 'Why Us', href: '#why-us' },
        { name: 'About', href: '#about' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
                isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container-custom flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center gap-2 z-50">
                    <img src="/logo.jpg" alt="Construction Technect" className="h-12 w-auto object-contain" />
                    <span className={cn("text-xl font-heading font-bold", isScrolled ? "text-gray-900" : "text-gray-900")}>
                        Construction<span className="text-brand-orange">Technect</span>
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-brand-orange transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:flex items-center gap-4">
                    <a href="#" className="text-sm font-medium text-gray-900 hover:text-brand-orange transition-colors">
                        Log In
                    </a>
                    <Button size="sm">Request Demo</Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            className="absolute top-0 left-0 right-0 bg-white shadow-xl p-6 pt-24 min-h-[50vh] flex flex-col gap-6 md:hidden border-b border-gray-100"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-gray-900"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <hr className="border-gray-100" />
                            <div className="flex flex-col gap-4">
                                <Button variant="outline" className="w-full">Log In</Button>
                                <Button className="w-full">Get Started</Button>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
