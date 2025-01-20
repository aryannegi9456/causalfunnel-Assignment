import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";

const Header = () => (
  <AppBar
    position="fixed"
    color="primary"
    sx={{
      width: "100%",
      top: 0,
      left: 0,
      right: 0,
      padding: "1px 0", 
    }}
  >
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center", 
        alignItems: "center", 
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", letterSpacing: "2px" }}>
        Quiz App
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
