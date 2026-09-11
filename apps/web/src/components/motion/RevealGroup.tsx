"use client";

import { motion, type Variants } from "framer-motion";

const groupVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28, filter: "blur(6px)" },
    show: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
};

export function RevealGroup({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={groupVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            {children}
        </motion.div>
    );
}

export function RevealItem({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}