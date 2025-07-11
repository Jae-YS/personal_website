import { forwardRef } from "react";
import { Box, Theme } from "@mui/material";
import ContactCardList from "@/components/sections/Contact/ContactCardList";
import ContactForm from "@/components/sections/Contact/ContactForm";

const ContactContent = forwardRef<HTMLDivElement, { theme: Theme }>(
  ({ theme }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          py: { xs: 4, sm: 6 },
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: "1400px",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: { xs: 3, md: 4 },
            px: { xs: 2, sm: 3 },
            py: { xs: 3, sm: 4 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", md: "35%" },
              flexShrink: 0,
            }}
          >
            <ContactCardList theme={theme} />
          </Box>
          <Box
            sx={{
              width: "1px",
              bgcolor: theme.palette.divider,
              mx: 3,
              display: { xs: "none", md: "block" },
            }}
          />

          <Box
            sx={{
              width: { xs: "100%", md: "65%" },
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <ContactForm theme={theme} />
          </Box>
        </Box>
      </Box>
    );
  }
);

export default ContactContent;
