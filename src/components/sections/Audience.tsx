import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import { HardHat, Ruler, Truck, Factory, UserCheck, Briefcase } from 'lucide-react';

const Audience = () => {
    const audience = [
        {
            role: "Architects",
            icon: <Ruler className="w-10 h-10 text-brand-orange" />,
            benefit: "Seamless design-to-build integration."
        },
        {
            role: "Civil Engineers",
            icon: <HardHat className="w-10 h-10 text-blue-500" />,
            benefit: "Real-time structural monitoring."
        },
        {
            role: "Contractors",
            icon: <UserCheck className="w-10 h-10 text-yellow-500" />,
            benefit: "Streamlined labor & resource management."
        },
        {
            role: "Manufacturers",
            icon: <Factory className="w-10 h-10 text-slate-500" />,
            benefit: "Direct supply chain connectivity."
        },
        {
            role: "Merchants",
            icon: <Truck className="w-10 h-10 text-green-500" />,
            benefit: "Expanded market reach & instant orders."
        },
        {
            role: "Project Managers",
            icon: <Briefcase className="w-10 h-10 text-purple-500" />,
            benefit: "Unified control over every milestone."
        }
    ];

    return (
        <SectionWrapper id="audience" background="white">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                    Built for Everyone in Construction
                </h2>
                <p className="text-lg text-slate-600">
                    Whether you design, build, supply, or manage—Construction Technect empowers your role.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {audience.map((item, index) => (
                    <Card key={index} className="text-center p-8 hover:border-brand-orange transition-all group">
                        <div className="mx-auto w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.role}</h3>
                        <p className="text-sm text-slate-500">
                            {item.benefit}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Audience;
