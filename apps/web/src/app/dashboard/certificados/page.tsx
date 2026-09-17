import { Award, Download, QrCode } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const CERTIFICATES = [
    { title: "Mutirão de reflorestamento", ong: "Instituto Raiz Viva", hours: 6, date: "14 ago 2026", color: "#3f7d5c" },
    { title: "Reforço escolar", ong: "Educar pra Frente", hours: 10, date: "2 ago 2026", color: "#2b2f6b" },
    { title: "Distribuição de doações", ong: "Casa Acolhedora", hours: 4, date: "20 jul 2026", color: "#8e93d9" },
    { title: "Campanha do agasalho", ong: "Casa Acolhedora", hours: 5, date: "3 jul 2026", color: "#e6663f" },
];

export default function CertificadosPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">SUAS HORAS, COMPROVADAS</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Certificados
                </h1>
            </div>

            <RevealGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {CERTIFICATES.map((cert) => (
                    <RevealItem key={cert.title + cert.date}>
                        <div className="relative overflow-hidden rounded-lg border border-border bg-surface p-6">
                            <div className="mb-5 flex items-start justify-between">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{ backgroundColor: `${cert.color}22` }}
                                >
                                    <Award size={18} color={cert.color} />
                                </div>
                                <QrCode size={28} className="text-muted opacity-40" aria-hidden />
                            </div>

                            <h3 className="mb-1 text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                                {cert.title}
                            </h3>
                            <p className="mb-4 text-xs text-muted">{cert.ong} · {cert.date}</p>

                            <div className="mb-5 flex items-baseline gap-1.5">
                                <span className="text-2xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                                    {cert.hours}h
                                </span>
                                <span className="text-xs text-muted">validadas</span>
                            </div>

                            <button className="flex items-center gap-2 text-xs font-medium text-accent hover:underline">
                                <Download size={14} /> Baixar PDF
                            </button>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </div>
    );
}