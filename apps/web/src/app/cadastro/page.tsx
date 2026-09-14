"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { WaveBand } from "@/components/art/WaveBand";
import { cn } from "@/lib/utils";
import { HeartHandshake, Building2, Briefcase } from "lucide-react";

const ROLES = [
    { id: "voluntario", label: "Voluntário", description: "Quero doar tempo e habilidade", icon: HeartHandshake, color: "#8e93d9" },
    { id: "ong", label: "ONG / Iniciativa", description: "Quero publicar oportunidades", icon: Building2, color: "#e3a9c2" },
    { id: "empresa", label: "Empresa", description: "Quero patrocinar causas", icon: Briefcase, color: "#e7c948" },
] as const;

const QUOTES: Record<(typeof ROLES)[number]["id"], string> = {
    voluntario: "Cada hora contada é um elo a mais nessa corrente.",
    ong: "Sua causa, com gente de verdade aparecendo pra ajudar.",
    empresa: "Impacto de verdade, com número que se explica sozinho.",
};

const PANEL_COLORS: Record<(typeof ROLES)[number]["id"], [string, string]> = {
    voluntario: ["#8e93d9", "#e6663f"],
    ong: ["#e3a9c2", "#e7c948"],
    empresa: ["#e7c948", "#2b2f6b"],
};

export default function CadastroPage() {
    const [selected, setSelected] = useState<(typeof ROLES)[number]["id"]>("voluntario");
    const router = useRouter();

    // Mock: sem back-end ainda. Assim que a API de identity existir,
    // troca por um cadastro real usando `selected` como o papel do usuário.
    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        router.push("/dashboard");
    }

    const [backColor, frontColor] = PANEL_COLORS[selected];

    return (
        <div className="flex min-h-screen w-full">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full flex-col justify-center px-8 sm:w-1/2 sm:px-16"
            >
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
                            <motion.button
                                key={role.id}
                                type="button"
                                onClick={() => setSelected(role.id)}
                                whileTap={{ scale: 0.97 }}
                                className={cn(
                                    "flex flex-col items-start gap-3 rounded-lg border p-5 text-left transition-colors",
                                    isActive ? "border-accent bg-accent/10" : "border-border bg-surface hover:border-accent/40",
                                )}
                            >
                                <motion.div
                                    animate={{ scale: isActive ? 1.1 : 1 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                    className="flex h-9 w-9 items-center justify-center rounded-full"
                                    style={{ backgroundColor: `${role.color}33` }}
                                >
                                    <Icon size={18} color={role.color} />
                                </motion.div>
                                <div>
                                    <p className="text-sm font-medium text-foreground">{role.label}</p>
                                    <p className="text-xs text-muted">{role.description}</p>
                                </div>
                            </motion.button>
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
            </motion.div>

            <div className="relative hidden w-1/2 items-center justify-center overflow-hidden bg-surface sm:flex">
                <div className="absolute inset-x-0 bottom-0 h-1/2">
                    <WaveBand backColor={backColor} frontColor={frontColor} className="h-full w-full" />
                </div>
                <motion.p
                    key={selected}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="relative z-10 max-w-xs px-8 text-center text-2xl leading-snug text-foreground"
                    style={{ fontFamily: "var(--font-voice)" }}
                >
                    {QUOTES[selected]}
                </motion.p>
            </div>
        </div>
    );
}