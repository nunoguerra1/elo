"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Omitimos os handlers de drag nativos porque o Framer Motion define
// sua própria assinatura para eles (incompatível com a do DOM puro).
type NativeButtonProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"
>;

interface MagneticButtonProps extends NativeButtonProps {
    variant?: "primary" | "ghost";
    strength?: number;
}

// Botão que "persegue" levemente o cursor dentro da própria área,
// depois volta ao centro com uma mola (spring) ao sair do hover.
// Efeito desativado quando o usuário pede menos movimento.
export function MagneticButton({
    children,
    className,
    variant = "primary",
    strength = 0.35,
    ...props
}: MagneticButtonProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });
    const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function onMouseMove(e: React.MouseEvent<HTMLButtonElement>) {
        if (prefersReducedMotion || !ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        setPos({ x, y });
    }

    return (
        <motion.button
            ref={ref}
            onMouseMove={onMouseMove}
            onMouseLeave={() => setPos({ x: 0, y: 0 })}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: "spring", stiffness: 150, damping: 12 }}
            className={cn(
                "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
                variant === "primary" &&
                "bg-accent text-accent-foreground hover:bg-accent/90",
                variant === "ghost" &&
                "border border-border text-foreground hover:border-accent/60 hover:text-accent",
                className,
            )}
            {...props}
        >
            {children}
        </motion.button>
    );
}