// components/navbar/NavLinks.tsx
import { Stack } from "@mui/material";
import Link from "@/components/navbar/Link";
import { SelectedPage } from "@/shared/types";

type PageItem = {
  label: string;
  value: SelectedPage;
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
  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {pages.map(({ label, value }) => (
        <Link
          key={value}
          page={value}
          selectedPage={selectedPage}
          setSelectedPage={(v) => {
            setSelectedPage(v);
            if (onLinkClick) onLinkClick();
          }}
        >
          {label}
        </Link>
      ))}
    </Stack>
  );
};

export default NavLinks;
