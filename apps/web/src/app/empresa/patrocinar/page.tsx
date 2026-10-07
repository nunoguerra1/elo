"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { TracedAccents } from "@/components/art/TracedAccents";
import { cn } from "@/lib/utils";

const CAUSES = [
    { id: "raiz-viva", name: "Instituto Raiz Viva", cause: "Meio ambiente", color: "#3f7d5c" },
    { id: "educar", name: "Educar pra Frente", cause: "Educação", color: "#2b2f6b" },
    { id: "casa-acolhedora", name: "Casa Acolhedora", cause: "Moradia", color: "#8e93d9" },
    { id: "saude-todos", name: "Saúde pra Todos", cause: "Saúde", color: "#e3a9c2" },
];

const AMOUNTS = ["R$ 500/mês", "R$ 1.500/mês", "R$ 3.500/mês", "Outro valor"];

export default function PatrocinarPage() {
    const [selectedCause, setSelectedCause] = useState(CAUSES[0].id);
    const [selectedAmount, setSelectedAmount] = useState(AMOUNTS[1]);
    const router = useRouter();

    // Mock: sem back-end ainda. Quando o módulo `funding` existir, isso
    // vira uma criação real de Patrocinio + integração de pagamento.
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/empresa/dashboard");
    }

    return (
        <div className="relative flex max-w-xl flex-col gap-8">
            <TracedAccents variant="empresa" />

            <div className="relative">
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">NOVO PATROCÍNIO</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Escolha uma causa
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="relative flex flex-col gap-8">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {CAUSES.map((c) => {
                        const isActive = selectedCause === c.id;
                        return (
                            <button
                                key={c.id}
                                type="button"
                                onClick={() => setSelectedCause(c.id)}
                                className={cn(
                                    "flex flex-col items-start gap-2 rounded-lg border p-5 text-left transition-colors",
                                    isActive ? "border-accent bg-accent/10" : "border-border bg-surface hover:border-accent/40",
                                )}
                            >
                                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.color }} />
                                <p className="text-sm font-medium text-foreground">{c.name}</p>
                                <p className="text-xs text-muted">{c.cause}</p>
                            </button>
                        );
                    })}
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm text-foreground">Valor do patrocínio</label>
                    <div className="flex flex-wrap gap-2">
                        {AMOUNTS.map((amount) => (
                            <button
                                key={amount}
                                type="button"
                                onClick={() => setSelectedAmount(amount)}
                                className={cn(
                                    "rounded-full border px-4 py-2 text-xs font-medium transition-colors",
                                    selectedAmount === amount
                                        ? "border-accent bg-accent text-accent-foreground"
                                        : "border-border bg-surface text-muted hover:border-accent/40",
                                )}
                            >
                                {amount}
                            </button>
                        ))}
                    </div>
                </div>

                <Button variant="primary" type="submit" className="w-fit">
                    Confirmar patrocínio
                </Button>
            </form>
        </div>
    );
}