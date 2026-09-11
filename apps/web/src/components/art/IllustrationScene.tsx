"use client";

import { motion } from "framer-motion";

// Cena ilustrada plana (sem halftone) no clima da referência: formas
// sólidas coloridas compondo uma cena, não um ícone isolado. Aqui:
// alguém no laptop vendo a rede de conexões do Elo (três círculos
// ligados = o próprio conceito do produto), cercado por elementos que
// sugerem crescimento/comunidade (folhas, corações, estrela).
export function IllustrationScene() {
    return (
        <svg
            viewBox="0 0 900 560"
            className="h-full w-full"
            role="img"
            aria-label="Ilustração de uma pessoa usando o Elo em um laptop, cercada por folhas e elementos de comunidade"
        >
            {/* folha grande atrás, à esquerda — balanço lento contínuo */}
            <motion.g
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                style={{ transformOrigin: "150px 480px" }}
            >
                <motion.path
                    d="M150 480 C 90 420, 80 300, 150 220 C 170 300, 160 400, 150 480 Z"
                    fill="var(--illus-teal)"
                    animate={{ rotate: [-3, 3, -3] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.path
                    d="M150 460 C 210 410, 240 320, 200 250 C 210 330, 190 410, 150 460 Z"
                    fill="var(--illus-yellow)"
                    animate={{ rotate: [2, -2, 2] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformOrigin: "150px 460px" }}
                />
            </motion.g>

            {/* estrela flutuante, gira devagar sem parar */}
            <motion.g
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.5 }}
            >
                <motion.path
                    d="M700 90 L714 130 L756 130 L722 154 L734 194 L700 170 L666 194 L678 154 L644 130 L686 130 Z"
                    fill="var(--illus-yellow)"
                    style={{ transformOrigin: "700px 142px" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                />
            </motion.g>

            {/* laptop central */}
            <motion.g
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <rect x="300" y="230" width="300" height="200" rx="14" fill="var(--illus-blue)" />
                <rect x="318" y="248" width="264" height="164" rx="6" fill="var(--background)" />
                <path
                    d="M270 430 L630 430 L610 462 L290 462 Z"
                    fill="var(--illus-cream)"
                />

                {/* tela mostra o próprio conceito do Elo: três nós conectados */}
                <line x1="400" y1="330" x2="460" y2="290" stroke="var(--illus-coral)" strokeWidth="4" />
                <line x1="460" y1="290" x2="500" y2="340" stroke="var(--illus-coral)" strokeWidth="4" />
                <circle cx="400" cy="330" r="14" fill="var(--illus-coral)" />
                <circle cx="460" cy="290" r="18" fill="var(--illus-yellow)" />
                <circle cx="500" cy="340" r="14" fill="var(--illus-teal)" />
            </motion.g>

            {/* pessoa à esquerda do laptop */}
            <motion.g
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35 }}
            >
                <path d="M170 560 C170 460, 230 420, 280 420 C 330 420, 360 460, 360 560 Z" fill="var(--illus-coral)" />
                <circle cx="270" cy="370" r="52" fill="var(--illus-coral)" />
            </motion.g>

            {/* pessoa à direita do laptop */}
            <motion.g
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.45 }}
            >
                <path d="M560 560 C560 470, 610 425, 655 425 C 700 425, 730 470, 730 560 Z" fill="var(--illus-teal)" />
                <circle cx="648" cy="378" r="48" fill="var(--illus-teal)" />
            </motion.g>

            {/* coração pequeno flutuando, sobe e desce sem parar */}
            <motion.path
                d="M810 260 C 800 245, 775 250, 775 270 C 775 288, 810 310, 810 310 C 810 310, 845 288, 845 270 C 845 250, 820 245, 810 260 Z"
                fill="var(--illus-coral)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />

            {/* pontinhos soltos, reforçam o clima de composição ilustrada */}
            {[
                [220, 150, "var(--illus-yellow)"],
                [820, 420, "var(--illus-blue)"],
                [110, 350, "var(--illus-coral)"],
            ].map(([cx, cy, color], i) => (
                <motion.circle
                    key={i}
                    cx={cx as number}
                    cy={cy as number}
                    r={7}
                    fill={color as string}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.85 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.7 + i * 0.1 }}
                />
            ))}
        </svg>
    );
}