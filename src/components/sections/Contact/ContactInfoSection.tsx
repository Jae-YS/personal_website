import {
  Box,
  Stack,
  Typography,
  useTheme,
  Paper,
  Link as MuiLink,
} from "@mui/material";
import {
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

const ContactInfoSection = () => {
  const theme = useTheme();

  const contactItems = [
    {
      label: "Email",
      value: "jae.jy.seo@gmail.com",
      href: "mailto:jae.jy.seo@gmail.com",
    },
    { label: "Phone", value: "(518) 650-5837" },
    {
      label: "GitHub",
      value: "github.com/Jae-YS",
      href: "https://github.com/Jae-YS",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/jaeyoungseo",
      href: "https://linkedin.com/in/jaeyoungseo",
    },
  ];

  const socialLinks = [
    {
      icon: <FaInstagram />,
      href: "https://instagram.com",
      label: "Instagram",
    },
    { icon: <FaTwitter />, href: "https://twitter.com", label: "Twitter" },
    {
      icon: <FaEnvelope />,
      href: "mailto:jae.jy.seo@gmail.com",
      label: "Email",
    },
    { icon: <FaGithub />, href: "https://github.com/Jae-YS", label: "GitHub" },
    {
      icon: <FaLinkedin />,
      href: "https://linkedin.com/in/jaeyoungseo",
      label: "LinkedIn",
    },
  ];

  return (
    <Paper
      elevation={3}
      sx={{
        p: { xs: 3, sm: 4 },
        borderRadius: 4,
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Typography variant="h6" fontWeight={700} mb={2}>
        For inquiries, collaborations, or just to say hello — feel free to reach
        out.
      </Typography>

      <Stack spacing={2} mb={4}>
        {contactItems.map(({ label, value, href }) => (
          <Box
            key={label}
            sx={{
              borderRadius: 3,
              p: 2,
              backgroundColor: theme.palette.customColors.grey20,
              boxShadow: "0px 2px 6px rgba(0,0,0,0.05)",
            }}
          >
            <Typography
              variant="caption"
              fontWeight={500}
              color="text.secondary"
            >
              {label}
            </Typography>
            <Typography variant="body2" fontWeight={500}>
              {href ? (
                <MuiLink
                  href={href}
                  target="_blank"
                  rel="noopener"
                  color="primary"
                  underline="hover"
                >
                  {value}
                </MuiLink>
              ) : (
                value
              )}
            </Typography>
          </Box>
        ))}
      </Stack>

      <Box textAlign="center">
        <Typography variant="h6" fontWeight={700} mb={2}>
          Social Links
        </Typography>
        <Stack
          direction="row"
          spacing={3}
          justifyContent="center"
          flexWrap="wrap"
        >
          {socialLinks.map(({ icon, href, label }) => (
            <MuiLink
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              sx={{
                color: theme.palette.primary.main,
                fontSize: 28,
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.2)",
                },
              }}
              className="social-icon"
              aria-label={label}
            >
              {icon}
            </MuiLink>
          ))}
        </Stack>
      </Box>
    </Paper>
  );
};

export default ContactInfoSection;
