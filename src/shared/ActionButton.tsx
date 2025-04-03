import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { useTheme } from "@mui/material";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${SelectedPage.ContactMe}`}
      onClick={() => setSelectedPage(SelectedPage.ContactMe)}
      style={{
        textDecoration: "none",
        borderRadius: "0.375rem",
        padding: "0.5rem 2.5rem",
        color: "black",
        fontWeight: 500,
        transition: "all 0.3s ease",
        display: "inline-block",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.color = "white";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.color = "black";
      }}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
