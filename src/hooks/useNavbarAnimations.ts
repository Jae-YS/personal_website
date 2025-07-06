import { useEffect } from "react";
import { gsap } from "@/utils/gsap";
import { SelectedPage } from "@/components/shared/types";
import { useLocation } from "react-router-dom";

export const useNavbarAnimations = (
  navbarRef: React.RefObject<HTMLElement>,
  setSelectedPage: (value: SelectedPage) => void
) => {
  const location = useLocation();

  useEffect(() => {
    if (!navbarRef.current) return;

   
    gsap.set(navbarRef.current, { y: 0, opacity: 1 });

  }, [navbarRef]);

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setSelectedPage(SelectedPage.Home);
    else if (path.includes("about")) setSelectedPage(SelectedPage.About);
    else if (path.includes("projects") || path.includes("work"))
      setSelectedPage(SelectedPage.Projects);
    else if (path.includes("contact")) setSelectedPage(SelectedPage.Contact);
  }, [location, setSelectedPage]);
};
