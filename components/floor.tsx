import React, { useState } from "react";

// Define expected props for Floor component
interface FloorProps {
  width: number;
  depth?: number; // Optional depth property
  material: string;
  positionY: number; // Accept a dynamic Y position to control the floor height
}

const Floor: React.FC<FloorProps> = ({ width, depth = 8, material, positionY }) => {
  return (
    <mesh position={[0, positionY, 0]}>
      <planeGeometry args={[width, depth]} />
      <meshStandardMaterial color={material === "marble" ? "white" : "gray"} />
    </mesh>
  );
};

const Floors: React.FC = () => {
  const [floors, setFloors] = useState<number[]>([0]); // Initialize with one floor at y=0

  // Function to add a new floor
  const addFloor = () => {
    setFloors((prevFloors) => [...prevFloors, prevFloors.length * 8]); // Increment the position for each new floor
  };

  return (
    <div>
      {/* Button to add another floor */}
      <button onClick={addFloor} style={{ marginBottom: "10px" }}>
        Add Another Floor
      </button>

      {/* Render all the floors dynamically */}
      {floors.map((positionY, index) => (
        <Floor key={index} width={10} material="marble" positionY={positionY} />
      ))}
    </div>
  );
};

export default Floors;
