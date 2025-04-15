import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "@/layout";
import HomePage from "@/pages/HomePage";
import AcrylicGallery from "@/pages/AcrylicGallery";
import OilGallery from "@/pages/OilGallery";
import { SelectedPage } from "@/shared/types";

const App = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage setSelectedPage={setSelectedPage} />} />
        <Route
          path="work/acrylic"
          element={<AcrylicGallery setSelectedPage={setSelectedPage} />}
        />
        <Route
          path="work/oil"
          element={<OilGallery setSelectedPage={setSelectedPage} />}
        />
      </Route>
    </Routes>
  );
};

export default App;
