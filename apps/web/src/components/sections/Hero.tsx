import { WordReveal } from "@/components/ui/WordReveal";
import { Button } from "@/components/ui/Button";
import { TerrainLandscape } from "@/components/art/TerrainLandscape";

export function Hero() {
    return (
        <section className="relative flex w-full flex-col items-center overflow-hidden pt-36 sm:pt-44">
            <p className="mb-6 font-mono text-xs tracking-[0.3em] text-muted">
                VOLUNTÁRIOS · ONGS · EMPRESAS
            </p>

            <h1
                className="max-w-3xl px-6 text-center text-5xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-voice)" }}
            >
                <WordReveal text="Tempo e habilidade" className="block" />
                <span className="block italic text-accent">
                    <WordReveal text="movem causas reais." delayStart={0.35} />
                </span>
            </h1>

            <p className="mt-6 max-w-md px-6 text-center text-base leading-relaxed text-muted sm:text-lg">
                O Elo conecta quem quer ajudar, quem precisa de ajuda e quem pode
                patrocinar — com verificação real de impacto em cada elo dessa
                corrente.
            </p>

            <div className="mt-8 flex flex-col gap-4 px-6 sm:flex-row">
                <Button variant="primary">Encontrar uma causa</Button>
                <Button variant="ghost">Sou uma ONG</Button>
            </div>

            <div className="mt-14 w-full">
                <TerrainLandscape />
            </div>
        </section>
    );
}