import { Vector3 } from "three";

interface FoundationProps {
  color: string;
  position: number[];
  width: number | undefined;
}

const Foundation = ({ color, position, width }: FoundationProps) => {
  return (
    <mesh position={new Vector3(...position)} castShadow receiveShadow>
      <boxGeometry args={[width, 1.5, 39]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export default Foundation;
