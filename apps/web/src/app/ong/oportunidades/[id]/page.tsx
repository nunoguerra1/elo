"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, X, ImageIcon } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/utils";

interface Participant {
    name: string;
    status: "pendente_aprovacao" | "confirmada" | "lista_espera";
    hours: number;
}

const INITIAL_PARTICIPANTS: Participant[] = [
    { name: "Marina Souza", status: "pendente_aprovacao", hours: 4 },
    { name: "Rafael Lima", status: "pendente_aprovacao", hours: 4 },
    { name: "Carla Mendes", status: "confirmada", hours: 4 },
    { name: "João Pedro", status: "confirmada", hours: 4 },
    { name: "Ana Beatriz", status: "lista_espera", hours: 0 },
];

export default function OportunidadeDetailPage() {
    const [participants, setParticipants] = useState(INITIAL_PARTICIPANTS);

    function approve(name: string) {
        setParticipants((prev) =>
            prev.map((p) => (p.name === name ? { ...p, status: "confirmada" } : p)),
        );
    }

    function reject(name: string) {
        setParticipants((prev) => prev.filter((p) => p.name !== name));
    }

    const pending = participants.filter((p) => p.status === "pendente_aprovacao");
    const confirmed = participants.filter((p) => p.status === "confirmada");
    const waitlist = participants.filter((p) => p.status === "lista_espera");

    return (
        <div className="flex flex-col gap-10">
            <div>
                <Link href="/ong/oportunidades" className="mb-4 flex items-center gap-1.5 text-xs text-muted hover:text-foreground">
                    <ArrowLeft size={14} /> Todas as oportunidades
                </Link>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">PUBLICADA</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Mutirão de reflorestamento
                </h1>
            </div>

            {pending.length > 0 && (
                <div>
                    <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                        Pendentes de aprovação
                    </h2>
                    <RevealGroup className="flex flex-col gap-3">
                        {pending.map((p) => (
                            <RevealItem key={p.name}>
                                <div className="flex flex-col gap-4 rounded-lg border border-accent/30 bg-accent/5 p-5 sm:flex-row sm:items-center sm:justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex h-16 w-20 items-center justify-center rounded-md border border-dashed border-border bg-surface">
                                            <ImageIcon size={20} className="text-muted" />
                                        </div>
                                        <div>
                                            <h3 className="text-sm text-foreground">{p.name}</h3>
                                            <p className="text-xs text-muted">Enviou evidência · {p.hours}h registradas</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => approve(p.name)}
                                            className="flex items-center gap-1.5 rounded-md bg-accent px-4 py-2 text-xs font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
                                        >
                                            <Check size={14} /> Aprovar
                                        </button>
                                        <button
                                            onClick={() => reject(p.name)}
                                            className="flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-xs font-semibold text-muted transition-colors hover:border-red-300 hover:text-red-500"
                                        >
                                            <X size={14} /> Rejeitar
                                        </button>
                                    </div>
                                </div>
                            </RevealItem>
                        ))}
                    </RevealGroup>
                </div>
            )}

            <div>
                <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Confirmados ({confirmed.length})
                </h2>
                <div className="flex flex-wrap gap-2">
                    {confirmed.map((p) => (
                        <span key={p.name} className="rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-foreground">
                            {p.name}
                        </span>
                    ))}
                </div>
            </div>

            {waitlist.length > 0 && (
                <div>
                    <h2 className="mb-4 text-xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                        Lista de espera
                    </h2>
                    <div className={cn("flex flex-wrap gap-2")}>
                        {waitlist.map((p) => (
                            <span key={p.name} className="rounded-full border border-dashed border-border px-3 py-1.5 text-xs text-muted">
                                {p.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}