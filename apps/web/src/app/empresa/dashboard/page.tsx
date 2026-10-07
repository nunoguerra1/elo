import Link from "next/link";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { DashboardAccents } from "@/components/art/DashboardAccents";
import { HandCoins, Users, Leaf, HandHeart } from "lucide-react";

const stats = [
    { label: "Causas patrocinadas", value: 5, suffix: "", icon: HandCoins, color: "#2b2f6b" },
    { label: "Pessoas impactadas", value: 1240, suffix: "", icon: Users, color: "#8e93d9" },
    { label: "Horas mobilizadas", value: 860, suffix: "h", icon: Leaf, color: "#3f7d5c" },
];

const sponsorships = [
    { ong: "Instituto Raiz Viva", cause: "Meio ambiente", color: "#3f7d5c", monthly: "R$ 3.500/mês", since: "desde mar 2026" },
    { ong: "Educar pra Frente", cause: "Educação", color: "#2b2f6b", monthly: "R$ 2.000/mês", since: "desde jun 2026" },
];

export default function EmpresaDashboardPage() {
    return (
        <div className="relative flex flex-col gap-10">
            <DashboardAccents />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">NORTE TECNOLOGIA LTDA</p>
                    <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                        Seu impacto, consolidado.
                    </h1>
                </div>
                <Button variant="primary" href="/empresa/patrocinar">
                    <HandHeart size={16} /> Patrocinar causa
                </Button>
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

            <div className="relative">
                <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Patrocínios ativos
                </h2>
                <RevealGroup className="flex flex-col gap-3">
                    {sponsorships.map((s) => (
                        <RevealItem key={s.ong}>
                            <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                                    <div>
                                        <h3 className="text-sm text-foreground">{s.ong}</h3>
                                        <p className="text-xs text-muted">{s.cause} · {s.since}</p>
                                    </div>
                                </div>
                                <span className="text-sm text-foreground">{s.monthly}</span>
                            </div>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>

            <Link href="/empresa/relatorios" className="relative text-sm font-medium text-accent hover:underline">
                Ver relatório de impacto completo →
            </Link>
        </div>
    );
}