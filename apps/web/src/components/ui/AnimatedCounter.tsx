"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function AnimatedCounter({ value, suffix = "", className, style }: { value: number; suffix?: string; className?: string; style?: React.CSSProperties }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.6 });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { damping: 24, stiffness: 60 });

    useEffect(() => {
        if (isInView) motionValue.set(value);
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            if (ref.current) ref.current.textContent = `${Math.round(latest)}${suffix}`;
        });
    }, [springValue, suffix]);

    return (
        <span ref={ref} className={className} style={style}>
            0{suffix}
        </span>
    );
}