import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const sides = [
    { n: "01", title: "Voluntário", color: "#8e93d9", description: "Cadastra habilidades e disponibilidade, e recebe oportunidades reais que combinam com você — perto de casa, no seu tempo livre." },
    { n: "02", title: "ONG / Iniciativa", color: "#e3a9c2", description: "Publica vagas, gerencia inscrições e emite certificados de horas com verificação automática de presença e evidências." },
    { n: "03", title: "Empresa", color: "#e7c948", description: "Patrocina causas e recebe relatórios de impacto ESG auditáveis — horas mobilizadas, pessoas alcançadas, ODS relacionados." },
];

export function ThreeSides() {
    return (
        <section id="como-funciona" className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="mb-14 max-w-xl">
                <p className="mb-3 font-mono text-xs tracking-[0.3em] text-muted">COMO O ELO FUNCIONA</p>
                <h2 className="text-3xl leading-tight text-foreground sm:text-4xl" style={{ fontFamily: "var(--font-voice)" }}>
                    Três lados, uma corrente só.
                </h2>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {sides.map((side) => (
                    <RevealItem key={side.n}>
                        <div className="group h-full rounded-lg border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5">
                            <span
                                className="mb-6 inline-block h-3 w-3 rounded-full transition-transform duration-300 group-hover:scale-125"
                                style={{ backgroundColor: side.color }}
                            />
                            <h3 className="mb-3 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                                {side.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted">{side.description}</p>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}