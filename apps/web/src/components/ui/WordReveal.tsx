"use client";

import { motion } from "framer-motion";

export function WordReveal({ text, className, delayStart = 0 }: { text: string; className?: string; delayStart?: number }) {
    const words = text.split(" ");
    return (
        <span className={className}>
            {words.map((word, i) => (
                <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-1 mr-[0.28em] align-bottom">
                    <motion.span
                        className="inline-block"
                        initial={{ y: "110%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: delayStart + i * 0.05, duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                    >
                        {word}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}