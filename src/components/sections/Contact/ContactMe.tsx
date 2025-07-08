import { Box, useTheme } from "@mui/material";
import { useRef } from "react";
import ContactIntro from "./ContactIntro";
import ContactContent from "./ContactContent";
import { useIntroToMainTransition } from "@/hooks/useIntroToMain";

const ContactMe = () => {
  const sectionRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const introRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const mainContentRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const theme = useTheme();

  useIntroToMainTransition(sectionRef, introRef, mainContentRef);

  return (
    <Box
      ref={sectionRef}
      id="contactme"
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <ContactIntro ref={introRef} />
      <ContactContent ref={mainContentRef} theme={theme} />
    </Box>
  );
};

export default ContactMe;
