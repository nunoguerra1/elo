"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "@/components/ui/WordReveal";
import { Button } from "@/components/ui/Button";
import { TerrainLandscape } from "@/components/art/TerrainLandscape";
import { SkyAccents } from "@/components/art/SkyAccents";

// O hero fica "grudado" na tela (sticky) por 100vh extras de scroll,
// enquanto o headline desaparece e a paisagem cresce — um mergulho
// de verdade na cena, não só um fade. Depois disso a página destrava
// e segue o fluxo normal pras próximas seções.
export function Hero() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end start"],
    });

    const headlineOpacity = useTransform(scrollYProgress, [0, 0.35], [1, 0]);
    const headlineY = useTransform(scrollYProgress, [0, 0.35], [0, -70]);
    const landscapeScale = useTransform(scrollYProgress, [0, 1], [1, 1.6]);
    const landscapeY = useTransform(scrollYProgress, [0, 1], [0, 30]);

    return (
        <div ref={wrapperRef} className="relative h-[200vh]">
            <section className="sticky top-0 flex h-screen w-full flex-col items-center overflow-hidden pt-36 sm:pt-44">
                <SkyAccents progress={scrollYProgress} />

                <motion.div
                    style={{ opacity: headlineOpacity, y: headlineY }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <p className="mb-6 font-mono text-xs tracking-[0.3em] text-muted">
                        VOLUNTÁRIOS · ONGS · EMPRESAS
                    </p>

                    <h1
                        className="max-w-3xl px-6 text-center text-5xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
                        style={{ fontFamily: "var(--font-voice)" }}
                    >
                        <WordReveal text="Tempo e habilidade" className="block" />
                        <span className="block italic text-accent">
                            <WordReveal text="movem causas reais." delayStart={0.35} />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-md px-6 text-center text-base leading-relaxed text-muted sm:text-lg">
                        O Elo conecta quem quer ajudar, quem precisa de ajuda e quem pode
                        patrocinar — com verificação real de impacto em cada elo dessa
                        corrente.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 px-6 sm:flex-row">
                        <Button variant="primary">Encontrar uma causa</Button>
                        <Button variant="ghost">Sou uma ONG</Button>
                    </div>
                </motion.div>

                <motion.div
                    style={{ scale: landscapeScale, y: landscapeY }}
                    className="mt-14 w-full origin-bottom"
                >
                    <TerrainLandscape />
                </motion.div>
            </section>
        </div>
    );
}