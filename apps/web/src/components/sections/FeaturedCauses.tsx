"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CAUSES = [
    { title: "Educação", color: "#2b2f6b", ink: "#f5f1e6", description: "Reforço escolar, alfabetização de adultos e mentoria para jovens em vulnerabilidade." },
    { title: "Meio ambiente", color: "#3f7d5c", ink: "#f5f1e6", description: "Reflorestamento urbano, mutirões de limpeza e educação ambiental em escolas." },
    { title: "Saúde", color: "#e3a9c2", ink: "#201d3a", description: "Campanhas de vacinação, apoio a hospitais comunitários e saúde mental acessível." },
    { title: "Moradia", color: "#8e93d9", ink: "#201d3a", description: "Mutirões de reforma habitacional e acompanhamento de famílias em situação de rua." },
    { title: "Primeira infância", color: "#e7c948", ink: "#201d3a", description: "Brinquedotecas, leitura comunitária e apoio a creches de baixa renda." },
    { title: "Segurança alimentar", color: "#e6663f", ink: "#fdf6ee", description: "Hortas comunitárias, bancos de alimentos e combate ao desperdício." },
];

const CARD_WIDTH = 320;
const CARD_GAP = 24;

export function FeaturedCauses() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const [maxTranslate, setMaxTranslate] = useState(0);

    useEffect(() => {
        function measure() {
            if (!trackRef.current) return;
            const trackWidth = trackRef.current.scrollWidth;
            const viewportWidth = window.innerWidth;
            setMaxTranslate(Math.max(trackWidth - viewportWidth + 48, 0));
        }
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const { scrollYProgress } = useScroll({
        target: wrapperRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], [0, -maxTranslate]);

    return (
        <div ref={wrapperRef} className="relative h-[300vh]">
            <section className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
                <div className="mb-10 px-6 sm:px-12">
                    <p className="mb-3 font-mono text-xs tracking-[0.3em] text-muted">CAUSAS EM DESTAQUE</p>
                    <h2
                        className="max-w-lg text-3xl leading-tight text-foreground sm:text-4xl"
                        style={{ fontFamily: "var(--font-voice)" }}
                    >
                        Continue rolando — a fileira anda com você.
                    </h2>
                </div>

                <motion.div
                    ref={trackRef}
                    style={{ x }}
                    className="flex gap-6 px-6 sm:px-12"
                >
                    {CAUSES.map((cause, i) => (
                        <motion.div
                            key={cause.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.4 }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            className="flex shrink-0 flex-col justify-between rounded-2xl p-8"
                            style={{
                                width: CARD_WIDTH,
                                height: 380,
                                backgroundColor: cause.color,
                                color: cause.ink,
                                marginRight: i === CAUSES.length - 1 ? 0 : CARD_GAP - 24,
                            }}
                        >
                            <div>
                                <span className="font-mono text-xs opacity-70">0{i + 1}</span>
                                <h3
                                    className="mt-6 text-2xl leading-tight"
                                    style={{ fontFamily: "var(--font-voice)" }}
                                >
                                    {cause.title}
                                </h3>
                            </div>
                            <p className="text-sm leading-relaxed opacity-90">{cause.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>
        </div>
    );
}