import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer";
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
      if (!location.pathname.startsWith("/work") && window.scrollY === 0) {
        setIsTopOfPage(true);
        if (location.pathname === "/") {
          setSelectedPage(SelectedPage.Home);
        }
      } else {
        setIsTopOfPage(false);
      }

      if (
        location.pathname.startsWith("/work") &&
        selectedPage !== SelectedPage.Work
      ) {
        setSelectedPage(SelectedPage.Work);
      }
    };

    handleScroll();
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
