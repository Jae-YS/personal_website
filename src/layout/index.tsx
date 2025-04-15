import { Outlet } from "react-router-dom";
import Navbar from "@/components/navbar/NavBar";
import Footer from "@/components/footer";
import { useState, useEffect } from "react";
import { SelectedPage } from "@/shared/types";

const Layout = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
