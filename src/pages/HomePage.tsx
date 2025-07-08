import { Box, useTheme } from "@mui/material";
import Hero from "@/components/sections/Hero/Hero";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
import ContactMe from "@/components/sections/Contact/ContactMe";
import Projects from "@/components/sections/Projects/Projects";
import DividerLine from "@/components/shared/DividerLine";

const HomePage = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        fontFamily: theme.typography.fontFamily,
        color: theme.palette.text.primary,
      }}
    >
      <Hero />
      <DividerLine sx={{ my: 0, height: "1px" }} />

      <Box
        id="aboutme"
        sx={{
          backgroundColor: theme.palette.customColors.grey20,
          transition: "background-color 0.3s ease",
        }}
      >
        <AboutMe />
        <DividerLine sx={{ my: 0, height: "1px" }} />
      </Box>
      <Projects />
      <DividerLine sx={{ my: 0, height: "1px" }} />

      <ContactMe />
    </Box>
  );
};

export default HomePage;
