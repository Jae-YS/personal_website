import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { SelectedPage } from "@/shared/types";
import { Box, Fade } from "@mui/material";
import BouncyText from "@/shared/BouncyText";
import gsap from "gsap";

type LayoutProps = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const Layout = ({ mode, setMode }: LayoutProps) => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [showSplash, setShowSplash] = useState(true);
  const splashRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (location.pathname === "/" && scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      gsap.to(splashRef.current, {
        opacity: 0,
        duration: 0.6,
        onComplete: () => setShowSplash(false),
      });
    }, 3200);

    return () => clearTimeout(timeout);
  }, []);

  if (showSplash) {
    return (
      <div
        ref={splashRef}
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          padding: "0 16px",
          textAlign: "center",
          backgroundColor: "#F7F6F2",
          opacity: 1,
        }}
      >
        <BouncyText text="Welcome to my website." />
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            height: "4px",
            backgroundColor: "#DFCCCC",
            borderRadius: "8px",
            overflow: "hidden",
            position: "relative",
            mt: 4,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              backgroundColor: "#FF6B66",
              position: "absolute",
              left: 0,
              top: 0,
              animation: "growBar 3.3s linear forwards",
            }}
          />
        </Box>
      </div>
    );
  }

  return (
    <Fade in={!showSplash} timeout={1000}>
      <Box>
        <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Outlet
          context={{
            selectedPage,
            setSelectedPage,
            mode,
            setMode,
            showSplash,
          }}
        />
        <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      </Box>
    </Fade>
  );
};

export default Layout;
