const CAUSES = [
    "Educação", "Meio ambiente", "Saúde", "Direitos humanos",
    "Moradia", "Primeira infância", "Cultura", "Segurança alimentar",
];

// Marquee em CSS puro — sem custo de rAF. Pausa no hover via
// group-hover (o usuário consegue "segurar" a faixa pra ler com calma).
export function CausesMarquee() {
    const items = [...CAUSES, ...CAUSES];

    return (
        <div className="group overflow-hidden border-y border-border py-5">
            <div className="flex w-max animate-marquee gap-10 group-hover:[animation-play-state:paused]">
                {items.map((cause, i) => (
                    <span key={i} className="flex items-center gap-10 text-sm tracking-wide text-muted">
                        {cause}
                        <span aria-hidden className="text-accent">✦</span>
                    </span>
                ))}
            </div>
        </div>
    );
}