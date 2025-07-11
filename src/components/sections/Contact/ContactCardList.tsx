import { Box, Button, Chip, Stack, Theme, useMediaQuery } from "@mui/material";
import ContactCard from "./ContactCard";
import DownloadIcon from "@mui/icons-material/Download";
import SocialIcon from "@/components/shared/SocialIcon";
import { LinkedIn, GitHub } from "@mui/icons-material";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import { useRef } from "react";

const ContactCardList = ({ theme }: { theme: Theme }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const cardRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  useScrollFadeIn(cardRef);

  return (
    <Box
      ref={cardRef}
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: { xs: 3, md: 4 },
      }}
    >
      <Chip
        label="AVAILABLE FOR WORK"
        sx={{
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.background.default,
          fontWeight: 600,
          letterSpacing: 0.5,
          width: "fit-content",
          px: 2,
          py: 1,
        }}
      />

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: 2, md: 3 },
        }}
      >
        {isSmallScreen ? (
          <ContactCard
            label="Contact"
            value={
              <>
                <Box>(518) 650-5837</Box>
                <Box
                  component="a"
                  href="mailto:jae.jy.seo@gmail.com"
                  style={{ color: theme.palette.primary.main }}
                >
                  jae.jy.seo@gmail.com
                </Box>
              </>
            }
          />
        ) : (
          <>
            <ContactCard label="Phone" value="(518) 650-5837" />
            <ContactCard
              label="Email"
              value="jae.jy.seo@gmail.com"
              href="mailto:jae.jy.seo@gmail.com"
            />

            <Stack direction="row" spacing={2} sx={{ mt: 1 }}>
              <SocialIcon
                href="https://www.linkedin.com/in/jae-young-seo/"
                icon={<LinkedIn sx={{ fontSize: 32 }} />}
                color="#0A66C2"
              />
              <SocialIcon
                href="https://github.com/Jae-YS"
                icon={<GitHub sx={{ fontSize: 32 }} />}
              />
            </Stack>
          </>
        )}

        <Box sx={{ mt: { xs: 2.5, md: 3 } }}>
          <Button
            variant="outlined"
            href="/Jae_Young_Seo_Resume.pdf"
            target="_blank"
            sx={{
              fontWeight: 600,
              px: 2,
              py: 1,
              fontSize: "0.8rem",
              borderRadius: 2,
              borderColor: theme.palette.primary.main,
              color: theme.palette.primary.main,
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.getContrastText(
                  theme.palette.primary.main
                ),
              },
            }}
          >
            <DownloadIcon fontSize="small" sx={{ mr: 1 }} />
            View My Resume
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ContactCardList;
