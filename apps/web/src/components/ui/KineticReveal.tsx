"use client";

import { motion } from "framer-motion";

interface KineticRevealProps {
    text: string;
    className?: string;
}

// Cada palavra entra deslizando da direita com um leve skew, que
// desfaz conforme assenta — é a técnica "Text Scroll animation" do
// Skiper UI (skew + translate + opacity), não um fade simples.
export function KineticReveal({ text, className }: KineticRevealProps) {
    const words = text.split(" ");

    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={`${word}-${i}`} className="mr-[0.28em] inline-block overflow-hidden">
                    <motion.span
                        className="inline-block"
                        initial={{ x: 40, skewX: -8, opacity: 0 }}
                        whileInView={{ x: 0, skewX: 0, opacity: 1 }}
                        viewport={{ once: true, amount: 0.6 }}
                        transition={{
                            delay: i * 0.06,
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}