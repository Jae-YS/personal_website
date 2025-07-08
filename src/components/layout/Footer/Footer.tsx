import { Box, Typography, useTheme } from "@mui/material";
import DividerLine from "@/components/shared/DividerLine";
import NavLinks from "@/components/layout/Navbar/NavLinks";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
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
        py: { xs: 6, md: 10 },
      }}
    >
      <DividerLine sx={{ width: "100%", mx: 0 }} />

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
        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: 3,
            justifyContent: "center",
          }}
        >
          <a
            href="https://github.com/Jae-YS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ color: theme.palette.text.primary }}
          >
            <GitHubIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/jae-young-seo/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            style={{ color: theme.palette.text.primary }}
          >
            <LinkedInIcon fontSize="large" />
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
