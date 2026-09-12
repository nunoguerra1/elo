"use client";

import { motion } from "framer-motion";

const PATHS = {
    back: "M0.0,57.7 L20.3,53.0 L40.7,48.9 L61.0,45.4 L81.4,42.7 L101.7,40.6 L122.0,39.3 L142.4,38.7 L162.7,38.9 L183.1,39.8 L203.4,41.4 L223.7,43.7 L244.1,46.5 L264.4,49.9 L284.7,53.7 L305.1,58.0 L325.4,62.5 L345.8,67.3 L366.1,72.2 L386.4,77.2 L406.8,82.1 L427.1,87.0 L447.5,91.6 L467.8,96.0 L488.1,100.1 L508.5,103.8 L528.8,107.1 L549.2,109.9 L569.5,112.3 L589.8,114.2 L610.2,115.7 L630.5,116.6 L650.8,117.1 L671.2,117.2 L691.5,116.9 L711.9,116.3 L732.2,115.3 L752.5,114.1 L772.9,112.7 L793.2,111.2 L813.6,109.5 L833.9,107.9 L854.2,106.2 L874.6,104.6 L894.9,103.1 L915.3,101.8 L935.6,100.6 L955.9,99.6 L976.3,98.8 L996.6,98.2 L1016.9,97.8 L1037.3,97.6 L1057.6,97.5 L1078.0,97.6 L1098.3,97.8 L1118.6,98.1 L1139.0,98.4 L1159.3,98.7 L1179.7,98.9 L1200.0,99.1 L1200,200 L0,200 Z",
    front: "M0.0,93.3 L20.3,95.9 L40.7,98.9 L61.0,102.2 L81.4,105.7 L101.7,109.4 L122.0,113.0 L142.4,116.6 L162.7,120.0 L183.1,123.3 L203.4,126.2 L223.7,128.7 L244.1,130.9 L264.4,132.7 L284.7,134.1 L305.1,135.0 L325.4,135.5 L345.8,135.7 L366.1,135.5 L386.4,135.0 L406.8,134.3 L427.1,133.4 L447.5,132.4 L467.8,131.3 L488.1,130.2 L508.5,129.2 L528.8,128.2 L549.2,127.4 L569.5,126.7 L589.8,126.2 L610.2,125.9 L630.5,125.8 L650.8,125.8 L671.2,126.0 L691.5,126.2 L711.9,126.5 L732.2,126.8 L752.5,127.1 L772.9,127.3 L793.2,127.3 L813.6,127.1 L833.9,126.7 L854.2,126.0 L874.6,125.1 L894.9,123.8 L915.3,122.2 L935.6,120.4 L955.9,118.2 L976.3,115.9 L996.6,113.3 L1016.9,110.6 L1037.3,107.9 L1057.6,105.1 L1078.0,102.5 L1098.3,100.0 L1118.6,97.8 L1139.0,95.9 L1159.3,94.5 L1179.7,93.5 L1200.0,93.0 L1200,200 L0,200 Z",
};

interface WaveBandProps {
    backColor?: string;
    frontColor?: string;
    className?: string;
}

// Divisor de seção reaproveitando o mesmo vocabulário visual do hero
// (onda orgânica + textura de pontos), só que mais baixo e discreto —
// costura as seções entre si em vez de deixá-las soltas/paradas.
export function WaveBand({
    backColor = "#8e93d9",
    frontColor = "#e6663f",
    className,
}: WaveBandProps) {
    return (
        <div className={className}>
            <svg viewBox="0 0 1200 200" className="h-full w-full" preserveAspectRatio="none">
                <defs>
                    <pattern id="wave-dots" width="6" height="6" patternUnits="userSpaceOnUse">
                        <circle cx="1.4" cy="1.4" r="1" fill="#201d3a" />
                    </pattern>
                    <clipPath id="wave-clip-back"><path d={PATHS.back} /></clipPath>
                    <clipPath id="wave-clip-front"><path d={PATHS.front} /></clipPath>
                </defs>

                <motion.g
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <path d={PATHS.back} fill={backColor} />
                    <g clipPath="url(#wave-clip-back)">
                        <rect width="1200" height="200" fill="url(#wave-dots)" opacity="0.25" />
                    </g>
                </motion.g>

                <motion.g
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <path d={PATHS.front} fill={frontColor} />
                    <g clipPath="url(#wave-clip-front)">
                        <rect width="1200" height="200" fill="url(#wave-dots)" opacity="0.3" />
                    </g>
                </motion.g>
            </svg>
        </div>
    );
}