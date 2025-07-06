import { useTheme } from "@mui/material";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useLocation } from "react-router-dom";
import { SelectedPage } from "@/types";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/all";
gsap.registerPlugin(ScrollToPlugin);

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  children?: React.ReactNode;
};

const Link = ({ page, selectedPage, setSelectedPage, children }: Props) => {
  const theme = useTheme();
  const location = useLocation();

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;
  const isAnchorTarget = ["home", "aboutme", "work", "contactme"].includes(
    lowerCasePage
  );

  const handleClick = () => {
    setSelectedPage(lowerCasePage);
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${page}`, offsetY: 80 },
      ease: "power2.out",
    });
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
