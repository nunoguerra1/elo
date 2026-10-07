import { Button } from "@/components/ui/Button";

export default function EmpresaPerfilPage() {
    return (
        <div className="flex max-w-2xl flex-col gap-10">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">PERFIL DA EMPRESA</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Norte Tecnologia Ltda
                </h1>
            </div>

            <form className="flex flex-col gap-5">
                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Razão social
                    <input
                        type="text"
                        defaultValue="Norte Tecnologia Ltda"
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
                    Setor
                    <select className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent">
                        <option>Tecnologia</option>
                        <option>Varejo</option>
                        <option>Indústria</option>
                        <option>Serviços financeiros</option>
                    </select>
                </label>

                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Causas de interesse
                    <textarea
                        rows={3}
                        placeholder="Quais causas fazem sentido pro posicionamento da empresa?"
                        className="resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>

                <Button variant="primary" className="w-fit">Salvar alterações</Button>
            </form>
        </div>
    );
}