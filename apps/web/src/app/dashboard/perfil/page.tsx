"use client";

import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const DAYS = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];

export default function PerfilPage() {
    const [skills, setSkills] = useState(["Educação", "Organização de eventos", "Design"]);
    const [skillInput, setSkillInput] = useState("");
    const [availableDays, setAvailableDays] = useState<string[]>(["Sáb", "Dom"]);

    function addSkill(e: React.FormEvent) {
        e.preventDefault();
        const value = skillInput.trim();
        if (value && !skills.includes(value)) {
            setSkills([...skills, value]);
        }
        setSkillInput("");
    }

    function removeSkill(skill: string) {
        setSkills(skills.filter((s) => s !== skill));
    }

    function toggleDay(day: string) {
        setAvailableDays((prev) => (prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]));
    }

    return (
        <div className="flex max-w-2xl flex-col gap-10">
            <div>
                <p className="mb-1 font-mono text-xs tracking-[0.3em] text-muted">SEU PERFIL</p>
                <h1 className="text-3xl text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Como você quer ajudar
                </h1>
            </div>

            <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-xl text-accent-foreground">
                    N
                </div>
                <div>
                    <p className="text-sm text-foreground">Nome do voluntário</p>
                    <p className="text-xs text-muted">voluntario@email.com</p>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground">Habilidades</label>
                <div className="mb-2 flex flex-wrap gap-2">
                    {skills.map((skill) => (
                        <span
                            key={skill}
                            className="flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1.5 text-xs text-accent"
                        >
                            {skill}
                            <button onClick={() => removeSkill(skill)} aria-label={`Remover ${skill}`}>
                                <X size={12} />
                            </button>
                        </span>
                    ))}
                </div>
                <form onSubmit={addSkill} className="flex gap-2">
                    <input
                        type="text"
                        value={skillInput}
                        onChange={(e) => setSkillInput(e.target.value)}
                        placeholder="Adicionar habilidade..."
                        className="flex-1 rounded-md border border-border bg-surface px-4 py-2.5 text-sm outline-none focus:border-accent"
                    />
                    <Button variant="ghost" type="submit" className="px-4 py-2.5 text-xs">
                        Adicionar
                    </Button>
                </form>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground">Disponibilidade</label>
                <div className="flex flex-wrap gap-2">
                    {DAYS.map((day) => {
                        const isActive = availableDays.includes(day);
                        return (
                            <button
                                key={day}
                                type="button"
                                onClick={() => toggleDay(day)}
                                className={cn(
                                    "h-11 w-11 rounded-full border text-sm font-medium transition-colors",
                                    isActive
                                        ? "border-accent bg-accent text-accent-foreground"
                                        : "border-border bg-surface text-muted hover:border-accent/40",
                                )}
                            >
                                {day}
                            </button>
                        );
                    })}
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <label className="text-sm text-foreground" htmlFor="bio">Sobre você</label>
                <textarea
                    id="bio"
                    rows={4}
                    placeholder="Conte um pouco sobre por que você quer ajudar..."
                    className="resize-none rounded-md border border-border bg-surface px-4 py-3 text-sm outline-none focus:border-accent"
                />
            </div>

            <Button variant="primary" className="w-fit">Salvar alterações</Button>
        </div>
    );
}