"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function NovaOportunidadePage() {
    const router = useRouter();

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/ong/oportunidades");
    }

    return (
        <div className="flex max-w-xl flex-col gap-8">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">NOVA VAGA</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Criar oportunidade
                </h1>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Título
                    <input
                        type="text"
                        placeholder="Ex: Mutirão de reflorestamento"
                        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Descrição
                    <textarea
                        rows={4}
                        placeholder="O que os voluntários vão fazer, o que trazer, etc."
                        className="resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <div className="grid grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5 text-sm text-foreground">
                        Data
                        <input
                            type="date"
                            className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                        />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm text-foreground">
                        Vagas
                        <input
                            type="number"
                            min={1}
                            placeholder="15"
                            className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                        />
                    </label>
                </div>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Localização
                    <input
                        type="text"
                        placeholder="Endereço ou ponto de encontro"
                        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <div className="flex gap-3">
                    <Button variant="primary" type="submit">Publicar oportunidade</Button>
                    <Button variant="ghost" href="/ong/oportunidades">Cancelar</Button>
                </div>
            </form>
        </div>
    );
}