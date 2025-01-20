import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      textAlign: "center",
      py: 2,
      backgroundColor: "primary.main",
      color: "white",
    }}
  >
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} Quiz App. All rights reserved.
    </Typography>
  </Box>
);

export default Footer;
