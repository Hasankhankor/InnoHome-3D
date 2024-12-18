// Wall.tsx
import React from 'react';
import { useThree } from '@react-three/fiber';
import { Mesh } from 'three';

interface WallProps {
  position: [number, number, number];
  color: string;
  rotate?: boolean;
}

const Wall: React.FC<WallProps> = ({ position, color, rotate = false }) => {
  const meshRef = React.useRef<Mesh>(null);

  if (rotate) {
    meshRef.current?.rotateY(Math.PI / 4); // Apply rotation if specified
  }

  return (
    <mesh position={position} ref={meshRef}>

      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Wall;
