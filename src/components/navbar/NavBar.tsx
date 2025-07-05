import { useEffect, useRef, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import NavLinks from "@/components/Navbar/NavLinks";
import FloatingSidebar from "@/components/Navbar/FloatingSideBar";
import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const theme = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (!navbarRef.current) return;

      if (scrollY === 0) {
        gsap.to(navbarRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
          pointerEvents: "auto",
        });
        setShowSidebar(false);
      } else {
        // Show sidebar + hide navbar
        gsap.to(navbarRef.current, {
          y: -100,
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
          pointerEvents: "none",
        });

        setShowSidebar(true);

        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
          setShowSidebar(false);
        }, 1000); // hide sidebar after 1s idle
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <div
        ref={navbarRef}
        id="navbar"
        style={{ position: "fixed", width: "100%", zIndex: 1300 }}
      >
        <AppBar
          position="fixed"
          elevation={4}
          sx={{
            bgcolor: theme.palette.background.default,
            color: theme.palette.text.primary,
            py: isAboveMediumScreens ? 1 : 0.75,
          }}
        >
          <Toolbar
            sx={{
              maxWidth: "83.3333%",
              mx: "auto",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              <Typography variant="h5">JYS</Typography>
            </Link>

            {isAboveMediumScreens ? (
              <NavLinks
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
                direction="row"
                spacing={5}
              />
            ) : (
              <IconButton
                onClick={() => setIsMenuToggled((prev) => !prev)}
                sx={{
                  backgroundColor: isMenuToggled ? "#f0f0f0" : "#636363",
                  borderRadius: "50%",
                  p: 1,
                }}
              >
                {isMenuToggled ? (
                  <XMarkIcon style={{ height: 24, width: 24, color: "#000" }} />
                ) : (
                  <Bars3Icon style={{ height: 24, width: 24, color: "#fff" }} />
                )}
              </IconButton>
            )}
          </Toolbar>
        </AppBar>
      </div>
      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={!isAboveMediumScreens && isMenuToggled}
        onClose={() => setIsMenuToggled(false)}
        PaperProps={{
          sx: {
            width: "100%",
            bgcolor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: 4,
          },
        }}
      >
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="column"
          spacing={4}
          onLinkClick={() => setIsMenuToggled(false)}
        />
      </Drawer>
      {isAboveMediumScreens && showSidebar && <FloatingSidebar />}
    </>
  );
};

export default Navbar;
