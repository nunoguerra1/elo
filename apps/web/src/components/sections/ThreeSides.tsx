import Image from "next/image";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const sides = [
    {
        icon: "/illustrations/volunteer.svg",
        title: "Voluntário",
        description:
            "Cadastra habilidades e disponibilidade, e recebe oportunidades reais que combinam com você — perto de casa, no seu tempo livre.",
    },
    {
        icon: "/illustrations/ngo.svg",
        title: "ONG / Iniciativa",
        description:
            "Publica vagas, gerencia inscrições e emite certificados de horas com verificação automática de presença e evidências.",
    },
    {
        icon: "/illustrations/company.svg",
        title: "Empresa",
        description:
            "Patrocina causas e recebe relatórios de impacto ESG auditáveis — horas mobilizadas, pessoas alcançadas, ODS relacionados.",
    },
];

export function ThreeSides() {
    return (
        <section className="mx-auto w-full max-w-6xl px-6 py-24">
            <div className="mb-14 max-w-xl">
                <p className="mb-3 text-xs tracking-[0.3em] text-muted">
                    COMO O ELO FUNCIONA
                </p>
                <h2
                    className="text-3xl leading-tight text-foreground sm:text-4xl"
                    style={{ fontFamily: "var(--font-voice)" }}
                >
                    Três lados, uma corrente só.
                </h2>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                {sides.map((side) => (
                    <RevealItem key={side.title}>
                        <div className="group h-full rounded-2xl border border-border bg-surface p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50">
                            <div className="mb-6 h-12 w-12 transition-transform duration-300 group-hover:scale-110">
                                <Image
                                    src={side.icon}
                                    alt=""
                                    width={48}
                                    height={48}
                                    aria-hidden
                                />
                            </div>
                            <h3
                                className="mb-3 text-xl text-foreground"
                                style={{ fontFamily: "var(--font-voice)" }}
                            >
                                {side.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted">
                                {side.description}
                            </p>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </section>
    );
}