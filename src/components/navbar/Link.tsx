import { useTheme } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
};

const Link = ({ page, selectedPage, setSelectedPage, children }: Props) => {
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
        transition: "color 0.3s ease",
        color: isSelected
          ? theme.palette.primary.main
          : theme.palette.text.primary,
      }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLElement).style.color =
          theme.palette.primary.light)
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLElement).style.color = isSelected
          ? theme.palette.primary.main
          : theme.palette.text.primary)
      }
    >
      {children ?? page}
    </AnchorLink>
  );
};

export default Link;
