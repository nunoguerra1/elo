import { Calendar, MapPin } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";
import { cn } from "@/lib/utils";

const STATUS_STYLES = {
    confirmada: { label: "Confirmada", bg: "#3fa38f22", text: "#3fa38f" },
    espera: { label: "Lista de espera", bg: "#e7c94822", text: "#a5822a" },
    concluida: { label: "Concluída", bg: "#8e93d922", text: "#8e93d9" },
} as const;

const INSCRICOES = [
    { title: "Mutirão de reflorestamento", ong: "Instituto Raiz Viva", date: "21 set, 9h", location: "Parque da Cantareira", status: "confirmada" },
    { title: "Reforço escolar de matemática", ong: "Educar pra Frente", date: "24 set, 14h", location: "Centro Comunitário", status: "confirmada" },
    { title: "Campanha de vacinação comunitária", ong: "Saúde pra Todos", date: "2 out, 8h", location: "UBS Zona Sul", status: "espera" },
    { title: "Distribuição de doações de inverno", ong: "Casa Acolhedora", date: "14 ago, 10h", location: "Zona Leste", status: "concluida" },
] as const;

export default function InscricoesPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">SUA JORNADA</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Minhas inscrições
                </h1>
            </div>

            <RevealGroup className="flex flex-col gap-3">
                {INSCRICOES.map((item) => {
                    const status = STATUS_STYLES[item.status];
                    return (
                        <RevealItem key={item.title}>
                            <div className="flex flex-col gap-3 rounded-lg border border-border bg-surface p-5 sm:flex-row sm:items-center sm:justify-between">
                                <div>
                                    <span
                                        className={cn("mb-2 inline-block rounded-full px-2.5 py-1 text-[11px] font-medium")}
                                        style={{ backgroundColor: status.bg, color: status.text }}
                                    >
                                        {status.label}
                                    </span>
                                    <h3 className="text-base text-foreground">{item.title}</h3>
                                    <p className="text-xs text-muted">{item.ong}</p>
                                </div>
                                <div className="flex flex-col gap-1 text-xs text-muted sm:items-end">
                                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {item.date}</span>
                                    <span className="flex items-center gap-1.5"><MapPin size={13} /> {item.location}</span>
                                </div>
                            </div>
                        </RevealItem>
                    );
                })}
            </RevealGroup>
        </div>
    );
}