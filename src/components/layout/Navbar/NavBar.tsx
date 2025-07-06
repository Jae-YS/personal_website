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
import { SelectedPage } from "@/components/shared/types";
import { useNavbarAnimations } from "@/hooks/useNavbarAnimations";
import { useSectionProgress } from "@/hooks/useSectionProgress";
import Link from "./Link";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
  const sectionIds = useMemo(
    () => ["home", "aboutme", "projects", "contactme"],
    []
  );
  const sectionProgress = useSectionProgress(sectionIds);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const theme = useTheme();
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  useNavbarAnimations(navbarRef, setSelectedPage);

  const isDark = theme.palette.mode === "dark";
  const iconColor = isDark
    ? theme.palette.common.white
    : theme.palette.common.black;
  const iconBg = isMenuToggled
    ? theme.palette.customColors.grey20
    : isDark
    ? theme.palette.grey[700]
    : theme.palette.grey[500];

  return (
    <>
      {/* Top Navbar */}
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
          py: 0,
          transition: "background-color 0.3s ease",
          zIndex: 1300,
        }}
      >
        <Toolbar
          disableGutters
          sx={{
            maxWidth: "90%",
            mx: "auto",
            minHeight: "48px",
            px: 2,
            width: "100%",
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
                backgroundColor: iconBg,
                borderRadius: "50%",
                p: 1,
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

      {/* Mobile Drawer */}
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
              pt: 6,
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
