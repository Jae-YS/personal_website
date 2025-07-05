import { Stack, Typography, useTheme } from "@mui/material";
import Link from "@/components/Navbar/Link";
import { SelectedPage } from "@/shared/types";

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
};

const NavLinks = ({
  selectedPage,
  setSelectedPage,
  direction = "row",
  spacing = 4,
  pages = [
    { label: "Home", value: SelectedPage.Home },
    { label: "About Me", value: SelectedPage.AboutMe },
    { label: "Work", value: SelectedPage.Work },
    { label: "Contact Me", value: SelectedPage.ContactMe },
  ],
  sx = {},
  onLinkClick,
}: Props) => {
  const theme = useTheme();
  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {pages.map(({ label, value, icon }) => (
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
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                fontWeight: selectedPage === value ? 500 : 400,
                color:
                  selectedPage === value
                    ? theme.palette.primary.main
                    : theme.palette.text.primary,
              }}
            >
              {label}
            </Typography>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

export default NavLinks;
