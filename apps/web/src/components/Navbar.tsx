"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Button } from "@/components/ui/Button";

const links = [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Impacto", href: "#impacto" },
    { label: "Para ONGs", href: "#para-ongs" },
];

export function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => setScrolled(latest > 40));

    return (
        <motion.header
            className="fixed inset-x-0 top-0 z-40"
            animate={{
                backgroundColor: scrolled ? "rgba(241,237,226,0.88)" : "rgba(241,237,226,0)",
                borderBottomColor: scrolled ? "var(--border)" : "rgba(0,0,0,0)",
            }}
            style={{ borderBottomWidth: 1, backdropFilter: scrolled ? "blur(10px)" : "none" }}
            transition={{ duration: 0.25 }}
        >
            <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
                <span className="text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Elo
                </span>
                <ul className="hidden items-center gap-8 sm:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <Button variant="ghost" className="px-5 py-2.5 text-xs">
                    Entrar
                </Button>
            </nav>
        </motion.header>
    );
}