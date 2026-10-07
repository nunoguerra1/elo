import { AppShell } from "@/components/app-shell/AppShell";

export default function EmpresaLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell role="empresa" roleLabel="ÁREA DA EMPRESA" footerLabel="Logado como empresa">
            {children}
        </AppShell>
    );
}