import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
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

  return (
    <>
      <motion.div
        animate={{
          opacity: isAboveMediumScreens && isTopOfPage ? 0 : 1,
          y: isAboveMediumScreens && isTopOfPage ? -20 : 0,
          pointerEvents: isAboveMediumScreens && isTopOfPage ? "none" : "auto",
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        style={{ position: "fixed", width: "100%", zIndex: 1300 }}
      >
        <AppBar
          position="fixed"
          elevation={4}
          sx={{
            bgcolor: "#F7F6F2",
            color: "black",
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
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            >
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "serif",
                  fontWeight: 400,
                  cursor: "pointer",
                }}
              >
                AKN
              </Typography>
            </Link>
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
      </motion.div>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={!isAboveMediumScreens && isMenuToggled}
        onClose={() => setIsMenuToggled(false)}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
            width: 250,
            bgcolor: "primary.100",
          }}
        >
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
          onLinkClick={() => setIsMenuToggled(false)}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
