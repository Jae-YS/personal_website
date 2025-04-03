import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
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

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B66',
    },
    secondary: {
      main: '#FFC132', 
      light: '#FFCD5B', 
    },
    grey: {
      100: '#DFCCCC', 
      500: '#5E0000',  
    },
    customColors: {
      grey20: '#F8F4EB',   
      primary100: '#FFE1E0', 
    },
    background: {
      default: '#f7f6f2',
    }
  },
  typography: {
    fontFamily: '"DM Sans", "sans-serif"',
    fontWeightRegular: 400,
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
