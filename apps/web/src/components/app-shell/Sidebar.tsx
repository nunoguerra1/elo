"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface NavItem {
    href: string;
    label: string;
    icon: LucideIcon;
}

interface SidebarProps {
    items: NavItem[];
    footerLabel: string;
}

export function Sidebar({ items, footerLabel }: SidebarProps) {
    const pathname = usePathname();

    return (
        <aside className="fixed inset-y-0 left-0 z-30 hidden w-60 flex-col border-r border-border bg-surface sm:flex">
            <div className="px-6 py-6">
                <Link href="/" className="text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>
                    Elo
                </Link>
            </div>

            <nav className="flex flex-1 flex-col gap-1 px-3">
                {items.map((item) => {
                    const isActive = pathname === item.href;
                    const Icon = item.icon;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors",
                                isActive
                                    ? "bg-accent text-accent-foreground"
                                    : "text-muted hover:bg-background hover:text-foreground",
                            )}
                        >
                            <Icon size={18} strokeWidth={2} />
                            {item.label}
                        </Link>
                    );
                })}
            </nav>

            <div className="border-t border-border px-6 py-5">
                <p className="text-xs text-muted">{footerLabel}</p>
            </div>
        </aside>
    );
}