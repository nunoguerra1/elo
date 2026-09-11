import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "ghost";
}

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    return (
        <button
            className={cn(
                "group inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 active:scale-[0.98]",
                variant === "primary" && "bg-accent text-accent-foreground hover:bg-accent/90",
                variant === "ghost" && "border border-foreground/20 text-foreground hover:border-accent/60 hover:text-accent",
                className,
            )}
            {...props}
        >
            <span>{children}</span>
            <span aria-hidden className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
                →
            </span>
        </button>
    );
}