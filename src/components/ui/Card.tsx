import React from 'react';
import { cn } from '../../lib/utils';
import { motion } from 'framer-motion';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    hoverEffect = true
}) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 10px 30px -10px rgba(0,0,0,0.1)" } : {}}
            className={cn(
                'bg-white rounded-xl p-6 border border-gray-100 shadow-sm',
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default Card;
