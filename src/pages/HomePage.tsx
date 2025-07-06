import { useOutletContext } from "react-router-dom";
import { Box, useTheme } from "@mui/material";
import { SelectedPage } from "@/components/shared/types";
import Hero from "@/components/sections/Hero/Hero";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
// import Work from "@/components/Projects/Projects";
// import ContactMe from "@/components/Contact/Contact";
import DividerLine from "@/components/shared/DividerLine";

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
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary, // ensures inherited text color
      }}
    >
      <Hero
        setSelectedPage={setSelectedPage}
        selectedPage={SelectedPage.Home}
        setMode={setMode}
        mode={mode}
      />
      <Box
        id="aboutme"
        sx={{
          backgroundColor: theme.palette.customColors.grey20,
          transition: "background-color 0.3s ease",
        }}
      >
        <AboutMe setSelectedPage={setSelectedPage} />
      </Box>
      <DividerLine />
      {/* <Work setSelectedPage={setSelectedPage} />
      <DividerLine />
      <ContactMe setSelectedPage={setSelectedPage} /> */}
    </Box>
  );
};

export default HomePage;
