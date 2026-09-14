import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { Clock, Award, TrendingUp, MapPin, Calendar } from "lucide-react";

const stats = [
    { label: "Horas voluntariadas", value: 42, suffix: "h", icon: Clock, color: "#8e93d9" },
    { label: "Certificados emitidos", value: 6, suffix: "", icon: Award, color: "#e3a9c2" },
    { label: "Nível atual", value: 3, suffix: "", icon: TrendingUp, color: "#e7c948" },
];

const recommended = [
    { title: "Mutirão de reflorestamento", ong: "Instituto Raiz Viva", date: "21 set", location: "Zona Norte, 4km", color: "#3f7d5c" },
    { title: "Reforço escolar de matemática", ong: "Educar pra Frente", date: "24 set", location: "Centro, 2km", color: "#2b2f6b" },
    { title: "Distribuição de doações de inverno", ong: "Casa Acolhedora", date: "28 set", location: "Zona Leste, 6km", color: "#e6663f" },
];

export default function DashboardPage() {
    return (
        <div className="flex flex-col gap-10">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">OLÁ DE NOVO</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Bora continuar a corrente?
                </h1>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.label} className="rounded-lg border border-border bg-surface p-6">
                            <div
                                className="mb-4 flex h-9 w-9 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${stat.color}33` }}
                            >
                                <Icon size={18} color={stat.color} />
                            </div>
                            <AnimatedCounter
                                value={stat.value}
                                suffix={stat.suffix}
                                className="block text-3xl text-foreground"
                                style={{ fontFamily: "var(--font-voice)" }}
                            />
                            <p className="mt-1 text-sm text-muted">{stat.label}</p>
                        </div>
                    );
                })}
            </div>

            <div className="rounded-lg border border-accent/30 bg-accent/10 p-6 sm:p-8">
                <p className="mb-2 font-mono text-xs tracking-[0.2em] text-accent">PRÓXIMA ATIVIDADE</p>
                <h2 className="mb-4 text-2xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Mutirão de reflorestamento
                </h2>
                <div className="mb-6 flex flex-wrap gap-6 text-sm text-muted">
                    <span className="flex items-center gap-2">
                        <Calendar size={16} /> 21 de setembro, 9h
                    </span>
                    <span className="flex items-center gap-2">
                        <MapPin size={16} /> Parque da Cantareira, Zona Norte
                    </span>
                </div>
                <Button variant="primary">Ver check-in</Button>
            </div>

            <div>
                <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Recomendado pra você
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {recommended.map((op) => (
                        <TiltCard
                            key={op.title}
                            className="group relative flex h-full flex-col justify-between rounded-lg border border-border bg-surface p-6"
                        >
                            <div>
                                <span
                                    className="mb-4 inline-block h-2.5 w-2.5 rounded-full"
                                    style={{ backgroundColor: op.color }}
                                />
                                <h3 className="mb-1 text-base text-foreground">{op.title}</h3>
                                <p className="text-xs text-muted">{op.ong}</p>
                            </div>
                            <div className="mt-6 flex items-center justify-between text-xs text-muted">
                                <span>{op.date}</span>
                                <span>{op.location}</span>
                            </div>
                        </TiltCard>
                    ))}
                </div>
            </div>
        </div>
    );
}