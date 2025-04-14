// theme/theme.ts
import { createTheme } from "@mui/material/styles";

// Extend custom palette if needed
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

// theme.palette.primary.main
//           : theme.palette.text.primary,



const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6B66",
    },
    secondary: {
      main: "#FFC132",
      light: "#FFCD5B",
    },
    text: {
      secondary: "#000",
    },
    grey: {
      100: "#DFCCCC",
      500: "#8C8C8C"
    },
    customColors: {
      grey20: "#F8F4EB",
      primary100: "#FFE1E0",
    },
    background: {
      default: "#F7F6F2",
    },
  },

  typography: {
    fontFamily: '"Playfair Display", serif',
    h1: {
      fontSize: "clamp(1.5rem, 5vw, 3rem)",
      fontWeight: 600,
    },
    h5: {
      fontWeight: 400,
      fontSize: "2rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },

  shape: {
    borderRadius: 8,
  },

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
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Playfair Display", serif',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#FFE1E0",
        },
      },
    },
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
});

export default theme;
