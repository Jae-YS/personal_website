import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import ScrollToTop from "@/hooks/useScrollToTop";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { lightTheme, darkTheme } from "@/theme/theme";
import { useState } from "react";

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <ThemeProvider theme={mode === "light" ? lightTheme : darkTheme}>
      <CssBaseline />

      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout mode={mode} setMode={setMode} />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
