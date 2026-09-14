"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { HeartHandshake, Building2, Briefcase } from "lucide-react";

const ROLES = [
    { id: "voluntario", label: "Voluntário", description: "Quero doar tempo e habilidade", icon: HeartHandshake, color: "#8e93d9" },
    { id: "ong", label: "ONG / Iniciativa", description: "Quero publicar oportunidades", icon: Building2, color: "#e3a9c2" },
    { id: "empresa", label: "Empresa", description: "Quero patrocinar causas", icon: Briefcase, color: "#e7c948" },
] as const;

export default function CadastroPage() {
    const [selected, setSelected] = useState<(typeof ROLES)[number]["id"]>("voluntario");
    const router = useRouter();

    // Mock: sem back-end ainda. Assim que a API de identity existir,
    // troca por um cadastro real usando `selected` como o papel do usuário.
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/dashboard");
    }

    return (
        <div className="mx-auto flex min-h-screen w-full max-w-xl flex-col justify-center px-6 py-16">
            <Link href="/" className="mb-10 text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                Elo
            </Link>

            <h1 className="mb-2 text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                Como você quer entrar?
            </h1>
            <p className="mb-8 text-sm text-muted">Escolha o papel que combina com você — dá pra ajustar depois.</p>

            <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {ROLES.map((role) => {
                    const Icon = role.icon;
                    const isActive = selected === role.id;
                    return (
                        <button
                            key={role.id}
                            type="button"
                            onClick={() => setSelected(role.id)}
                            className={cn(
                                "flex flex-col items-start gap-3 rounded-lg border p-5 text-left transition-colors",
                                isActive ? "border-accent bg-accent/10" : "border-border bg-surface hover:border-accent/40",
                            )}
                        >
                            <div
                                className="flex h-9 w-9 items-center justify-center rounded-full"
                                style={{ backgroundColor: `${role.color}33` }}
                            >
                                <Icon size={18} color={role.color} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-foreground">{role.label}</p>
                                <p className="text-xs text-muted">{role.description}</p>
                            </div>
                        </button>
                    );
                })}
            </div>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <label className="flex flex-col gap-1.5 text-sm text-foreground">
                    Nome completo
                    <input
                        type="text"
                        placeholder="Seu nome"
                        className="rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                    />
                </label>
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
                    Criar minha conta
                </Button>
            </form>

            <p className="mt-8 text-sm text-muted">
                Já tem conta?{" "}
                <Link href="/login" className="text-accent hover:underline">
                    Entrar
                </Link>
            </p>
        </div>
    );
}