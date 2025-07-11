import { Box, useTheme } from "@mui/material";
import type { SocialIconProps } from "@/types/index";

const SocialIcon = ({ href, icon, color }: SocialIconProps) => {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="social link"
    >
      <Box
        sx={{
          width: 56,
          height: 56,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          bgcolor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.04)",
          transition: theme.transitions.create(
            ["transform", "box-shadow", "background-color"],
            {
              duration: theme.transitions.duration.short,
              easing: theme.transitions.easing.easeInOut,
            }
          ),
          boxShadow: isDark ? theme.shadows[2] : "none",
          "&:hover": {
            transform: "scale(1.1)",
            boxShadow: theme.shadows[6],
            bgcolor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
          },
          "& svg": {
            color: color || (isDark ? "#f5f5f5" : "#000"),
          },
        }}
      >
        {icon}
      </Box>
    </a>
  );
};

export default SocialIcon;
