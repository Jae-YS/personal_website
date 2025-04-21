import { useTheme } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation, useNavigate } from "react-router-dom";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
};

const Link = ({ page, selectedPage, setSelectedPage, children }: Props) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;
  const isAnchorTarget = ["home", "aboutme", "work", "contactme"].includes(
    lowerCasePage
  );

  const handleClick = () => {
    setSelectedPage(lowerCasePage);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const anchor = document.getElementById(lowerCasePage);
        if (anchor) anchor.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const style = {
    cursor: "pointer",
    textDecoration: "none",
    transition: "color 0.3s ease",
    color: isSelected ? theme.palette.primary.main : theme.palette.text.primary,
  };

  if (location.pathname === "/" && isAnchorTarget) {
    return (
      <AnchorLink
        href={`#${lowerCasePage}`}
        onClick={handleClick}
        style={style}
      >
        {children ?? page}
      </AnchorLink>
    );
  }

  return (
    <span onClick={handleClick} style={style}>
      {children ?? page}
    </span>
  );
};

export default Link;
