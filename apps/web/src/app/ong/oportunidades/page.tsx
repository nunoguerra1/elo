import Link from "next/link";
import { Users, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { TracedAccents } from "@/components/art/TracedAccents";

// Estados do ciclo de vida, direto do documento de requisitos (RF06):
// rascunho → publicada → vagas_esgotadas → em_andamento → concluída → verificada → arquivada
const STATUS_STYLES = {
    rascunho: { label: "Rascunho", bg: "#6b675833", text: "#6b6758" },
    publicada: { label: "Publicada", bg: "#3fa38f22", text: "#3fa38f" },
    vagas_esgotadas: { label: "Vagas esgotadas", bg: "#e7c94822", text: "#a5822a" },
    em_andamento: { label: "Em andamento", bg: "#8e93d922", text: "#8e93d9" },
    concluida: { label: "Concluída", bg: "#e6663f22", text: "#e6663f" },
} as const;

const OPORTUNIDADES = [
    { id: "1", title: "Mutirão de reflorestamento", inscritos: 12, vagas: 15, status: "publicada" },
    { id: "2", title: "Horta comunitária — plantio", inscritos: 10, vagas: 10, status: "vagas_esgotadas" },
    { id: "3", title: "Feira de troca de roupas", inscritos: 6, vagas: 8, status: "rascunho" },
    { id: "4", title: "Campanha do agasalho 2025", inscritos: 22, vagas: 22, status: "concluida" },
] as const;

export default function OngOportunidadesPage() {
    return (
        <div className="relative flex flex-col gap-8">
            <TracedAccents variant="oportunidades" />

            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">SUAS VAGAS</p>
                    <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                        Oportunidades
                    </h1>
                </div>
                <Button variant="primary" href="/ong/oportunidades/nova">
                    <Plus size={16} /> Nova oportunidade
                </Button>
            </div>

            <RevealGroup className="flex flex-col gap-3">
                {OPORTUNIDADES.map((op) => {
                    const status = STATUS_STYLES[op.status];
                    return (
                        <RevealItem key={op.id}>
                            <Link
                                href={`/ong/oportunidades/${op.id}`}
                                className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 transition-colors hover:border-accent/40 sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <span
                                        className="mb-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-medium"
                                        style={{ backgroundColor: status.bg, color: status.text }}
                                    >
                                        {status.label}
                                    </span>
                                    <h3 className="text-base text-foreground">{op.title}</h3>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-muted">
                                    <Users size={14} /> {op.inscritos}/{op.vagas} inscritos
                                </div>
                            </Link>
                        </RevealItem>
                    );
                })}
            </RevealGroup>
        </div>
    );
}