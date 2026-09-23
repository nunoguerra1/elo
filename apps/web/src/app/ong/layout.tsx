import { AppShell } from "@/components/app-shell/AppShell";

export default function OngLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell role="ong" roleLabel="ÁREA DA ONG" footerLabel="Logado como ONG">
            {children}
        </AppShell>
    );
}