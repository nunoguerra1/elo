"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { FloatingShapes } from "@/components/art/FloatingShapes";

export function CallToAction() {
    return (
        <section id="para-ongs" className="relative overflow-hidden border-t border-border">
            <FloatingShapes variant="cta" />
            <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-28 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-4xl leading-tight text-foreground sm:text-5xl"
                    style={{ fontFamily: "var(--font-voice)" }}
                >
                    Seu próximo <span className="italic text-accent">elo</span> começa hoje.
                </motion.h2>
                <p className="max-w-md text-base text-muted">
                    Cadastre-se como voluntário, publique a primeira oportunidade da sua ONG, ou leve o CSR da sua empresa pro próximo nível.
                </p>
                <Button variant="primary">Criar minha conta</Button>
            </div>
        </section>
    );
}