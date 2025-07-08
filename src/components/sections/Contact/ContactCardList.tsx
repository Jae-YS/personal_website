import { Box, Button, Theme } from "@mui/material";
import ContactCard from "./ContactCard";

const ContactCardList = ({ theme }: { theme: Theme }) => (
  <Box
    flex={{ xs: 1, md: 1 }}
    sx={{
      display: "flex",
      flexDirection: "column",
      gap: 3,
      minWidth: { md: "300px", lg: "350px" },
    }}
  >
    <ContactCard label="Phone" value="(518) 650-5837" />
    <ContactCard
      label="Email"
      value="jae.jy.seo@gmail.com"
      href="mailto:jae.jy.seo@gmail.com"
    />
    <Button
      variant="outlined"
      href="/Jae_Young_Seo_Resume.pdf"
      target="_blank"
      sx={{
        mt: 2,
        alignSelf: "flex-start",
        fontWeight: 600,
        px: 4,
        py: 1.5,
        borderRadius: 2,
        fontSize: { xs: "0.9rem", sm: "1rem" },
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

export default ContactCardList;
