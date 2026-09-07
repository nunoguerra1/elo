"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// A cena 3D real só é importada no client (nunca no servidor) —
// Three.js depende de APIs de navegador que não existem no SSR.
const LinkKnotScene = dynamic(
    () => import("./LinkKnotScene").then((mod) => mod.LinkKnotScene),
    { ssr: false },
);

// Fallback leve: um gradiente radial estático que sugere a mesma
// forma (dois círculos sobrepostos) sem custo de GPU. Usado em telas
// pequenas e quando o usuário pediu menos movimento.
function StaticFallback() {
    return (
        <div
            aria-hidden
            className="h-full w-full rounded-full"
            style={{
                background:
                    "radial-gradient(circle at 38% 45%, rgba(232,130,60,0.55), transparent 55%), radial-gradient(circle at 62% 55%, rgba(242,237,228,0.18), transparent 60%)",
                filter: "blur(2px)",
            }}
        />
    );
}

export function HeroVisual() {
    const [showScene, setShowScene] = useState(false);

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        const isSmallScreen = window.innerWidth < 768;
        // Exceção legítima: matchMedia/innerWidth só existem no client,
        // então essa leitura só pode acontecer dentro do efeito, uma vez,
        // no mount — não é um caso de "deveria ser computado no render".
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShowScene(!prefersReducedMotion && !isSmallScreen);
    }, []);

    return (
        <div className="relative h-[320px] w-full sm:h-[420px] lg:h-[520px]">
            {showScene ? <LinkKnotScene /> : <StaticFallback />}
        </div>
    );
}