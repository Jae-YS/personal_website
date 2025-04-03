// components/navbar/NavLinks.tsx
import { Stack } from "@mui/material";
import Link from "@/components/navbar/Link";
import { SelectedPage } from "@/shared/types";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  direction?: "row" | "column";
  spacing?: number;
  pages?: string[];
  sx?: object;
  onLinkClick?: () => void;
};

const NavLinks = ({
  selectedPage,
  setSelectedPage,
  direction = "row",
  spacing = 4,
  pages = ["Home", "Work", "About Me", "Contact Me"],
  sx = {},
  onLinkClick,
}: Props) => {
  return (
    <Stack direction={direction} spacing={spacing} sx={sx}>
      {pages.map((page) => (
        <Link
          key={page}
          page={page}
          selectedPage={selectedPage}
          setSelectedPage={(value) => {
            setSelectedPage(value);
            if (onLinkClick) onLinkClick();
          }}
        />
      ))}
    </Stack>
  );
};

export default NavLinks;
