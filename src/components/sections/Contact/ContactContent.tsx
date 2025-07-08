import { forwardRef } from "react";
import { Box, Stack, Theme } from "@mui/material";
import ContactCardList from "@/components/sections/Contact/ContactCardList";
import ContactForm from "@/components/sections/Contact/ContactForm";

const ContactContent = forwardRef<HTMLDivElement, { theme: Theme }>(
  ({ theme }, ref) => {
    return (
      <Box
        ref={ref}
        sx={{
          width: "100%",
          maxWidth: "1200px",
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
          mx: "auto",
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 4 }}
          sx={{
            width: "100%",
            alignItems: "stretch",
          }}
        >
          <ContactCardList theme={theme} />
          <ContactForm theme={theme} />
        </Stack>
      </Box>
    );
  }
);

export default ContactContent;
