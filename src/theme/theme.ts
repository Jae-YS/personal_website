import { createTheme } from "@mui/material/styles";

// Extend custom palette types
declare module "@mui/material/styles" {
  interface Palette {
    customColors: {
      grey20: string;
      primary100: string;
    };
  }
  interface PaletteOptions {
    customColors?: {
      grey20: string;
      primary100: string;
    };
  }
}

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: { default: "#F7F6F2" },
    text: { primary: "#202020" },
    primary: { main: "#FF6B66" },
    secondary: { main: "#FFC132" },
    customColors: { grey20: "#F8F4EB", primary100: "#FFE1E0" },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#202020" },
    text: { primary: "#f0f0f0" },
    primary: { main: "#FFC132" },
    secondary: { main: "#FF6B66" },
    customColors: { grey20: "#2A2A2A", primary100: "#3A3A3A" },
  },
});

const theme = createTheme({
  palette: {
    primary: { main: "#FF6B66" },
    secondary: { main: "#FFC132", light: "#FFCD5B" },
    text: { secondary: "#000" },
    grey: { 100: "#DFCCCC", 500: "#8C8C8C" },
    customColors: { grey20: "#F8F4EB", primary100: "#FFE1E0" },
    background: { default: "#F7F6F2" },
  },
  typography: {
    h1: {
      fontSize: "6rem",
      fontWeight: 600,
      fontFamily: '"Inter", sans-serif',
    },
    h5: { fontWeight: 400, fontSize: "4rem" },
    body1: { fontSize: "1rem" },
    button: { fontWeight: 600 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 8,
        },
      },
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#000",
            color: "#FFF",
            "&:hover": {
              backgroundColor: "#000",
              color: "#FFF",
            },
          },
        },
      ],
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFE1E0",
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
          backgroundColor: "#F7F6F2",
        },
        "@keyframes growBar": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
        "@keyframes pulseGlow": {
          "0%, 100%": {
            boxShadow: "0 0 8px rgba(255, 107, 102, 0.6)",
          },
          "50%": {
            boxShadow: "0 0 16px rgba(255, 107, 102, 0.9)",
          },
        },
      },
    },
  },
  breakpoints: {
    values: { xs: 0, sm: 480, md: 768, lg: 1060, xl: 1536 },
  },
});

export default theme;
