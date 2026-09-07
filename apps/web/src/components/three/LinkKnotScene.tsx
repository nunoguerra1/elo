"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment } from "@react-three/drei";
import type { Mesh } from "three";

// Três anéis (toros) entrelaçados — a metáfora literal do "Elo":
// peças independentes que só fazem sentido conectadas. Cada anel
// gira em velocidade e eixo levemente diferentes para não parecer
// um loop mecânico perfeito.
function Ring({
    radius,
    color,
    rotationSpeed,
    position,
    metalness = 0.55,
}: {
    radius: number;
    color: string;
    rotationSpeed: number;
    position: [number, number, number];
    metalness?: number;
}) {
    const ref = useRef<Mesh>(null);

    useFrame((_, delta) => {
        if (!ref.current) return;
        ref.current.rotation.x += delta * rotationSpeed;
        ref.current.rotation.y += delta * rotationSpeed * 0.6;
    });

    return (
        <mesh ref={ref} position={position}>
            <torusGeometry args={[radius, radius * 0.28, 32, 128]} />
            <meshStandardMaterial color={color} roughness={0.35} metalness={metalness} />
        </mesh>
    );
}

function Scene() {
    return (
        <>
            <ambientLight intensity={0.55} />
            <directionalLight position={[3, 3, 4]} intensity={1.4} />
            <directionalLight position={[-4, -2, -3]} intensity={0.4} color="#e8823c" />

            <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.7}>
                <group rotation={[0.4, 0.3, 0]}>
                    <Ring radius={1.15} color="#e8823c" rotationSpeed={0.18} position={[-0.55, 0, 0]} />
                    <Ring radius={1.15} color="#f2ede4" rotationSpeed={0.22} position={[0.55, 0.15, 0.3]} metalness={0.2} />
                </group>
            </Float>

            <Environment preset="city" />
        </>
    );
}

// Wrapper client-only. O import dinâmico com ssr:false fica em quem
// consome este componente (ver HeroVisual.tsx), não aqui.
export function LinkKnotScene() {
    return (
        <Canvas
            camera={{ position: [0, 0, 5], fov: 42 }}
            dpr={[1, 1.5]}
            gl={{ antialias: true, alpha: true }}
        >
            <Scene />
        </Canvas>
    );
}