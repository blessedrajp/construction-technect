import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import { ShoppingCart, Kanban, Users, Calculator, PieChart, Briefcase } from 'lucide-react';

const Platform = () => {
    const modules = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Marketplace",
            description: "Connect with verified suppliers and access materials globally.",
            color: "bg-blue-100 text-blue-600"
        },
        {
            icon: <Kanban className="w-6 h-6" />,
            title: "Project Management",
            description: "Track progress, assign tasks, and manage timelines in real-time.",
            color: "bg-orange-100 text-orange-600"
        },
        {
            icon: <Users className="w-6 h-6" />,
            title: "CRM",
            description: "Manage client relationships and sales pipelines effortlessly.",
            color: "bg-green-100 text-green-600"
        },
        {
            icon: <Calculator className="w-6 h-6" />,
            title: "ERP",
            description: "Integrate finance, inventory, and operations in one system.",
            color: "bg-purple-100 text-purple-600"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "HRMS",
            description: "Handle workforce planning, payroll, and compliance.",
            color: "bg-pink-100 text-pink-600"
        },
        {
            icon: <PieChart className="w-6 h-6" />,
            title: "Portfolio & Analytics",
            description: "Gain executable insights across all your projects.",
            color: "bg-yellow-100 text-yellow-600"
        }
    ];

    return (
        <SectionWrapper id="platform" background="white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-brand-orange font-bold uppercase text-sm tracking-wider">One Ecosystem</span>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mt-3 mb-6">
                    Our Unified Platform
                </h2>
                <p className="text-lg text-slate-600">
                    Everything you need to build better, faster, and smarter—all in one place.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {modules.map((module, index) => (
                    <Card key={index} className="group hover:border-brand-orange/50 transition-colors duration-300">
                        <div className={`w-14 h-14 rounded-xl ${module.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            {module.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-orange transition-colors">
                            {module.title}
                        </h3>
                        <p className="text-slate-600">
                            {module.description}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Platform;
