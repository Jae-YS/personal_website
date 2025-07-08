import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/layout/Navbar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import { SelectedPage } from "@/types";
import { Box, Fade } from "@mui/material";
import { useSplashFadeOut } from "@/hooks/useSplashFadeOut";
import SplashScreen from "@/components/sections/Loading/SplashScreen";
const SceneCanvasImport = () => import("@/components/animation/SceneCanvas");

type LayoutProps = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

const Layout = ({ mode, setMode }: LayoutProps) => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [showSplash, setShowSplash] = useState(true);
  const splashRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useEffect(() => {
    SceneCanvasImport();
  }, []);

  useSplashFadeOut(splashRef, setShowSplash, showSplash);

  if (showSplash) {
    return <SplashScreen ref={splashRef} />;
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
