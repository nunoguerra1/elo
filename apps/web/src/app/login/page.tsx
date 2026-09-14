"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { WaveBand } from "@/components/art/WaveBand";

export default function LoginPage() {
    const router = useRouter();

    // Mock: sem back-end ainda, só simula o fluxo indo direto pro
    // dashboard. Troca por uma chamada real de autenticação quando a
    // API de identity existir.
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <div className="flex min-h-screen w-full">
            <div className="flex w-full flex-col justify-center px-8 sm:w-1/2 sm:px-16">
                <Link href="/" className="mb-10 text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Elo
                </Link>

                <h1 className="mb-2 text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Bom te ver de novo.
                </h1>
                <p className="mb-8 text-sm text-muted">Entre pra continuar sua corrente de impacto.</p>

                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <label className="flex flex-col gap-1.5 text-sm text-foreground">
                        E-mail
                        <input
                            type="email"
                            placeholder="voce@email.com"
                            className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                        />
                    </label>
                    <label className="flex flex-col gap-1.5 text-sm text-foreground">
                        Senha
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                        />
                    </label>

                    <Button variant="primary" className="mt-2 justify-center" type="submit">
                        Entrar
                    </Button>
                </form>

                <p className="mt-8 text-sm text-muted">
                    Ainda não tem conta?{" "}
                    <Link href="/cadastro" className="text-accent hover:underline">
                        Criar conta
                    </Link>
                </p>
            </div>

            <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-surface sm:flex">
                <div className="absolute inset-x-0 bottom-0 h-1/2">
                    <WaveBand backColor="#8e93d9" frontColor="#e6663f" className="h-full w-full" />
                </div>
                <p
                    className="relative z-10 max-w-xs px-8 text-center text-2xl leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-voice)" }}
                >
                    Cada hora contada é um elo a mais nessa corrente.
                </p>
            </div>
        </div>
    );
}