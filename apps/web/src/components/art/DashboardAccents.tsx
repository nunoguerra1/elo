"use client";

import { motion } from "framer-motion";

// Versão discreta do FloatingShapes pra viver atrás de conteúdo real
// (cards, texto) sem competir com ele — baixa opacidade, formas maiores
// e mais lentas.
export function DashboardAccents() {
    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-[0.35]">
            <motion.svg
                className="absolute -right-10 -top-16 h-56 w-56"
                viewBox="0 0 200 200"
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                <circle cx="100" cy="100" r="70" fill="none" stroke="#8e93d9" strokeWidth="14" strokeDasharray="14 18" />
            </motion.svg>
            <motion.div
                className="absolute -left-8 top-40 h-24 w-24 rounded-full"
                style={{ backgroundColor: "#e7c94833" }}
                animate={{ y: [0, -16, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}