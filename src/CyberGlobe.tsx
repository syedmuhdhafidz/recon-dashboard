import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import * as THREE from 'three';

function HackingParticles(props: any) {
    const ref = useRef<THREE.Points>(null);
    const [sphere] = React.useState(() => random.inSphere(new Float32Array(6000), { radius: 1.5 }));

    useFrame((_state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#00ff41"
                    size={0.005}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

function CoreGlobe() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.y = t * 0.2; // Slow rotation
        }
    });

    return (
        <Sphere ref={meshRef} args={[1, 64, 64]} scale={2}>
            <MeshDistortMaterial
                color="#0a0a0a"
                attach="material"
                distort={0.3} // Glitch effect
                speed={1.5}
                roughness={0}
                metalness={1}
                wireframe
                emissive="#00ff41"
                emissiveIntensity={0.1}
            />
        </Sphere>
    );
}

export default function CyberGlobe() {
    return (
        <div className="absolute inset-0 w-full h-full">
            <Canvas camera={{ position: [0, 0, 4] }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <CoreGlobe />
                <HackingParticles />
            </Canvas>
        </div>
    );
}
