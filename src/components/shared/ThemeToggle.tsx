import { useRef } from "react";
import { Box, useTheme } from "@mui/material";
import Brightness7RoundedIcon from "@mui/icons-material/Brightness7Rounded";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import { useToggleTheme } from "@/hooks/useToggleTheme";
import type { ThemeProps } from "@/types/index";

const ThemeToggle = ({ mode, setMode }: ThemeProps) => {
  const theme = useTheme();
  const isDark = mode === "dark";
  const containerRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;

  const knobSize = 32;
  const trackWidth = 96;
  const padding = 2;
  const knobX = trackWidth - knobSize - padding * 2;

  const { handleClick } = useToggleTheme({
    isDark,
    setMode,
    containerRef,
  });
  return (
    <Box
      ref={containerRef}
      onClick={handleClick}
      sx={{
        width: `${trackWidth}px`,
        height: "36px",
        backgroundColor: isDark ? "#333" : theme.palette.grey[300],
        borderRadius: "18px",
        p: `${padding}px`,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        position: "relative",
        transition: "background-color 0.3s ease",
      }}
    >
      <Box
        sx={{
          width: `${knobSize}px`,
          height: `${knobSize}px`,
          borderRadius: "50%",
          position: "absolute",
          top: `${padding}px`,
          left: isDark ? `${knobX}px` : `${padding}px`,
          transition: "left 0.4s ease",
          backgroundColor: isDark ? "#111" : "#FFEB3B",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: isDark
            ? "0 0 6px rgba(255, 255, 255, 0.2)"
            : "0 0 10px 4px rgba(255, 235, 59, 0.4)",
          color: isDark ? "#fff" : "#000",
          "&:hover": {
            boxShadow: isDark
              ? "0 0 8px rgba(255,255,255,0.3)"
              : "0 0 20px 6px rgba(255, 235, 59, 0.6)",
            transform: "scale(1.05)",
          },
        }}
      >
        {isDark ? (
          <DarkModeRoundedIcon fontSize="small" />
        ) : (
          <Brightness7RoundedIcon fontSize="small" />
        )}
      </Box>
    </Box>
  );
};

export default ThemeToggle;
