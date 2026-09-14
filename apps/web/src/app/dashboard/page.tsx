import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { TiltCard } from "@/components/ui/TiltCard";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { DashboardAccents } from "@/components/art/DashboardAccents";
import { Clock, Award, TrendingUp, MapPin, Calendar, Sparkles } from "lucide-react";

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
        <div className="relative flex flex-col gap-10">
            <DashboardAccents />

            <div className="relative">
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">OLÁ DE NOVO</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Bora continuar a corrente?
                </h1>
            </div>

            <RevealGroup className="relative grid grid-cols-1 gap-4 sm:grid-cols-3">
                {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                        <RevealItem key={stat.label}>
                            <div
                                className="h-full rounded-lg border p-6 transition-transform duration-300 hover:-translate-y-1"
                                style={{ borderColor: `${stat.color}55`, backgroundColor: `${stat.color}14` }}
                            >
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
                        </RevealItem>
                    );
                })}
            </RevealGroup>

            <div className="relative overflow-hidden rounded-lg border border-accent/30 bg-accent/10 p-6 sm:p-8">
                <Sparkles className="absolute right-6 top-6 opacity-20" size={64} color="#e6663f" />
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

            <div className="relative">
                <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Recomendado pra você
                </h2>
                <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {recommended.map((op) => (
                        <RevealItem key={op.title}>
                            <TiltCard
                                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-6"
                            >
                                <div
                                    className="absolute inset-x-0 top-0 h-1.5"
                                    style={{ backgroundColor: op.color }}
                                    aria-hidden
                                />
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
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </div>
    );
}