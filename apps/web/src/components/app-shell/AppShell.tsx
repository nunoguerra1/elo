import { Sidebar, type NavItem } from "@/components/app-shell/Sidebar";

interface AppShellProps {
    children: React.ReactNode;
    navItems: NavItem[];
    roleLabel: string;
    footerLabel: string;
}

export function AppShell({ children, navItems, roleLabel, footerLabel }: AppShellProps) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar items={navItems} footerLabel={footerLabel} />
            <div className="sm:pl-60">
                <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-8">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted">{roleLabel}</span>
                    <div className="h-8 w-8 rounded-full bg-accent" aria-hidden />
                </header>
                <main className="px-6 py-8 sm:px-8">{children}</main>
            </div>
        </div>
    );
}