// src/pages/HomePage.tsx
import Home from "@/components/mainView";
import AboutMe from "@/components/aboutMe";
import Work from "@/components/work";
import ContactMe from "@/components/contactMe";
import DividerLine from "@/shared/DividerLine";
import { Box, useTheme } from "@mui/material";
import { SelectedPage } from "@/shared/types";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const HomePage = ({ setSelectedPage }: Props) => {
  const theme = useTheme();

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
      <Home setSelectedPage={setSelectedPage} />
      <AboutMe setSelectedPage={setSelectedPage} />
      <DividerLine />
      {/* modify this */}
      <Work setSelectedPage={setSelectedPage} />
      <DividerLine />
      <ContactMe setSelectedPage={setSelectedPage} />
    </Box>
  );
};

export default HomePage;
