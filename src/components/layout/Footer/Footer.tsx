import { Box, Typography, useTheme } from "@mui/material";
import NavLinks from "@/components/layout/Navbar/NavLinks";
import type { WithSelectedPage } from "@/types";

type Props = WithSelectedPage;

const Footer = ({ selectedPage, setSelectedPage }: Props) => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        my: { xs: 4, md: 6 },
        py: { xs: 6, md: 10 },
      }}
    >
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
            mt: 4,
          }}
        >
          JAE YOUNG SEO
        </Typography>

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
        <Typography
          variant="caption"
          sx={{ mt: 4, mb: 1, color: theme.palette.text.secondary }}
        >
          © {new Date().getFullYear()} Jae Young Seo. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
