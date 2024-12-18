import { Vector3 } from "three";

interface EndWallProps {
  color: string;
  position: number[]; // This is fine as an array for the position prop
  rotate: boolean;
  twoStory: boolean;
}

const EndWall = ({ color, position, rotate, twoStory }: EndWallProps) => {
  const rotation = rotate ? -Math.PI : 0;
  const endHeight = twoStory ? 5.75 : 0.75;
  const endBoxHeight = twoStory ? 21.5 : 11.5;
  const topHeight = twoStory ? 15.5 : 5.5;

  return (
    <mesh position={new Vector3(...position)} rotation={[0, rotation, 0]}>
      <mesh position={new Vector3(-0.775, endHeight, 19.75)}>
        <boxGeometry args={[0.55, endBoxHeight, 1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={new Vector3(-0.775, endHeight, -19.75)}>
        <boxGeometry args={[0.55, endBoxHeight, 1]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={new Vector3(-0.71, topHeight, 0)}>
        <boxGeometry args={[0.68, 2, 38.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={new Vector3(-0.71, -4.5, 0)}>
        <boxGeometry args={[0.68, 1, 38.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
    </mesh>
  );
};

export default EndWall;
