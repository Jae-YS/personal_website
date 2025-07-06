// utils/getLinkHighlightStyle.ts
import { Theme } from "@mui/material";

export const getLinkHighlightStyle = (
  key: string,
  progress: number,
  prevProgressRef: React.MutableRefObject<Record<string, number>>,
  theme: Theme
) => {
  const prev = prevProgressRef.current[key] ?? 0;

  const isScrollingDown = progress > prev;
  const isFullyActive = progress >= 0.95;

  const transformOrigin =
    isScrollingDown || isFullyActive ? "left center" : "right center";

  // Store new progress
  prevProgressRef.current[key] = progress;

  return {
    fontWeight: isFullyActive ? 700 : 400,
    color: isFullyActive
      ? theme.palette.primary.main
      : theme.palette.text.primary,
    "::after": {
      content: '""',
      position: "absolute",
      bottom: -2,
      left: 0,
      height: "2px",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      transform: `scaleX(${progress})`,
      transformOrigin,
      opacity: progress > 0.05 ? 1 : 0,
      borderRadius: 2,
      transition: "transform 0.3s ease, opacity 0.3s ease",
    },
    "&:hover::after": {
      transform: "scaleX(1)",
      opacity: 1,
      transformOrigin: "left center",
    },
  };
};
