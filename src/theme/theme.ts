import { createTheme, ThemeOptions } from "@mui/material/styles";


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


const sharedThemeConfig: Omit<ThemeOptions, "palette"> = {
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: { fontSize: "6rem", fontWeight: 600 },
    h5: { fontSize: "4rem", fontWeight: 400 },
    body1: { fontSize: "1rem" },
    button: { fontWeight: 600 },
  },
  shape: {
    borderRadius: 8,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 768,
      lg: 1060,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: "smooth",
        },
        "@keyframes growBar": {
          from: { transform: "scaleX(0)" },
          to: { transform: "scaleX(1)" },
        },
        "@keyframes pulseGlow": {
          "0%, 100%": {
            boxShadow: "0 0 8px rgba(46, 196, 182, 0.6)",
          },
          "50%": {
            boxShadow: "0 0 16px rgba(46, 196, 182, 0.9)",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
      variants: [], 
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#E6FCF9",
        },
      },
    },
  },
};


export const lightTheme = createTheme({
  ...sharedThemeConfig,
  palette: {
    mode: "light",
    background: { default: "#FFFFFF" },
    text: { primary: "#1A1A1A" },
    primary: { main: "#2EC4B6" },
    secondary: { main: "#FFD700" },
    customColors: {
      grey20: "#F5F5F4",
      primary100: "#E6FCF9",
    },
  },
} as ThemeOptions); 

export const darkTheme = createTheme({
  ...sharedThemeConfig,
  palette: {
    mode: "dark",
    background: { default: "#202020" },
    text: { primary: "#f0f0f0" },
    primary: { main: "#FFC132" },
    secondary: { main: "#2EC4B6" },
    customColors: {
      grey20: "#2A2A2A",
      primary100: "#3E2F17",
    },
  },
} as ThemeOptions); 
