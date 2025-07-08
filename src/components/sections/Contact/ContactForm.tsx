import {
  Button,
  Paper,
  Stack,
  TextField,
  Theme,
  Typography,
} from "@mui/material";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ theme }: { theme: Theme }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const textFieldStyle = {
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
  };

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

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 2, sm: 4 },
          flex: 1,
          minWidth: { md: "400px" },
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
          mb={2}
          sx={{
            textTransform: "uppercase",
            letterSpacing: 1,
            fontSize: { xs: "1rem", sm: "1.2rem" },
          }}
        >
          Contact
        </Typography>

        <Stack spacing={{ xs: 1.5, sm: 2 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
            <TextField
              label="Email"
              name="email"
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <TextField
              label="Phone"
              name="phone"
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
            <TextField
              label="Subject"
              name="subject"
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
          </Stack>

          <TextField
            label="Message"
            name="message"
            fullWidth
            multiline
            rows={4}
            variant="standard"
            sx={textFieldStyle}
          />

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              mt: 3,
              py: { xs: 1.25, sm: 1.5 },
              fontWeight: 600,
              fontSize: { xs: "0.9rem", sm: "1rem" },
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
  );
};

export default ContactForm;
