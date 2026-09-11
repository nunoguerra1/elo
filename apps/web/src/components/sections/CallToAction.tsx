import { Button } from "@/components/ui/Button";

export function CallToAction() {
    return (
        <section id="para-ongs" className="relative overflow-hidden border-t border-border">
            <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-8 px-6 py-28 text-center">
                <h2 className="text-4xl leading-tight text-foreground sm:text-5xl" style={{ fontFamily: "var(--font-voice)" }}>
                    Seu próximo <span className="italic text-accent">elo</span> começa hoje.
                </h2>
                <p className="max-w-md text-base text-muted">
                    Cadastre-se como voluntário, publique a primeira oportunidade da sua ONG, ou leve o CSR da sua empresa pro próximo nível.
                </p>
                <Button variant="primary">Criar minha conta</Button>
            </div>
        </section>
    );
}