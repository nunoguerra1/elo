import { Sidebar } from "@/components/app-shell/Sidebar";

export function AppShell({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-background">
            <Sidebar />
            <div className="sm:pl-60">
                <header className="flex items-center justify-between border-b border-border px-6 py-4 sm:px-8">
                    <span className="font-mono text-xs tracking-[0.2em] text-muted">
                        ÁREA DO VOLUNTÁRIO
                    </span>
                    <div className="h-8 w-8 rounded-full bg-accent" aria-hidden />
                </header>
                <main className="px-6 py-8 sm:px-8">{children}</main>
            </div>
        </div>
    );
}