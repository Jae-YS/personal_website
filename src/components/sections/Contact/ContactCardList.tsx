import { Box, Button, Theme, useMediaQuery } from "@mui/material";
import ContactCard from "./ContactCard";

const ContactCardList = ({ theme }: { theme: Theme }) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        justifyContent: "flex-start",
        flexShrink: 0,
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
        </>
      )}

      <Button
        variant="outlined"
        href="/Jae_Young_Seo_Resume.pdf"
        target="_blank"
        sx={{
          alignSelf: "flex-start",
          fontWeight: 600,
          mt: 1,
          px: 2,
          py: 1,
          fontSize: "0.8rem",
          borderRadius: 2,
          borderColor: theme.palette.primary.main,
          color: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        }}
      >
        View My Resume
      </Button>
    </Box>
  );
};

export default ContactCardList;
