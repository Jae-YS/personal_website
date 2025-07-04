import { Routes, Route } from "react-router-dom";
import Layout from "@/layout/MainLayout";
import HomePage from "@/pages/HomePage";
import ScrollToTop from "@/hooks/useScrollToTop";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
