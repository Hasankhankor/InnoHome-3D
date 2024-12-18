// In Dome.tsx
import React from "react";

// Define expected props for Dome component
interface DomeProps {
  position: [number, number, number];  // Ensure position is a tuple of numbers
  color: string;
}

const Dome: React.FC<DomeProps> = ({ position, color }) => {
  return (
    <mesh position={position}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Dome;
