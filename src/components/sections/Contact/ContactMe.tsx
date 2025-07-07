import {
  Box,
  Typography,
  useTheme,
  Button,
  TextField,
  Divider,
  Paper,
  Stack,
} from "@mui/material";
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactInfoSection from "@/components/sections/Contact/ContactInfoSection";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      gsap.from(".social-icon", {
        opacity: 0,
        y: 20,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      id="contactme"
      sx={{
        backgroundColor: theme.palette.customColors.grey20,
        color: theme.palette.text.primary,
        px: { xs: 3, md: 10 },
        py: { xs: 6, md: 10 },
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Typography variant="h3" fontWeight={700} textAlign="center" mb={2}>
        Let's Work Together
      </Typography>

      <Typography
        variant="body1"
        textAlign="center"
        maxWidth="600px"
        mx="auto"
        mb={4}
      >
        Currently open to freelance and full-time roles. Send me a message below
        or connect through social.
      </Typography>

      <Box textAlign="center" mb={4}>
        <Button
          variant="outlined"
          href="/resume.pdf"
          target="_blank"
          sx={{
            fontWeight: 600,
            px: 4,
            py: 1.5,
            borderRadius: 3,
            borderColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.main,
              color: "#fff",
            },
          }}
        >
          Download Resume
        </Button>
      </Box>

      {/* Combined contact + social section */}
      <Box mb={6}>
        <ContactInfoSection />
      </Box>

      {/* Message Form */}
      <Paper
        elevation={2}
        sx={{
          p: { xs: 4, sm: 6 },
          maxWidth: 600,
          mx: "auto",
          borderRadius: 4,
          backgroundColor: theme.palette.background.default,
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Send a Message
        </Typography>
        <Divider sx={{ mb: 3 }} />
        <Stack spacing={2}>
          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField label="Email" variant="outlined" fullWidth required />
          <TextField
            label="Message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            required
          />
          <Button
            variant="contained"
            size="large"
            sx={{ alignSelf: "flex-start" }}
          >
            Send
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
};

export default ContactMe;
