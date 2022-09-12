import { Route, Routes, HashRouter } from "react-router-dom";
import Customer from "./pages/customer";
import Home from "./pages/home";
import Product from "./pages/product";
import ProductDetail from "./pages/product/productDetail";
import MasterLayout from "./themes/masterLayout";

const RoutesRoot = () => {
  return (
    <HashRouter>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/khach-hang" element={<Customer />} />
          <Route path="/hang-hoa" element={<Product />} />
          <Route path="/hang-hoa/:id" element={<ProductDetail />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};

export default RoutesRoot;
