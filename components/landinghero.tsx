import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Typography, useMediaQuery, Grid, Button, Box } from "@mui/material";
import Roof from "./roof";
import Module from "./module";
import EndWall from "./endwall";
import Foundation from "./foundation";
import Loader from "./loader";
import { COLORS } from "./colors";
import { motion } from "framer-motion";


type LandingHeroProps = {
  handleScroll: () => void;
};

const LandingHero = ({ handleScroll }: LandingHeroProps) => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const [showPakistaniHome, setShowPakistaniHome] = React.useState(false);

  const handleHomeClick = () => {
    setShowPakistaniHome(!showPakistaniHome);
  };

  return (
    <Grid
      container
      spacing={0}
      columns={12}
      alignItems={isMobile ? "flex-end" : "center"}
      justifyContent="center"
      width="100%"
      height="100vh"
      margin="0 auto"
      padding={isSmallScreen ? "1rem" : "2rem"}
    >
      {/* Text Section */}
      <Grid item xs={12} md={4}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            margin: isMobile ? "1rem" : "1rem 1rem 1rem 1.2rem",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <h1 className="text-7xl font-bold">
            Your vision, Our 3D Innovation
          </h1>

          <Typography
            variant="subtitle1"
            fontSize={isMobile ? "16px" : "20px"}
            style={{
              marginTop: "1rem",
              color: "#555",
              maxWidth: isMobile ? "90%" : "80%",
            }}
          >
            Experience the future of home design with our cutting-edge 3D models tailored to your needs.
          </Typography>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            <Button
              size="large"
              variant="outlined"
              onClick={handleScroll}
              style={{
                marginTop: isMobile ? "1rem" : "2rem",
                color: "#131414",
                border: "1px dashed #131414",
              }}
            >
              Select a model
            </Button>
          </motion.div>
        </motion.div>
      </Grid>

      {/* 3D Model Section */}
      <Grid item xs={12} md={8} alignSelf={isMobile ? "flex-start" : "center"}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          style={{
            height: isMobile ? "45vh" : "65vh",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Canvas camera={{ position: [60, 0, 60], fov: 30 }} shadows>
            <Suspense fallback={<Loader />}>
              <OrbitControls autoRotate maxPolarAngle={Math.PI / 2} enableZoom={false} />
              <ambientLight intensity={0.5} />
              <pointLight position={[100, 100, 20]} />
              <Stage
                intensity={0.4}
                environment="city"
                adjustCamera
                shadows={{
                  type: "accumulative",
                  color: COLORS.shadow,
                  opacity: 0.3,
                }}
              >
                <Roof position={[0, 5.25, 0]} color={COLORS.roof} width={7} />
                <EndWall position={[-3.5, 0, 0]} color={COLORS.grey} rotate={false} twoStory={false} />
                <Module position={[0, 0, 0]} color={COLORS.grey} envelopeOn floorMaterial="walnut" />
                <EndWall position={[3.5, 0, 0]} color={COLORS.grey} rotate twoStory={false} />
                <Foundation position={[0, -5.7, 0]} color={COLORS.foundation} width={7} />
              </Stage>
            </Suspense>
          </Canvas>
        </motion.div>
      </Grid>


      <Button
        size="large"
        variant="contained"
        onClick={handleHomeClick}
        style={{
          marginTop: "2rem",
          backgroundColor: "#131414",
          color: "#fff",
        }}
      >
        {showPakistaniHome ? "Hide Home Model" : "Show Pakistani Home Model"}
      </Button>
    </Grid>
  );
};

export default LandingHero;
