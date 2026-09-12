"use client";

import { motion } from "framer-motion";

/**
 * Cada palavra entra deslizando da direita com skew, desfazendo
 * conforme assenta — técnica "Text Scroll animation" do Skiper UI.
 * Usado nos títulos de seção, mais assertivo que um fade simples.
 */
export function KineticReveal({ text, className }: { text: string; className?: string }) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ x: 36, skewX: -8, opacity: 0 }}
                        whileInView={{ x: 0, skewX: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{ delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}