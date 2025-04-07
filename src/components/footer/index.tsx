import { Box, Typography, useTheme } from "@mui/material";
import DividerLine from "@/shared/DividerLine";
import NavLinks from "@/components/navbar/NavLinks";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: theme.palette.background.default,
        py: { xs: 6, md: 10 },
      }}
    >
      <DividerLine sx={{ width: "100vw", mx: 0 }} />
      <Box
        sx={{
          maxWidth: "100%",
          mx: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          px: 2,
        }}
      >
        {/* Logo Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "3rem", sm: "5rem", md: "8rem" },
            fontWeight: theme.typography.h1.fontWeight,
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
          sx={{
            mt: 4,
            px: 2,
            justifyContent: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
