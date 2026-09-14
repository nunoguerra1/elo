import Link from "next/link";
import { cn } from "@/lib/utils";

interface BaseProps {
    variant?: "primary" | "ghost";
    className?: string;
    children: React.ReactNode;
}

type ButtonAsButton = BaseProps &
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & { href?: undefined };

type ButtonAsLink = BaseProps &
    Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children" | "href"> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ children, className, variant = "primary", ...props }: ButtonProps) {
    const classes = cn(
        "group inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-sm font-semibold tracking-wide transition-colors duration-200 active:scale-[0.98]",
        variant === "primary" && "bg-accent text-accent-foreground hover:bg-accent/90",
        variant === "ghost" && "border border-foreground/20 text-foreground hover:border-accent/60 hover:text-accent",
        className,
    );

    const arrow = (
        <span aria-hidden className="inline-block transition-transform duration-300 ease-out group-hover:translate-x-1">
            →
        </span>
    );

    if ("href" in props && props.href) {
        const { href, ...rest } = props;
        return (
            <Link href={href} className={classes} {...rest}>
                <span>{children}</span>
                {arrow}
            </Link>
        );
    }

    return (
        <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
            <span>{children}</span>
            {arrow}
        </button>
    );
}