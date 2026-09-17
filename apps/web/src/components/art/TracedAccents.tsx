"use client";

import { motion } from "framer-motion";

type Variant = "oportunidades" | "inscricoes" | "certificados" | "perfil";

const PALETTES: Record<Variant, string> = {
    oportunidades: "#3f7d5c",
    inscricoes: "#8e93d9",
    certificados: "#e7c948",
    perfil: "#e3a9c2",
};

// Linha tracejada que "anda" de verdade: a gente anima o strokeDashoffset
// em loop, então os tracinhos parecem se mover ao longo do caminho —
// diferente do anel estático que só gira inteiro.
function MarchingArc({ color }: { color: string }) {
    return (
        <motion.svg className="absolute -right-6 top-24 h-40 w-40" viewBox="0 0 160 160">
            <motion.circle
                cx="80" cy="80" r="60"
                fill="none" stroke={color} strokeWidth="2"
                strokeDasharray="6 10" strokeLinecap="round"
                animate={{ strokeDashoffset: [0, -160] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
        </motion.svg>
    );
}

// Dois pontinhos ligados por uma linha tracejada que se desenha uma
// vez (pathLength) e depois continua "andando" — o elo se formando.
function DrawingConnector({ color }: { color: string }) {
    return (
        <svg className="absolute -left-10 bottom-32 h-28 w-56" viewBox="0 0 220 110">
            <circle cx="14" cy="55" r="5" fill={color} />
            <circle cx="206" cy="30" r="5" fill={color} />
            <motion.path
                d="M14 55 C 70 20, 140 90, 206 30"
                fill="none" stroke={color} strokeWidth="2"
                strokeDasharray="5 8" strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 0.7 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
        </svg>
    );
}

function SpinningRing({ color }: { color: string }) {
    return (
        <motion.svg
            className="absolute -top-14 right-24 h-32 w-32"
            viewBox="0 0 120 120"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            <circle cx="60" cy="60" r="42" fill="none" stroke={color} strokeWidth="8" strokeDasharray="1 14" strokeLinecap="round" />
        </motion.svg>
    );
}

function FloatingOutline({ color }: { color: string }) {
    return (
        <motion.div
            className="absolute bottom-10 right-10 h-16 w-16"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
            <svg viewBox="0 0 60 60" className="h-full w-full">
                <rect x="8" y="8" width="44" height="44" rx="10" fill="none" stroke={color} strokeWidth="2" strokeDasharray="4 6" />
            </svg>
        </motion.div>
    );
}

// Composição por página — mistura os motivos acima em posições e
// combinações diferentes, pra cada tela ter uma personalidade própria
// sem repetir a mesma decoração em todo lugar.
export function TracedAccents({ variant }: { variant: Variant }) {
    const color = PALETTES[variant];

    return (
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden opacity-60">
            <MarchingArc color={color} />
            {variant !== "certificados" && <DrawingConnector color={color} />}
            {(variant === "inscricoes" || variant === "perfil") && <SpinningRing color={color} />}
            {(variant === "oportunidades" || variant === "certificados") && <FloatingOutline color={color} />}
        </div>
    );
}