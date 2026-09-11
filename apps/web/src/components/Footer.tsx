export function Footer() {
    return (
        <footer className="border-t border-border">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
                <p className="text-lg text-foreground" style={{ fontFamily: "var(--font-voice)" }}>Elo</p>
                <p className="text-xs text-muted">Voluntários, ONGs e empresas, conectados por impacto real.</p>
            </div>
        </footer>
    );
}