import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import Button from '../ui/Button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <SectionWrapper id="cta" background="white" className="py-0">
            <div className="bg-brand-gray rounded-[2rem] p-12 md:p-24 text-center relatives overflow-hidden">
                {/* Decorative Circles */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Build Smarter. Build Faster. <br />
                        Build Together.
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                        Join the construction revolution today. Experience the power of AI-driven project management.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Button size="lg" className="bg-brand-orange hover:bg-orange-600 text-white border-none">
                            Request a Demo
                        </Button>
                        <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-brand-gray">
                            Contact Sales <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default CTA;
