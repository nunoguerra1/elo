import { AppShell } from "@/components/app-shell/AppShell";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell role="voluntario" roleLabel="ÁREA DO VOLUNTÁRIO" footerLabel="Logado como voluntário">
            {children}
        </AppShell>
    );
}