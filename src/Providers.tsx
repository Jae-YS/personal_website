import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme/theme";
import { Analytics } from "@vercel/analytics/react";
import { BrowserRouter } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Providers: React.FC<{ children: React.ReactNode }> = ({
  children,
}: Props) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
        <Analytics />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
