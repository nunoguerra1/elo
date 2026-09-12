"use client";

import { motion, type MotionValue, useTransform } from "framer-motion";

// Formas soltas no "céu" do hero — reforça o clima de composição
// geométrica em camadas, sem mexer na paisagem principal que já
// está aprovada. Cada forma tem sua própria velocidade de paralaxe
// e uma animação de flutuação/rotação contínua e independente.
const SHAPES = [
    { type: "ring", x: "8%", y: "20%", size: 34, color: "#8e93d9", speed: 40 },
    { type: "triangle", x: "88%", y: "16%", size: 26, color: "#e3a9c2", speed: 60 },
    { type: "diamond", x: "78%", y: "40%", size: 18, color: "#e7c948", speed: 25 },
    { type: "ring", x: "14%", y: "48%", size: 16, color: "#e6663f", speed: 55 },
    { type: "arc", x: "50%", y: "10%", size: 30, color: "#2b2f6b", speed: 35 },
] as const;

function Shape({
    shape,
    progress,
}: {
    shape: (typeof SHAPES)[number];
    progress: MotionValue<number>;
}) {
    const y = useTransform(progress, [0, 1], [0, -shape.speed]);

    const common = (
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
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
    );

    return (
        <motion.div
            className="absolute"
            style={{ left: shape.x, top: shape.y, y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
        >
            {common}
        </motion.div>
    );
}

export function SkyAccents({ progress }: { progress: MotionValue<number> }) {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0">
            {SHAPES.map((shape, i) => (
                <Shape key={i} shape={shape} progress={progress} />
            ))}
        </div>
    );
}