import React from "react";
import { Stack, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { motion } from "framer-motion";

const SocialIcon: React.FC<{ href: string; Icon: React.ElementType; color: string }> = ({ href, Icon, color }) => (
  <motion.a
    whileHover={{ scale: 1.2, rotate: 10 }}
    whileTap={{ scale: 0.9 }}
    href={href}
    target="_blank"
    rel="noreferrer"
    style={{ textDecoration: "none", color }}
  >
    <Icon style={{ fontSize: 30 }} />
  </motion.a>
);

const Footer: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        background: "linear-gradient(135deg, #131414, #2a2a2a)",
        padding: "1rem",
        borderRadius: "12px",
        color: "#ffffff",
        marginTop: "3rem",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.3)",
      }}
    >
      <Typography variant="body2" fontWeight={500}>
        Built by Hasan Tariq
      </Typography>
      <SocialIcon href="https://github.com/Hasankhankor/InnoHome-3D" Icon={GitHubIcon} color="#ffffff" />
      <SocialIcon href="https://www.linkedin.com/in/hasan-tariq" Icon={LinkedInIcon} color="#0077b5" />
      <SocialIcon href="https://twitter.com/hasan_tariq" Icon={TwitterIcon} color="#1da1f2" />
    </Stack>
  );
};

export default Footer;
