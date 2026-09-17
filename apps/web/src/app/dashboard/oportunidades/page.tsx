"use client";

import { useMemo, useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { TiltCard } from "@/components/ui/TiltCard";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/utils";

const CAUSES = ["Todas", "Educação", "Meio ambiente", "Saúde", "Moradia", "Primeira infância"] as const;

const OPPORTUNITIES = [
    { title: "Mutirão de reflorestamento", ong: "Instituto Raiz Viva", cause: "Meio ambiente", color: "#3f7d5c", date: "21 set", location: "Zona Norte, 4km", vagas: 6 },
    { title: "Reforço escolar de matemática", ong: "Educar pra Frente", cause: "Educação", color: "#2b2f6b", date: "24 set", location: "Centro, 2km", vagas: 3 },
    { title: "Distribuição de doações de inverno", ong: "Casa Acolhedora", cause: "Moradia", color: "#8e93d9", date: "28 set", location: "Zona Leste, 6km", vagas: 12 },
    { title: "Campanha de vacinação comunitária", ong: "Saúde pra Todos", cause: "Saúde", color: "#e3a9c2", date: "2 out", location: "Zona Sul, 3km", vagas: 8 },
    { title: "Brinquedoteca de fim de semana", ong: "Primeiros Passos", cause: "Primeira infância", color: "#e7c948", date: "5 out", location: "Centro, 1km", vagas: 4 },
    { title: "Horta comunitária — plantio", ong: "Instituto Raiz Viva", cause: "Meio ambiente", color: "#3f7d5c", date: "9 out", location: "Zona Norte, 5km", vagas: 10 },
];

export default function OportunidadesPage() {
    const [query, setQuery] = useState("");
    const [cause, setCause] = useState<(typeof CAUSES)[number]>("Todas");

    const filtered = useMemo(() => {
        return OPPORTUNITIES.filter((op) => {
            const matchesCause = cause === "Todas" || op.cause === cause;
            const matchesQuery = op.title.toLowerCase().includes(query.toLowerCase()) || op.ong.toLowerCase().includes(query.toLowerCase());
            return matchesCause && matchesQuery;
        });
    }, [query, cause]);

    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">ENCONTRAR UMA CAUSA</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Oportunidades pra você
                </h1>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted" size={16} />
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Buscar por título ou ONG..."
                        className="w-full rounded-md border border-border bg-surface py-3 pl-10 pr-4 text-sm outline-none focus:border-accent"
                    />
                </div>
            </div>

            <div className="flex flex-wrap gap-2">
                {CAUSES.map((c) => (
                    <button
                        key={c}
                        onClick={() => setCause(c)}
                        className={cn(
                            "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors",
                            cause === c
                                ? "border-accent bg-accent text-accent-foreground"
                                : "border-border bg-surface text-muted hover:border-accent/40",
                        )}
                    >
                        {c}
                    </button>
                ))}
            </div>

            {filtered.length === 0 ? (
                <p className="py-12 text-center text-sm text-muted">Nenhuma oportunidade encontrada com esses filtros.</p>
            ) : (
                <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {filtered.map((op) => (
                        <RevealItem key={op.title}>
                            <TiltCard className="group relative flex h-full flex-col justify-between overflow-hidden rounded-lg border border-border bg-surface p-6">
                                <div className="absolute inset-x-0 top-0 h-1.5" style={{ backgroundColor: op.color }} aria-hidden />
                                <div>
                                    <span
                                        className="mb-3 inline-block rounded-full px-2.5 py-1 text-[11px] font-medium"
                                        style={{ backgroundColor: `${op.color}22`, color: op.color }}
                                    >
                                        {op.cause}
                                    </span>
                                    <h3 className="mb-1 text-base text-foreground">{op.title}</h3>
                                    <p className="text-xs text-muted">{op.ong}</p>
                                </div>
                                <div className="mt-6 flex flex-col gap-1.5 text-xs text-muted">
                                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {op.date}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {op.location}</span>
                                    <span className="flex items-center gap-1.5"><Users size={13} /> {op.vagas} vagas restantes</span>
                                </div>
                            </TiltCard>
                        </RevealItem>
                    ))}
                </RevealGroup>
            )}
        </div>
    );
}