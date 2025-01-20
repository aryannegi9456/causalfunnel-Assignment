import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
import { deepPurple, teal } from "@mui/material/colors";


const theme = createTheme({
  palette: {
    primary: {
      main: deepPurple[500],
    },
    secondary: {
      main: teal[500],
    },
    background: {
      default: "#f4f4f4", 
      paper: "#ffffff", 
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h6: {
      fontWeight: 700,
    },
    body1: {
      color: "#333",
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          marginBottom: "20px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
        },
      },
    },
  },
});

export default theme;