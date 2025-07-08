import { useRef, useState, useMemo } from "react";
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
import NavLinks from "@/components/layout/Navbar/NavLinks";
import type { WithSelectedPage } from "@/types";
import { useNavbarInitAndRouting } from "@/hooks/useNavbarInitAndRouting";
import { useSectionProgress } from "@/hooks/useSectionProgress";
import Link from "@/components/layout/Navbar/Link";

const Navbar = ({ selectedPage, setSelectedPage }: WithSelectedPage) => {
  const sectionIds = useMemo(
    () => ["home", "aboutme", "myprojects", "contactme"],
    []
  );
  const sectionProgress = useSectionProgress(sectionIds);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const theme = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useNavbarInitAndRouting(navbarRef, setSelectedPage);

  const isDark = theme.palette.mode === "dark";
  const iconColor = isDark
    ? theme.palette.common.white
    : theme.palette.common.black;

  return (
    <>
      <AppBar
        ref={navbarRef}
        position="fixed"
        elevation={0}
        sx={{
          backdropFilter: "blur(12px)",
          backgroundColor: isDark
            ? "rgba(20, 20, 20, 0.7)"
            : "rgba(255, 255, 255, 0.7)",
          borderBottom: `1px solid ${isDark ? "#222" : "rgba(0, 0, 0, 0.08)"}`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          color: theme.palette.text.primary,
          transition: "background-color 0.3s ease",
          zIndex: 3,
          height: { xs: 56, sm: 64 },
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            width: "100%",
            mx: "auto",
            minHeight: { xs: 56, sm: 64 },
            px: { xs: 2, sm: 4 },
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            page="Home"
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: 900,
                fontSize: "1.5rem",
                color: theme.palette.primary.main,
                letterSpacing: "2px",
                fontFamily: "monospace",
                cursor: "pointer",
                userSelect: "none",
              }}
            >
              JYS
            </Typography>
          </Link>

          {isAboveMediumScreens ? (
            <NavLinks
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              sectionProgress={sectionProgress}
              direction="row"
              spacing={5}
            />
          ) : (
            <IconButton
              onClick={() => setIsMenuToggled((prev) => !prev)}
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
                borderRadius: "50%",
                p: 1.25,
                height: 40,
                width: 40,
              }}
            >
              {isMenuToggled ? (
                <XMarkIcon
                  style={{ height: 24, width: 24, color: iconColor }}
                />
              ) : (
                <Bars3Icon
                  style={{ height: 24, width: 24, color: iconColor }}
                />
              )}
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={!isAboveMediumScreens && isMenuToggled}
        onClose={() => setIsMenuToggled(false)}
        slotProps={{
          paper: {
            sx: {
              width: "100%",
              maxWidth: 320,
              bgcolor: theme.palette.background.default,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              zIndex: 2,
              pt: 10,
              pb: 4,
              px: 3,
              boxShadow: "0px 4px 12px rgba(0,0,0,0.2)",
            },
          },
        }}
      >
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="column"
          sectionProgress={sectionProgress}
          spacing={4}
          onLinkClick={() => setIsMenuToggled(false)}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
