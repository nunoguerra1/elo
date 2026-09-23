import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { DashboardAccents } from "@/components/art/DashboardAccents";
import { ClipboardList, Users, Clock, Plus } from "lucide-react";

const stats = [
    { label: "Vagas ativas", value: 4, icon: ClipboardList, color: "#3f7d5c" },
    { label: "Voluntários inscritos", value: 38, icon: Users, color: "#8e93d9" },
    { label: "Aprovações pendentes", value: 7, icon: Clock, color: "#e6663f" },
];

const pendingApprovals = [
    { name: "Marina Souza", opportunity: "Mutirão de reflorestamento", submittedAt: "há 2 dias" },
    { name: "Rafael Lima", opportunity: "Mutirão de reflorestamento", submittedAt: "há 2 dias" },
    { name: "Beatriz Alves", opportunity: "Horta comunitária — plantio", submittedAt: "há 5 horas" },
];

export default function OngDashboardPage() {
    return (
        <div className="relative flex flex-col gap-10">
            <DashboardAccents />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">INSTITUTO RAIZ VIVA</p>
                    <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                        Suas vagas, de olho.
                    </h1>
                </div>
                <Button variant="primary" href="/ong/oportunidades/nova">
                    <Plus size={16} /> Nova oportunidade
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
                                <span className="block text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                                    {stat.value}
                                </span>
                                <p className="mt-1 text-sm text-muted">{stat.label}</p>
                            </div>
                        </RevealItem>
                    );
                })}
            </RevealGroup>

            <div className="relative">
                <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Pendentes de aprovação
                </h2>
                <RevealGroup className="flex flex-col gap-3">
                    {pendingApprovals.map((item, i) => (
                        <RevealItem key={i}>
                            <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <h3 className="text-sm text-foreground">{item.name}</h3>
                                    <p className="text-xs text-muted">{item.opportunity} · enviado {item.submittedAt}</p>
                                </div>
                                <Link
                                    href="/ong/oportunidades/1"
                                    className="text-xs font-medium text-accent hover:underline"
                                >
                                    Revisar →
                                </Link>
                            </div>
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>
        </div>
    );
}