import { Box, Typography, Stack, Link as MuiLink } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import DividerLine from "@/shared/DividerLine";
import NavLinks from "@/components/navbar/NavLinks";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#f7f6f2",
        py: 6,
        fontFamily: `'Georgia', serif`,
      }}
    >
      {/* Centering Wrapper */}
      <Box
        sx={{
          maxWidth: "1200px",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        <DividerLine sx={{ width: "100vw", mx: 0 }} />

        {/* Logo Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "4rem", md: "8rem" },
            fontWeight: 500,
            letterSpacing: "0.05em",
            mt: 4,
          }}
        >
          AVA NOVAK
        </Typography>

        {/* Navigation */}
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="row"
          spacing={4}
          sx={{ mt: 4, px: 2, fontSize: { xs: "0.875rem", md: "1rem" } }}
        />

        {/* Social Icon */}
        <Box sx={{ mt: 6, mb: 2 }}>
          <MuiLink href="#" color="inherit" underline="none">
            <InstagramIcon sx={{ fontSize: 24 }} />
          </MuiLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
