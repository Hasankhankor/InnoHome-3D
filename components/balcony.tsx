// In Balcony.tsx
import React from "react";

interface BalconyProps {
  position: [number, number, number];  // Position as a tuple of numbers
}

const Balcony: React.FC<BalconyProps> = ({ position }) => {
  return (
    <mesh position={position}>
      <boxGeometry args={[4, 1, 1]} />
      <meshStandardMaterial color="brown" />
    </mesh>
  );
};

export default Balcony;
