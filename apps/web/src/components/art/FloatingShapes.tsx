"use client";

import { motion } from "framer-motion";

interface FloatingShapesProps {
    variant?: "stats" | "cta";
}

const SETS = {
    stats: [
        { type: "ring", x: "6%", y: "24%", size: 28, color: "#e6663f" },
        { type: "diamond", x: "92%", y: "20%", size: 16, color: "#8e93d9" },
        { type: "triangle", x: "88%", y: "70%", size: 22, color: "#e7c948" },
    ],
    cta: [
        { type: "ring", x: "10%", y: "30%", size: 24, color: "#8e93d9" },
        { type: "arc", x: "90%", y: "25%", size: 30, color: "#e3a9c2" },
        { type: "diamond", x: "85%", y: "75%", size: 18, color: "#e7c948" },
    ],
} as const;

// Sem paralaxe de scroll aqui de propósito — é decoração ambiente
// de seções mais curtas, não precisa da complexidade de useScroll.
// Só flutuação e rotação contínuas, cada forma com timing diferente.
export function FloatingShapes({ variant = "stats" }: FloatingShapesProps) {
    const shapes = SETS[variant];

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
            {shapes.map((shape, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    style={{ left: shape.x, top: shape.y }}
                    animate={{ y: [0, -14, 0] }}
                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
                >
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "linear" }}
                    >
                        {shape.type === "ring" && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
                                <circle cx="20" cy="20" r="15" fill="none" stroke={shape.color} strokeWidth="4" />
                            </svg>
                        )}
                        {shape.type === "triangle" && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
                                <polygon points="20,6 34,32 6,32" fill={shape.color} />
                            </svg>
                        )}
                        {shape.type === "diamond" && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
                                <rect x="10" y="10" width="20" height="20" fill={shape.color} transform="rotate(45 20 20)" />
                            </svg>
                        )}
                        {shape.type === "arc" && (
                            <svg width={shape.size} height={shape.size} viewBox="0 0 40 40">
                                <path d="M6 30 A18 18 0 0 1 34 30" fill="none" stroke={shape.color} strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        )}
                    </motion.div>
                </motion.div>
            ))}
        </div>
    );
}