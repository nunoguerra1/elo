"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

// Paths gerados a partir de uma função senoidal (duas frequências
// somadas) — garante cristas arredondadas e orgânicas, sem picos
// pontiagudos.
const PATHS = {
    navy: "M0.0,481.8 L17.4,459.6 L34.8,439.2 L52.2,420.7 L69.6,404.6 L87.0,391.0 L104.3,380.1 L121.7,372.1 L139.1,367.1 L156.5,365.1 L173.9,366.0 L191.3,369.7 L208.7,376.2 L226.1,385.3 L243.5,396.7 L260.9,410.1 L278.3,425.3 L295.7,441.8 L313.0,459.5 L330.4,477.9 L347.8,496.7 L365.2,515.5 L382.6,533.9 L400.0,551.8 L417.4,568.7 L434.8,584.5 L452.2,598.8 L469.6,611.6 L487.0,622.6 L504.3,631.9 L521.7,639.3 L539.1,644.9 L556.5,648.6 L573.9,650.7 L591.3,651.1 L608.7,650.2 L626.1,647.9 L643.5,644.6 L660.9,640.5 L678.3,635.8 L695.7,630.7 L713.0,625.4 L730.4,620.3 L747.8,615.4 L765.2,611.0 L782.6,607.2 L800.0,604.1 L817.4,601.8 L834.8,600.3 L852.2,599.8 L869.6,600.1 L887.0,601.1 L904.3,602.9 L921.7,605.1 L939.1,607.8 L956.5,610.7 L973.9,613.7 L991.3,616.4 L1008.7,618.7 L1026.1,620.5 L1043.5,621.4 L1060.9,621.3 L1078.3,620.0 L1095.7,617.3 L1113.0,613.3 L1130.4,607.6 L1147.8,600.5 L1165.2,591.7 L1182.6,581.5 L1200.0,569.8 L1200,720 L0,720 Z",
    pink: "M0.0,471.6 L17.4,471.2 L34.8,472.0 L52.2,473.9 L69.6,477.0 L87.0,481.1 L104.3,486.2 L121.7,492.2 L139.1,499.1 L156.5,506.7 L173.9,514.9 L191.3,523.7 L208.7,533.0 L226.1,542.5 L243.5,552.4 L260.9,562.3 L278.3,572.2 L295.7,582.0 L313.0,591.7 L330.4,601.0 L347.8,610.0 L365.2,618.5 L382.6,626.5 L400.0,633.9 L417.4,640.6 L434.8,646.7 L452.2,652.0 L469.6,656.6 L487.0,660.4 L504.3,663.5 L521.7,665.8 L539.1,667.3 L556.5,668.2 L573.9,668.4 L591.3,667.9 L608.7,666.9 L626.1,665.4 L643.5,663.4 L660.9,661.0 L678.3,658.3 L695.7,655.3 L713.0,652.2 L730.4,648.9 L747.8,645.5 L765.2,642.2 L782.6,639.0 L800.0,635.8 L817.4,632.8 L834.8,630.1 L852.2,627.6 L869.6,625.3 L887.0,623.4 L904.3,621.8 L921.7,620.5 L939.1,619.4 L956.5,618.7 L973.9,618.3 L991.3,618.1 L1008.7,618.1 L1026.1,618.3 L1043.5,618.7 L1060.9,619.1 L1078.3,619.5 L1095.7,620.0 L1113.0,620.3 L1130.4,620.5 L1147.8,620.6 L1165.2,620.4 L1182.6,619.9 L1200.0,619.1 L1200,720 L0,720 Z",
    blue: "M0.0,597.9 L17.4,605.2 L34.8,612.6 L52.2,619.9 L69.6,627.1 L87.0,634.1 L104.3,640.7 L121.7,646.9 L139.1,652.6 L156.5,657.7 L173.9,662.3 L191.3,666.1 L208.7,669.4 L226.1,672.0 L243.5,673.9 L260.9,675.2 L278.3,675.9 L295.7,676.1 L313.0,675.8 L330.4,675.0 L347.8,673.9 L365.2,672.6 L382.6,671.0 L400.0,669.3 L417.4,667.5 L434.8,665.7 L452.2,664.1 L469.6,662.6 L487.0,661.3 L504.3,660.3 L521.7,659.5 L539.1,659.1 L556.5,659.0 L573.9,659.2 L591.3,659.8 L608.7,660.6 L626.1,661.7 L643.5,663.0 L660.9,664.5 L678.3,666.1 L695.7,667.7 L713.0,669.3 L730.4,670.8 L747.8,672.1 L765.2,673.2 L782.6,673.9 L800.0,674.2 L817.4,674.0 L834.8,673.3 L852.2,672.1 L869.6,670.2 L887.0,667.7 L904.3,664.6 L921.7,660.8 L939.1,656.4 L956.5,651.4 L973.9,645.9 L991.3,639.8 L1008.7,633.4 L1026.1,626.6 L1043.5,619.5 L1060.9,612.3 L1078.3,605.1 L1095.7,597.9 L1113.0,590.9 L1130.4,584.2 L1147.8,577.9 L1165.2,572.2 L1182.6,567.1 L1200.0,562.8 L1200,720 L0,720 Z",
    yellow: "M0.0,632.6 L17.4,628.2 L34.8,624.7 L52.2,621.9 L69.6,620.0 L87.0,619.0 L104.3,618.9 L121.7,619.7 L139.1,621.4 L156.5,623.8 L173.9,626.9 L191.3,630.6 L208.7,634.9 L226.1,639.7 L243.5,644.8 L260.9,650.0 L278.3,655.4 L295.7,660.8 L313.0,666.1 L330.4,671.1 L347.8,675.9 L365.2,680.2 L382.6,684.1 L400.0,687.6 L417.4,690.4 L434.8,692.7 L452.2,694.5 L469.6,695.7 L487.0,696.3 L504.3,696.4 L521.7,696.1 L539.1,695.4 L556.5,694.3 L573.9,692.9 L591.3,691.4 L608.7,689.7 L626.1,688.0 L643.5,686.3 L660.9,684.6 L678.3,683.1 L695.7,681.7 L713.0,680.6 L730.4,679.7 L747.8,679.0 L765.2,678.6 L782.6,678.4 L800.0,678.4 L817.4,678.6 L834.8,678.9 L852.2,679.3 L869.6,679.7 L887.0,680.1 L904.3,680.4 L921.7,680.5 L939.1,680.4 L956.5,680.1 L973.9,679.4 L991.3,678.4 L1008.7,677.1 L1026.1,675.3 L1043.5,673.1 L1060.9,670.6 L1078.3,667.7 L1095.7,664.5 L1113.0,661.1 L1130.4,657.4 L1147.8,653.6 L1165.2,649.7 L1182.6,645.9 L1200.0,642.2 L1200,720 L0,720 Z",
    coral: "M0.0,659.6 L17.4,661.4 L34.8,663.7 L52.2,666.6 L69.6,669.7 L87.0,673.2 L104.3,676.9 L121.7,680.6 L139.1,684.4 L156.5,688.0 L173.9,691.4 L191.3,694.5 L208.7,697.3 L226.1,699.7 L243.5,701.7 L260.9,703.2 L278.3,704.3 L295.7,705.0 L313.0,705.2 L330.4,705.1 L347.8,704.7 L365.2,704.0 L382.6,703.1 L400.0,702.1 L417.4,701.1 L434.8,700.0 L452.2,699.0 L469.6,698.2 L487.0,697.4 L504.3,696.9 L521.7,696.5 L539.1,696.4 L556.5,696.4 L573.9,696.6 L591.3,696.9 L608.7,697.3 L626.1,697.8 L643.5,698.2 L660.9,698.6 L678.3,698.8 L695.7,698.8 L713.0,698.6 L730.4,698.1 L747.8,697.3 L765.2,696.2 L782.6,694.7 L800.0,692.8 L817.4,690.6 L834.8,688.1 L852.2,685.4 L869.6,682.5 L887.0,679.4 L904.3,676.4 L921.7,673.4 L939.1,670.5 L956.5,667.9 L973.9,665.6 L991.3,663.8 L1008.7,662.4 L1026.1,661.6 L1043.5,661.4 L1060.9,661.8 L1078.3,662.9 L1095.7,664.7 L1113.0,667.1 L1130.4,670.2 L1147.8,673.7 L1165.2,677.8 L1182.6,682.2 L1200.0,686.9 L1200,720 L0,720 Z",
};

// Cada camada: cor sólida + velocidade própria de paralaxe (as de trás
// andam menos, as da frente andam mais — sensação real de profundidade).
const LAYERS = [
    { key: "navy", color: "#2b2f6b", parallax: 20 },
    { key: "pink", color: "#e3a9c2", parallax: 36 },
    { key: "blue", color: "#8e93d9", parallax: 52 },
    { key: "yellow", color: "#e7c948", parallax: 68 },
    { key: "coral", color: "#e6663f", parallax: 86 },
] as const;

function Totem({
    x,
    height,
    color,
    parallax,
    progress,
}: {
    x: number;
    height: number;
    color: string;
    parallax: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const y = useTransform(progress, [0, 1], [0, -parallax]);

    return (
        <motion.g
            style={{ y }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
        >
            <motion.rect
                x={x}
                y={600 - height}
                width="34"
                height={height}
                rx="17"
                fill={color}
                animate={{ rotate: [-1.5, 1.5, -1.5] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ transformOrigin: `${x + 17}px 600px` }}
            />
            {/* textura de listras verticais, como na referência */}
            {[8, 16, 24].map((dx) => (
                <line
                    key={dx}
                    x1={x + dx}
                    y1={600 - height + 14}
                    x2={x + dx}
                    y2={590}
                    stroke="#fdf6ee"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                />
            ))}
        </motion.g>
    );
}

export function TerrainLandscape() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        <div ref={containerRef} className="relative h-full w-full overflow-hidden">
            <svg
                viewBox="0 0 1200 720"
                className="absolute inset-x-0 bottom-0 h-full w-full"
                preserveAspectRatio="xMidYMax slice"
            >
                <defs>
                    <pattern id="riso-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="1.4" cy="1.4" r="1.1" fill="#201d3a" />
                    </pattern>
                    {LAYERS.map((l) => (
                        <clipPath key={l.key} id={`clip-${l.key}`}>
                            <path d={PATHS[l.key]} />
                        </clipPath>
                    ))}
                </defs>

                <ParallaxCircle progress={scrollYProgress} />

                {LAYERS.map((layer, i) => (
                    <TerrainLayer key={layer.key} layer={layer} index={i} progress={scrollYProgress} />
                ))}

                <Totem x={130} height={140} color="#e6663f" parallax={70} progress={scrollYProgress} />
                <Totem x={1020} height={120} color="#e6663f" parallax={40} progress={scrollYProgress} />
            </svg>
        </div>
    );
}

function ParallaxCircle({ progress }: { progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
    const y = useTransform(progress, [0, 1], [0, -18]);
    return (
        <motion.circle
            cx="220"
            cy="110"
            r="46"
            fill="#e6663f"
            style={{ y }}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            animate={{ scale: [1, 1.06, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    );
}

function TerrainLayer({
    layer,
    index,
    progress,
}: {
    layer: (typeof LAYERS)[number];
    index: number;
    progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
    const y = useTransform(progress, [0, 1], [0, -layer.parallax]);

    return (
        <motion.g
            style={{ y }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >
            <path d={PATHS[layer.key]} fill={layer.color} />
            <g clipPath={`url(#clip-${layer.key})`}>
                <rect width="1200" height="720" fill="url(#riso-dots)" opacity="0.3" />
            </g>
        </motion.g>
    );
}