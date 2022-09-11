import { Route, Routes, HashRouter } from "react-router-dom";
import Goods from "./pages/goods";
import Home from "./pages/home";
import MasterLayout from "./themes/masterLayout";

const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hang-hoa" element={<Goods />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};

export default RoutesRoot;
