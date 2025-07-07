import { Box, useTheme } from "@mui/material";
import Hero from "@/components/sections/Hero/Hero";
import AboutMe from "@/components/sections/AboutMe/AboutMe";
// import Work from "@/components/Projects/Projects";
import ContactMe from "@/components/sections/Contact/ContactMe";
import DividerLine from "@/components/shared/DividerLine";

const HomePage = () => {
  const theme = useTheme();

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
      <Hero />
      <Box
        id="aboutme"
        sx={{
          backgroundColor: theme.palette.customColors.grey20,
          transition: "background-color 0.3s ease",
        }}
      >
        <AboutMe />
      </Box>
      <DividerLine />
      {/* <Work setSelectedPage={setSelectedPage} /> */}
      <DividerLine />
      <ContactMe />
    </Box>
  );
};

export default HomePage;
