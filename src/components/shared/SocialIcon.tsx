import { Box, useTheme } from "@mui/material";
import type { SocialIconProps } from "@/types/index";

const SocialIcon = ({ href, icon }: SocialIconProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      style={{ textDecoration: "none" }}
      aria-label="social link"
    >
      <Box
        sx={{
          width: 64,
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: isDark ? "#fff" : "transparent",
          transition: theme.transitions.create(["transform", "box-shadow"], {
            duration: theme.transitions.duration.short,
            easing: theme.transitions.easing.easeInOut,
          }),
          boxShadow: isDark ? theme.shadows[3] : "none",
          "&:hover": {
            transform: "scale(1.2)",
            boxShadow: isDark ? theme.shadows[6] : "none",
          },
        }}
      >
        {icon}
      </Box>
    </a>
  );
};

export default SocialIcon;
