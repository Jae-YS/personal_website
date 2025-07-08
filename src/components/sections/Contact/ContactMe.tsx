import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  Paper,
  Stack,
  Theme,
} from "@mui/material";
import { useRef } from "react";
import ContactCard from "@/components/sections/Contact/ContactCard";
import emailjs from "@emailjs/browser";
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
  const formRef = useRef<HTMLFormElement>(null);
  const theme = useTheme();

  const textFieldStyle = (theme: Theme) => ({
    input: { color: theme.palette.text.primary },
    label: { color: theme.palette.text.secondary },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme.palette.divider,
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: theme.palette.primary.main,
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message sent!"),
        (error) => alert("Failed to send: " + error.text)
      );
  };

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
      <Box
        ref={introRef}
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          px: { xs: 2, md: 4 },
        }}
      >
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Let's get in touch
        </Typography>
        <Typography variant="body1" fontWeight={500}>
          Don't be afraid to say hello! I'm always open to opportunities and
          collaborations.
        </Typography>
      </Box>

      <Box
        ref={mainContentRef}
        sx={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: { xs: 2, md: 6 },
          opacity: 0,
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={8}
          sx={{ width: "100%", maxWidth: "1400px" }}
        >
          <Box flex={1} display="flex" flexDirection="column" gap={3}>
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
              View My Resume
            </Button>
          </Box>

          <form ref={formRef} onSubmit={handleSubmit} style={{ flex: 1 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 3, sm: 4 },
                backgroundColor:
                  theme.palette.mode === "dark"
                    ? "#121212"
                    : theme.palette.customColors.grey20,
                color: theme.palette.text.primary,
              }}
            >
              <Typography
                variant="h6"
                fontWeight={700}
                mb={3}
                sx={{ textTransform: "uppercase", letterSpacing: 1 }}
              >
                Contact
              </Typography>

              <Stack spacing={2}>
                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Name"
                    name="name"
                    fullWidth
                    variant="standard"
                    sx={textFieldStyle(theme)}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    fullWidth
                    variant="standard"
                    sx={textFieldStyle(theme)}
                  />
                </Stack>

                <Stack direction="row" spacing={2}>
                  <TextField
                    label="Phone"
                    name="phone"
                    fullWidth
                    variant="standard"
                    sx={textFieldStyle(theme)}
                  />
                  <TextField
                    label="Subject"
                    name="subject"
                    fullWidth
                    variant="standard"
                    sx={textFieldStyle(theme)}
                  />
                </Stack>

                <TextField
                  label="Message"
                  name="message"
                  fullWidth
                  multiline
                  rows={4}
                  variant="standard"
                  sx={textFieldStyle(theme)}
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="outlined"
                  sx={{
                    mt: 3,
                    py: 1.5,
                    fontWeight: 600,
                    textTransform: "none",
                    borderRadius: 0,
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
                  Send to us
                </Button>
              </Stack>
            </Paper>
          </form>
        </Stack>
      </Box>
    </Box>
  );
};

export default ContactMe;
