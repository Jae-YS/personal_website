import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavLinks from "@/components/navbar/NavLinks";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  useTheme,
} from "@mui/material";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const theme = useTheme();

  return (
    <>
      <motion.div
        animate={{
          opacity: isAboveMediumScreens && isTopOfPage ? 0 : 1,
          y: isAboveMediumScreens && isTopOfPage ? -20 : 0,
          pointerEvents: isAboveMediumScreens && isTopOfPage ? "none" : "auto",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{
          position: "fixed",
          width: "100%",
          zIndex: 1300,
        }}
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
              width: "100%",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {/* Logo / Brand */}
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              <Typography variant="h5">AKN</Typography>
            </Link>

            {/* Navigation or Menu Icon */}
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
                  backgroundColor: isMenuToggled ? "#f0f0f0" : "#636363", // custom background when toggled
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    backgroundColor: isMenuToggled ? "#e0e0e0" : "black",
                  },
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
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={!isAboveMediumScreens && isMenuToggled}
        onClose={() => setIsMenuToggled(false)}
        PaperProps={{
          sx: {
            width: 250,
            bgcolor: theme.palette.background.default,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            pt: 2,
          },
        }}
      >
        {/* Navigation Links */}
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="column"
          spacing={3}
          pages={[
            { label: "Home", value: SelectedPage.Home, icon: <HomeIcon /> },
            {
              label: "About Me",
              value: SelectedPage.AboutMe,
              icon: <InfoIcon />,
            },
            { label: "Work", value: SelectedPage.Work, icon: <WorkIcon /> },
            {
              label: "Contact Me",
              value: SelectedPage.ContactMe,
              icon: <ContactMailIcon />,
            },
          ]}
          sx={{
            mt: isAboveMediumScreens ? 0 : theme.spacing(10),
            fontSize: "1.25rem",
            alignItems: "start",
          }}
          onLinkClick={() => setIsMenuToggled(false)}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
