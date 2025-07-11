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

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => alert("Message sent!"),
        (error: { text: string }) => alert("Failed to send: " + error.text)
      );
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} style={{ width: "100%" }}>
      <Paper
        sx={{
          boxShadow: "none",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          p: 2,
        }}
      >
        <Typography
          variant="h6"
          fontSize="1rem"
          fontWeight={600}
          mb={1}
          textTransform="uppercase"
        >
          Contact
        </Typography>

        <Stack spacing={{ xs: 3, md: 4 }}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <TextField
              label="Name"
              name="name"
              required
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              required
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
          </Stack>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={3}>
            <TextField
              label="Phone"
              name="phone"
              required
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
            <TextField
              label="Subject"
              name="subject"
              required
              fullWidth
              variant="standard"
              sx={textFieldStyle}
            />
          </Stack>

          <TextField
            label="Message"
            name="message"
            required
            fullWidth
            multiline
            rows={2}
            variant="standard"
            sx={textFieldStyle}
          />

          <Button
            type="submit"
            fullWidth
            variant="outlined"
            sx={{
              px: 2,
              py: 1,
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "none",
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
            Send to Me!
          </Button>
        </Stack>
      </Paper>
    </form>
  );
};

export default ContactForm;
