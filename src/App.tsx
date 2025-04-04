import { useEffect, useState } from "react";
import { useTheme } from "@mui/material";
import Navbar from "@/components/navbar";
import Home from "./components/home";
import AboutMe from "./components/aboutMe";
import ContactMe from "./components/contactMe";
import Footer from "./components/footer";
import { SelectedPage } from "./shared/types";
import { Box } from "@mui/material";

function App() {
  const theme = useTheme();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      <Home setSelectedPage={setSelectedPage} />
      <AboutMe setSelectedPage={setSelectedPage} />

      <ContactMe setSelectedPage={setSelectedPage} />
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </Box>
  );
}

export default App;
