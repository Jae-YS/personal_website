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
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "stretch",
          px: { xs: 2, sm: 3 },
          py: { xs: 3, sm: 4 },
          overflow: "hidden",
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            px: { xs: 2, sm: 3 },
            py: { xs: 3, sm: 4 },
            backgroundColor: theme.palette.background.default,
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <ContactCardList theme={theme} />
          </Box>

          <Box
            sx={{
              flex: 1,
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
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
