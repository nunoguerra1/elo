import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function OngPerfilPage() {
    return (
        <div className="flex max-w-2xl flex-col gap-10">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">PERFIL INSTITUCIONAL</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Instituto Raiz Viva
                </h1>
            </div>

            <div className="flex items-center gap-3 rounded-lg border border-accent/30 bg-accent/10 p-4">
                <ShieldCheck size={22} className="text-accent" />
                <div>
                    <p className="text-sm font-medium text-foreground">Selo de transparência ativo</p>
                    <p className="text-xs text-muted">Documentação verificada e horas auditadas em dia.</p>
                </div>
            </div>

            <form className="flex flex-col gap-5">
                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Nome institucional
                    <input
                        type="text"
                        defaultValue="Instituto Raiz Viva"
                        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    CNPJ
                    <input
                        type="text"
                        placeholder="00.000.000/0001-00"
                        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Causa de atuação principal
                    <select className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent">
                        <option>Meio ambiente</option>
                        <option>Educação</option>
                        <option>Saúde</option>
                        <option>Moradia</option>
                        <option>Primeira infância</option>
                    </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Sobre a organização
                    <textarea
                        rows={4}
                        placeholder="Conte a história e a missão da sua ONG..."
                        className="resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <Button variant="primary" className="w-fit">Salvar alterações</Button>
            </form>
        </div>
    );
}