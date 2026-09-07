import { WordReveal } from "@/components/ui/WordReveal";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroVisual } from "@/components/three/HeroVisual";

export function Hero() {
    return (
        <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 pt-28 pb-20 text-center lg:pt-36">
            <p className="text-xs tracking-[0.3em] text-muted">
                VOLUNTÁRIOS · ONGS · EMPRESAS
            </p>

            <h1
                className="max-w-4xl text-5xl leading-[1.08] text-foreground sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-voice)" }}
            >
                <WordReveal text="Tempo e habilidade" />
                <br />
                <span className="italic text-accent">
                    <WordReveal text="movem causas reais." delayStart={0.35} />
                </span>
            </h1>

            <p className="max-w-xl text-base text-muted sm:text-lg">
                O Elo conecta quem quer ajudar, quem precisa de ajuda e quem pode
                patrocinar, com verificação real de impacto em cada elo dessa
                corrente.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
                <MagneticButton variant="primary">
                    Encontrar uma causa
                </MagneticButton>
                <MagneticButton variant="ghost">Sou uma ONG</MagneticButton>
            </div>

            <div className="mt-6 w-full max-w-2xl">
                <HeroVisual />
            </div>
        </section>
    );
}