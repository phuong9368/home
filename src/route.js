import { Route, Routes, HashRouter } from "react-router-dom";
import Customer from "./pages/customer";
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
          <Route path="/khach-hang" element={<Customer />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};

export default RoutesRoot;
