import { Box, Typography, useTheme } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import type { ContactCardProps } from "@/types/index";

const ContactCard = ({ label, value, href }: ContactCardProps) => {
  const theme = useTheme();

  const getIcon = () => {
    if (label.toLowerCase().includes("phone"))
      return <PhoneIcon fontSize="small" />;
    if (label.toLowerCase().includes("email"))
      return <EmailIcon fontSize="small" />;
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 280,
        px: 2.5,
        py: 2,
        bgcolor: theme.palette.background.default,
        border: `1px solid ${theme.palette.divider}`,
        borderRadius: 2,
        boxShadow: "none",
        transition: "transform 0.25s ease, box-shadow 0.25s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: 0.5,
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: theme.shadows[3],
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {getIcon()}
        <Typography
          variant="subtitle2"
          color="text.secondary"
          sx={{ fontSize: "0.75rem" }}
        >
          {label}
        </Typography>
      </Box>

      {href ? (
        <Box
          component="a"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            color: theme.palette.primary.main,
            fontWeight: 500,
            textDecoration: "none",
            "&:hover": { textDecoration: "underline" },
            fontSize: "0.875rem",
          }}
        >
          {value}
        </Box>
      ) : (
        <Box sx={{ fontSize: "0.875rem", fontWeight: 500 }}>{value}</Box>
      )}
    </Box>
  );
};

export default ContactCard;
