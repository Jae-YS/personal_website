import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "@/components/navbar/Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import NavLinks from "@/components/navbar/NavLinks";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Stack,
} from "@mui/material";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <>
      <AppBar
        position="fixed"
        elevation={isTopOfPage ? 0 : 4}
        sx={{
          bgcolor: isTopOfPage ? "transparent" : "#F7F6F2",
          color: isTopOfPage ? "black" : "black",
          boxShadow: isTopOfPage ? "none" : undefined,
          py: 1.5,
        }}
      >
        <Toolbar
          sx={{
            maxWidth: "83.3333%",
            width: "100%",
            mx: "auto",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* Logo / Brand */}
          {!isMenuToggled && (
            <Typography
              variant="h5"
              sx={{
                fontFamily: "serif",
                fontWeight: 400,
              }}
              onClick={() => setSelectedPage(SelectedPage.Home)}
              style={{ cursor: "pointer" }}
            >
              AKN
            </Typography>
          )}

          {/* Nav Links / Mobile Menu Icon */}
          {isAboveMediumScreens ? (
            <NavLinks
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              direction="row"
              spacing={4}
            />
          ) : (
            !isMenuToggled && (
              <IconButton
                onClick={() => setIsMenuToggled(true)}
                sx={{
                  backgroundColor: "secondary.main",
                  borderRadius: "50%",
                  p: 1,
                  "&:hover": {
                    backgroundColor: "secondary.light",
                  },
                }}
              >
                <Bars3Icon style={{ height: 24, width: 24, color: "#fff" }} />
              </IconButton>
            )
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={!isAboveMediumScreens && isMenuToggled}
        onClose={() => setIsMenuToggled(false)}
        PaperProps={{
          sx: {
            width: 300,
            bgcolor: "primary.100",
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "flex-end", p: 2 }}>
          <IconButton onClick={() => setIsMenuToggled(false)}>
            <XMarkIcon style={{ height: 24, width: 24, color: "#9CA3AF" }} />
          </IconButton>
        </Box>
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="column"
          spacing={3}
          sx={{ alignItems: "center", mt: 4, fontSize: "1.5rem" }}
          pages={["Home", "Projects", "About Me", "Contact Me"]}
          onLinkClick={() => setIsMenuToggled(false)}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
