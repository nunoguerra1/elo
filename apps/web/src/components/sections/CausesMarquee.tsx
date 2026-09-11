const CAUSES = [
    "Educação",
    "Meio ambiente",
    "Saúde",
    "Direitos humanos",
    "Moradia",
    "Primeira infância",
    "Cultura",
    "Segurança alimentar",
];

// Marquee em CSS puro (sem JS por frame): duplicamos a lista e
// deslizamos -50% em loop infinito. Roda liso mesmo em celular fraco,
// porque não depende de rAF nem de recalcular nada a cada frame.
export function CausesMarquee() {
    const items = [...CAUSES, ...CAUSES];

    return (
        <div className="overflow-hidden border-y border-border py-5">
            <div className="flex w-max animate-marquee gap-10">
                {items.map((cause, i) => (
                    <span
                        key={i}
                        className="flex items-center gap-10 text-sm tracking-wide text-muted"
                    >
                        {cause}
                        <span aria-hidden className="text-accent">
                            ✦
                        </span>
                    </span>
                ))}
            </div>
        </div>
    );
}