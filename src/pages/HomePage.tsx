import { useOutletContext } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { SelectedPage } from "@/shared/types";

import Hero from "@/components/Hero/Hero";
import AboutMe from "@/components/AboutMe/AboutMe";
// import Work from "@/components/Projects/Projects";
// import ContactMe from "@/components/Contact/Contact";
import DividerLine from "@/shared/DividerLine";

const HomePage = () => {
  const theme = useTheme();

  const { setSelectedPage, mode, setMode } = useOutletContext<{
    setSelectedPage: (value: SelectedPage) => void;
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
  }>();

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.default,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        fontFamily: theme.typography.fontFamily,
      }}
    >
      <Hero
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Home}
        setMode={setMode}
        mode={mode}
      />
      <AboutMe setSelectedPage={setSelectedPage} />
      <DividerLine />
      {/* <Work setSelectedPage={setSelectedPage} />
      <DividerLine />
      <ContactMe setSelectedPage={setSelectedPage} /> */}
    </Box>
  );
};

export default HomePage;
