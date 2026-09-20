import { AppShell } from "@/components/app-shell/AppShell";
import { LayoutDashboard, Compass, ClipboardCheck, Award, User } from "lucide-react";

const NAV_ITEMS = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/dashboard/oportunidades", label: "Oportunidades", icon: Compass },
    { href: "/dashboard/inscricoes", label: "Minhas inscrições", icon: ClipboardCheck },
    { href: "/dashboard/certificados", label: "Certificados", icon: Award },
    { href: "/dashboard/perfil", label: "Perfil", icon: User },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <AppShell navItems={NAV_ITEMS} roleLabel="ÁREA DO VOLUNTÁRIO" footerLabel="Logado como voluntário">
            {children}
        </AppShell>
    );
}