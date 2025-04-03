import { SelectedPage } from "@/shared/types";
import { useTheme } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  const theme = useTheme();
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;

  return (
    <AnchorLink
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
      style={{
        cursor: "pointer",
        textDecoration: "none",
        color: isSelected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
        transition: "color 0.5s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color =
          theme.palette.primary.light;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = isSelected
          ? theme.palette.primary.main
          : theme.palette.text.primary;
      }}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
