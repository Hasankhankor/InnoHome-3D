import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  IconButton,
  MenuItem,
  Drawer,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";  // Importing Image component
import MODELS from "../lib/models";

const NavBar = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleItemClick = (home: string) => {
    router.push(`/homes/${home}`);
    setAnchorEl(null);
  };

  return (
    <AppBar
      sx={{
        position: "absolute",
        width: "calc(100% - 2rem)",
        top: "1rem",
        left: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: "1rem",
        padding: "0.5rem 1rem",
        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
        boxShadow: "8px 8px 15px #bcbcbc, -8px -8px 15px #ffffff",
        color: "#333",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-5px)",
        },
      }}
    >
      {/* Replace img with next/image */}
      <Image
        src="https://ik.imagekit.io/os33grffu/Stylized%203D%20Gray%20House%20With%20Angular%20Roof%20Design.png?updatedAt=1734541547563"
        alt="Logo"
        width={50}  // Define width
        height={50} // Define height
        objectFit="contain" // Ensures the logo fits within the box
      />
      <Typography
        variant="h5"
        fontWeight={700}
        marginLeft={{ xs: "1rem", sm: "1.5rem" }}
        sx={{
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
        }}
      >
        <Link href="/">InnoHome 3D</Link>
      </Typography>
      <Toolbar>
        {isMobile ? (
          <IconButton
            role="button"
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{
              margin: 0,
              padding: "0.5rem",
              backgroundColor: "#fff",
              borderRadius: "50%",
              boxShadow: "4px 4px 8px #bcbcbc, -4px -4px 8px #ffffff",
              "&:hover": {
                backgroundColor: "#f5f5f5",
                transform: "scale(1.1)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Button
            size="large"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuClick}
            sx={{
              padding: "0.5rem 1rem",
              marginRight: "1rem",
              background: "linear-gradient(145deg, #f0f0f0, #d6d6d6)",
              boxShadow: "6px 6px 12px #bcbcbc, -6px -6px 12px #ffffff",
              borderRadius: "0.5rem",
              "&:hover": {
                background: "linear-gradient(145deg, #d6d6d6, #f0f0f0)",
                transform: "scale(1.05)",
              },
              transition: "all 0.3s ease-in-out",
            }}
          >
            Models
          </Button>
        )}
        <Drawer
          anchor="right"
          open={open}
          onClose={handleMenuClose}
          sx={{
            "& .MuiDrawer-paper": {
              width: "70%",
              background: "linear-gradient(145deg, #ffffff, #f0f0f0)",
              boxShadow: "8px 8px 15px #bcbcbc, -8px -8px 15px #ffffff",
              padding: "1rem",
              animation: "fadeIn 0.5s ease",
            },
          }}
        >
          {MODELS.map((model) => (
            <MenuItem
              key={model.slug}
              onClick={() => handleItemClick(model.slug)}
              sx={{
                color: "#333",
                padding: "1rem 3rem",
                "&:hover": {
                  background: "#f5f5f5",
                  transform: "scale(1.05)",
                  transition: "transform 0.2s ease-in-out",
                },
              }}
            >
              {model.name}
            </MenuItem>
          ))}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
