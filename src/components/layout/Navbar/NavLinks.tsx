import { Stack, Typography, useTheme } from "@mui/material";
import Link from "@/components/layout/Navbar/Link";
import { SelectedPage } from "@/components/shared/types";
import React, { useRef } from "react";
import { useAutoSelectPage } from "@/hooks/useAutoSelectPage"; // adjust path as needed

type PageItem = {
  label: string;
  value: SelectedPage;
  icon?: React.ReactNode;
};

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  direction?: "row" | "column";
  spacing?: number;
  pages?: PageItem[];
  sx?: object;
  onLinkClick?: () => void;
  sectionProgress?: Record<string, number>;
};

const NavLinks = ({
  selectedPage,
  setSelectedPage,
  direction = "row",
  spacing = 4,
  pages = [
    { label: "Home", value: SelectedPage.Home },
    { label: "About Me", value: SelectedPage.About },
    { label: "Work", value: SelectedPage.Projects },
    { label: "Contact Me", value: SelectedPage.Contact },
  ],
  sx = {},
  onLinkClick,
  sectionProgress = {},
}: Props) => {
  useAutoSelectPage({ sectionProgress, selectedPage, setSelectedPage });

  const prevProgressRef = useRef<Record<string, number>>({});
  const theme = useTheme();
  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {pages.map(({ label, value, icon }) => {
        const key = value.toLowerCase();
        const progress = Math.min(sectionProgress?.[key] ?? 0, 1);

        const isFullyActive = progress >= 0.9;
        const isSelected = selectedPage === value;

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
                  color:
                    isFullyActive || isSelected
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
                    transformOrigin: "left center",
                    opacity: progress > 0.05 ? 1 : 0,
                    borderRadius: 2,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                  },
                  "&:hover::after": {
                    transform: "scaleX(1)",
                    opacity: 1,
                    transformOrigin: "left center",
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
