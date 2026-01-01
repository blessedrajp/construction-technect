import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
    background?: 'white' | 'gray' | 'dark';
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    className,
    id,
    background = 'white'
}) => {
    const bgStyles = {
        white: 'bg-white',
        gray: 'bg-secondary',
        dark: 'bg-brand-gray text-white',
    };

    return (
        <section
            id={id}
            className={cn(
                'py-20 md:py-32 w-full overflow-hidden',
                bgStyles[background],
                className
            )}
        >
            <div className="container-custom relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.6, ease: "easeOut" }
                        }
                    }}
                >
                    {children}
                </motion.div>
            </div>
        </section>
    );
};

export default SectionWrapper;
