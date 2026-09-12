"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Inclina o card em 3D conforme a posição do cursor dentro dele — é o
 * "Tilt Card" do Skiper UI. Diferente do botão magnético (já removido):
 * aqui é o conteúdo reagindo, com física de mola, não o elemento
 * inteiro perseguindo o mouse.
 */
export function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springConfig = { stiffness: 150, damping: 18 };
    const rotateX = useSpring(useTransform(mouseY, [0, 1], [8, -8]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), springConfig);
    const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
    const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

    function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        mouseX.set((e.clientX - rect.left) / rect.width);
        mouseY.set((e.clientY - rect.top) / rect.height);
    }

    function onMouseLeave() {
        mouseX.set(0.5);
        mouseY.set(0.5);
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{ rotateX, rotateY, transformPerspective: 800 }}
            className={className}
        >
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: useTransform(
                        [glowX, glowY],
                        ([gx, gy]) => `radial-gradient(200px circle at ${gx} ${gy}, rgba(230,102,63,0.16), transparent 70%)`,
                    ),
                }}
            />
            {children}
        </motion.div>
    );
}