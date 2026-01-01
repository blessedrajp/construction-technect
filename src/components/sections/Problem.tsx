import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Card from '../ui/Card';
import { AlertTriangle, TrendingUp, Layers, Users } from 'lucide-react';

const Problem = () => {
    const problems = [
        {
            icon: <Layers className="w-8 h-8 text-red-500" />,
            title: "Fragmented Systems",
            description: "Disconnected tools lead to data silos, making it impossible to see the full picture of your projects."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-orange-500" />,
            title: "Lack of Transparency",
            description: "Blind spots in supply chain and execution execute cause avoidable delays and disputes."
        },
        {
            icon: <TrendingUp className="w-8 h-8 text-yellow-500" />,
            title: "Cost Overruns",
            description: "Without real-time tracking, budgets spiral out of control before you even notice."
        },
        {
            icon: <Users className="w-8 h-8 text-blue-500" />,
            title: "Poor Collaboration",
            description: "Miscommunication between architects, engineers, and contractors results in costly rework."
        }
    ];

    return (
        <SectionWrapper id="problem" background="gray">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                    The Industry is <span className="text-red-600">Broken</span>
                </h2>
                <p className="text-lg text-slate-600">
                    Traditional construction management is plagued by inefficiencies that cost time, money, and reputation.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {problems.map((item, index) => (
                    <Card key={index} className="p-8 border-none shadow-md">
                        <div className="mb-6 p-4 rounded-full bg-slate-50 w-fit">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {item.description}
                        </p>
                    </Card>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Problem;
