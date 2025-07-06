import { Box, Typography, useTheme } from "@mui/material";
import DividerLine from "@/components/shared/DividerLine";
import NavLinks from "@/components/layout/Navbar/NavLinks";
import { SelectedPage } from "@/components/shared/types";

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
        bgcolor: theme.palette.customColors.grey20,
        color: theme.palette.text.primary,
        py: { xs: theme.spacing(6), md: theme.spacing(10) },
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
          px: theme.spacing(2),
        }}
      >
        {/* Logo Text */}
        <Typography
          variant="h1"
          sx={{
            fontSize: {
              xs: theme.typography.h5.fontSize,
              sm: `calc(${theme.typography.h5.fontSize} * 1.4)`,
              md: theme.typography.h1.fontSize,
            },
            fontWeight: theme.typography.h1.fontWeight,
            letterSpacing: "0.05em",
            mt: theme.spacing(4),
          }}
        >
          JAE YOUNG SEO
        </Typography>

        {/* Navigation */}
        <NavLinks
          selectedPage={selectedPage}
          setSelectedPage={setSelectedPage}
          direction="row"
          spacing={4}
          sx={{
            mt: theme.spacing(4),
            px: theme.spacing(2),
            justifyContent: "center",
          }}
        />
      </Box>
    </Box>
  );
};

export default Footer;
