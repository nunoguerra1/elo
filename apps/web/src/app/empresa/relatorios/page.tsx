import { Download, FileBarChart } from "lucide-react";
import { RevealGroup, RevealItem } from "@/components/motion/RevealGroup";

const REPORTS = [
    { period: "3º trimestre 2026", hours: 320, people: 480, ods: ["ODS 4", "ODS 13"], color: "#2b2f6b" },
    { period: "2º trimestre 2026", hours: 280, people: 410, ods: ["ODS 4", "ODS 3"], color: "#3f7d5c" },
    { period: "1º trimestre 2026", hours: 260, people: 350, ods: ["ODS 13", "ODS 11"], color: "#8e93d9" },
];

export default function RelatoriosPage() {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">IMPACTO AUDITÁVEL</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Relatórios ESG
                </h1>
            </div>

            <RevealGroup className="flex flex-col gap-3">
                {REPORTS.map((report) => (
                    <RevealItem key={report.period}>
                        <div className="flex flex-col gap-4 rounded-lg border border-border bg-surface p-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-4">
                                <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{ backgroundColor: `${report.color}22` }}
                                >
                                    <FileBarChart size={18} color={report.color} />
                                </div>
                                <div>
                                    <h3 className="text-base text-foreground">{report.period}</h3>
                                    <p className="text-xs text-muted">
                                        {report.hours}h mobilizadas · {report.people} pessoas impactadas · {report.ods.join(", ")}
                                    </p>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 self-start text-xs font-medium text-accent hover:underline sm:self-auto">
                                <Download size={14} /> Exportar PDF
                            </button>
                        </div>
                    </RevealItem>
                ))}
            </RevealGroup>
        </div>
    );
}