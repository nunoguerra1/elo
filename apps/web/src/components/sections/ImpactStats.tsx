import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

const stats = [
    { value: 1200, suffix: "+", label: "horas voluntariadas verificadas" },
    { value: 48, suffix: "", label: "iniciativas ativas na plataforma" },
    { value: 15, suffix: "", label: "empresas patrocinando causas" },
];

export function ImpactStats() {
    return (
        <section id="impacto" className="relative overflow-hidden border-y border-border bg-surface py-20">
            <div className="relative mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-6 sm:grid-cols-3">
                {stats.map((stat) => (
                    <div key={stat.label} className="text-center sm:text-left">
                        <AnimatedCounter
                            value={stat.value}
                            suffix={stat.suffix}
                            className="block text-5xl text-foreground sm:text-6xl"
                            style={{ fontFamily: "var(--font-voice)" }}
                        />
                        <p className="mt-3 text-sm text-muted">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}