import { Routes, Route } from "react-router-dom";
import Layout from "@/layout";
import HomePage from "@/pages/HomePage";
import ScrollToTop from "@/shared/ScrollToTop";
import Gallery from "@/pages/Gallery";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="work/acrylic" element={<Gallery />} />
          <Route path="work/oil" element={<Gallery />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
