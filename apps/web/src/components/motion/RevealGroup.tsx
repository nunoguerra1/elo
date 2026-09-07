"use client";

import { motion, type Variants } from "framer-motion";

// Variants do grupo: orquestra o atraso entre os filhos (stagger),
// garante que os cards revelem como UM movimento coeso, não cada um
// "vivendo sua própria vida" na tela.
const groupVariants: Variants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.08 },
    },
};

// Variants do item: sobe e some do fade com um easing "para fora",
// sensação de assentar no lugar em vez de simplesmente aparecer.
const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
};

interface RevealGroupProps {
    children: React.ReactNode;
    className?: string;
}

// Envolve uma lista/grid de itens. Cada filho direto deve ser um <RevealItem>.
export function RevealGroup({ children, className }: RevealGroupProps) {
    return (
        <motion.div
            className={className}
            variants={groupVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}

interface RevealItemProps {
    children: React.ReactNode;
    className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
    return (
        <motion.div className={className} variants={itemVariants}>
            {children}
        </motion.div>
    );
}