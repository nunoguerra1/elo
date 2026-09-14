"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Fica visível só na primeira pintura da página e some sozinho depois
// de um tempo curto — dá peso de marca sem atrapalhar quem já
// conhece o site. Não bloqueia nada: o conteúdo carrega por trás.
export function Preloader() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const timeout = setTimeout(() => setVisible(false), prefersReducedMotion ? 200 : 1100);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                    <svg width="72" height="72" viewBox="0 0 100 100">
                        <motion.circle
                            cx="38" cy="50" r="22"
                            fill="none" stroke="#e6663f" strokeWidth="9"
                            initial={{ pathLength: 0, rotate: -90 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            style={{ transformOrigin: "38px 50px" }}
                        />
                        <motion.circle
                            cx="62" cy="50" r="22"
                            fill="none" stroke="#8e93d9" strokeWidth="9"
                            initial={{ pathLength: 0, rotate: -90 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                            style={{ transformOrigin: "62px 50px" }}
                        />
                    </svg>
                </motion.div>
            )}
        </AnimatePresence>
    );
}