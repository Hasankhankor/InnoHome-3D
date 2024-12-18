import { useTexture } from "@react-three/drei";
import Wall from "./wall";
import { COLORS } from "./colors";
import { TEXTURES } from "./materials";
import { MaterialProps } from "@react-three/fiber";

interface ModuleProps {
  color: string;
  position: [number, number, number];
  envelopeOn: boolean;
  floorMaterial: string;
}

const Module = ({
  color,
  position,
  envelopeOn,
  floorMaterial,
}: ModuleProps) => {
  const texture = useTexture(TEXTURES[floorMaterial]);

  const floorMaterialProps = {
    map: Array.isArray(texture) ? texture[0] : texture, // Use the first texture if an array
  };

  return (
    <mesh position={position}>
      {envelopeOn && <Wall color={color} position={[0, 0.75, 20]} />}
      <mesh position={[0, -4.5, 0]} castShadow receiveShadow>
        <boxGeometry args={[7.75, 1, 40]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>

      <mesh position={[0, -4, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[39, 0.1, 8]} />
        {/* Apply floor material */}
        <meshStandardMaterial
          map={floorMaterialProps.map}
          metalness={0.4}
          roughness={0.6}
        />
      </mesh>

      <mesh position={[0, 3.9, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[39, 0.1, 8]} />
        <meshStandardMaterial
          color={COLORS.gyp}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[3.625, -0.2, 19.75]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[-3.625, -0.05, 19.75]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>

      <mesh position={[0, -0.05, 19.5]} receiveShadow>
        <boxGeometry args={[8, 7.9, 0.05]} />
        <meshStandardMaterial
          color={COLORS.gyp}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>
      <mesh position={[0, -0.05, -19.5]} receiveShadow>
        <boxGeometry args={[8, 7.9, 0.05]} />
        <meshStandardMaterial
          color={COLORS.gyp}
          metalness={0.1}
          roughness={0.1}
        />
      </mesh>

      <mesh position={[3.625, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[-3.625, -0.05, 0]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>

      <mesh position={[3.625, -0.05, -19.75]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[-3.625, -0.05, -19.75]} castShadow receiveShadow>
        <boxGeometry args={[0.5, 7.9, 0.5]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 4.4, 0]} castShadow receiveShadow>
        <boxGeometry args={[7.75, 1, 40]} />
        <meshStandardMaterial color={color} metalness={0.5} roughness={0.5} />
      </mesh>
      {envelopeOn && <Wall color={color} position={[0, 0.75, -20]} />}
    </mesh>
  );
};

export default Module;
