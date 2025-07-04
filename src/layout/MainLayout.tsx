// src/layout/MainLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar/NavBar";
import Footer from "@/components/Footer/Footer";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

const Layout = () => {
  const location = useLocation();
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setIsTopOfPage(scrollY === 0);

      if (location.pathname === "/" && scrollY === 0) {
        setSelectedPage(SelectedPage.Home);
      }
    };

    handleScroll(); // run on mount
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <>
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Outlet context={{ selectedPage, setSelectedPage }} />
      <Footer selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </>
  );
};

export default Layout;
