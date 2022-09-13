import { Route, Routes, HashRouter } from "react-router-dom";
import Customer from "./pages/customer";
import Home from "./pages/home";
import Order from "./pages/order";
import Product from "./pages/product";
import ProductAdd from "./pages/product/productAdd";
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
          <Route path="/hang-hoa/them" element={<ProductAdd />} />
          <Route path="/hang-hoa/:id" element={<ProductDetail />} />
          <Route path="/don-ban-hang" element={<Order />} />
        </Routes>
      </MasterLayout>
    </HashRouter>
  );
};

export default RoutesRoot;
