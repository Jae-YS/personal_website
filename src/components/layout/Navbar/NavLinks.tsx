import { Stack, Typography, useTheme } from "@mui/material";
import Link from "@/components/layout/Navbar/Link";
import { SelectedPage, type NavLinksProps } from "@/types";
import { useRef } from "react";
import { useAutoSelectPage } from "@/hooks/useAutoSelectPage";

const NavLinks = ({
  selectedPage,
  setSelectedPage,
  direction = "row",
  spacing = 4,
  pages = [
    { label: "Home", value: SelectedPage.Home },
    { label: "About Me", value: SelectedPage.About },
    { label: "My Projects", value: SelectedPage.Projects },
    { label: "Contact Me", value: SelectedPage.Contact },
  ],
  sx = {},
  onLinkClick,
  sectionProgress = {},
}: NavLinksProps) => {
  useAutoSelectPage({ sectionProgress, selectedPage, setSelectedPage });

  const prevProgressRef = useRef<Record<string, number>>({});
  const theme = useTheme();
  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {pages.map(({ label, value, icon }) => {
        const key = value.toLowerCase();
        const progress = Math.min(sectionProgress?.[key] ?? 0, 1);
        const previousProgress = prevProgressRef.current[key] ?? 0;

        const isGrowing = progress > previousProgress;

        const isFullyActive = progress >= 0.8;
        const underlineProgress = isFullyActive ? 1 : progress;
        const transition = isGrowing
          ? "transform 0.3s ease-out, opacity 0.3s ease-out"
          : "transform 0.15s ease-in, opacity 0.15s ease-in";

        prevProgressRef.current[key] = progress;

        return (
          <Link
            key={value}
            page={value}
            selectedPage={selectedPage}
            setSelectedPage={(v) => {
              setSelectedPage(v);
              if (onLinkClick) onLinkClick();
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              {icon}
              <Typography
                variant="body2"
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  transition: "color 0.3s ease",
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
                    transform: `scaleX(${underlineProgress})`,
                    transformOrigin: "left center",
                    opacity: progress > 0.05 ? 1 : 0,
                    borderRadius: 2,
                    transition,
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    opacity: 1,
                  },
                }}
              >
                {label}
              </Typography>
            </Stack>
          </Link>
        );
      })}
    </Stack>
  );
};

export default NavLinks;
