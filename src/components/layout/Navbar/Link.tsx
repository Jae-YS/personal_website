import { useTheme } from "@mui/material";
import { useLocation } from "react-router-dom";
import type { LinkProps, SelectedPage } from "@/types/index";
import { gsap } from "@/utils/gsap";

const Link = ({ page, selectedPage, setSelectedPage, children }: LinkProps) => {
  const theme = useTheme();
  const location = useLocation();

  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isSelected = selectedPage === lowerCasePage;
  const isAnchorTarget = [
    "home",
    "aboutme",
    "myprojects",
    "contactme",
  ].includes(lowerCasePage);

  const handleClick = () => {
    setSelectedPage(lowerCasePage);

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${lowerCasePage}`, offsetY: 0 },
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
      <span onClick={handleClick} style={style}>
        {children ?? page}
      </span>
    );
  }
};

export default Link;
