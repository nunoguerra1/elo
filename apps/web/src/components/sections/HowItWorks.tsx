"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { KineticReveal } from "@/components/ui/KineticReveal";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    { number: "01", title: "Inscrição e match", description: "O voluntário encontra a oportunidade certa por habilidade, causa e distância — sem procurar às cegas." },
    { number: "02", title: "Ação e check-in", description: "Check-in geolocalizado no início e fim da atividade, com evidências enviadas direto pelo celular." },
    { number: "03", title: "Verificação e certificado", description: "A ONG aprova as horas e o Elo emite automaticamente um certificado com QR code de autenticidade." },
];

export function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const pathRef = useRef<SVGPathElement>(null);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        const path = pathRef.current;
        const section = sectionRef.current;
        if (!path || !section) return;

        const length = path.getTotalLength();

        if (prefersReducedMotion) {
            gsap.set(path, { strokeDasharray: length, strokeDashoffset: 0 });
            return;
        }

        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        const tween = gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: { trigger: section, start: "top 75%", end: "bottom 60%", scrub: 0.6 },
        });

        const onLoad = () => ScrollTrigger.refresh();
        window.addEventListener("load", onLoad);

        return () => {
            tween.scrollTrigger?.kill();
            tween.kill();
            window.removeEventListener("load", onLoad);
        };
    }, []);

    return (
        <section ref={sectionRef} className="relative mx-auto w-full max-w-4xl px-6 py-28">
            <div className="mb-16 max-w-xl">
                <p className="mb-3 font-mono text-xs tracking-[0.3em] text-muted">DO CADASTRO AO CERTIFICADO</p>
                <h2 className="text-3xl leading-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-voice)" }}>
                    <KineticReveal text="Três etapas até o impacto virar prova." />
                </h2>
            </div>

            <div className="relative">
                <svg aria-hidden className="absolute left-[15px] top-2 h-full w-6 sm:left-[19px]" viewBox="0 0 40 600" preserveAspectRatio="none">
                    <path d="M20 0 V600" stroke="var(--border)" strokeWidth="2" fill="none" />
                    <path ref={pathRef} d="M20 0 V600" stroke="var(--accent)" strokeWidth="2" fill="none" />
                </svg>

                <ol className="flex flex-col gap-16 pl-14 sm:pl-16">
                    {steps.map((step) => (
                        <li key={step.number} className="relative">
                            <span className="absolute -left-14 top-0 flex h-9 w-9 items-center justify-center rounded-full border border-accent/60 bg-background text-xs text-accent sm:-left-16" aria-hidden>
                                {step.number}
                            </span>
                            <h3 className="mb-2 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>{step.title}</h3>
                            <p className="max-w-md text-sm leading-relaxed text-muted">{step.description}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}