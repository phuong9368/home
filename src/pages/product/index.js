import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../api/productApi";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await productApi.getAll();
    if (response?.status === "OK") {
      if (response.data) {
        let data = response.data;
        data = data.filter((obj) => !obj.delFlg);
        // data = data.map((x) => x.wholesalePrice = formatCurrency(x.wholesalePrice))
        setProducts(data);
      }
    }
    setShowLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const formatCurrency = (num) => {
    let rs = "";
    for (let i = num.length - 1, j = 1; i >= 0; i--, j++) {
      rs = num[i] + rs;
      if (j % 3 === 0 && i !== 0) {
        rs = "," + rs;
      }
    }
    return rs;
  };

  return (
    <>
      <div className={showLoading ? "container-fluid" : "container-fluid d-none"}>
        <div className="row">
          <div className="min-height-30vh">
            <div className="loading-spinner"></div>
          </div>
        </div>
      </div>
      <div className={!showLoading ? "container-fluid" : "container-fluid d-none"}>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <b className="text-uppercase">Danh sách hàng hóa</b>
            <table className="table table-hover table-bordered ">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Đã bán</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((value, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <Link to={`/hang-hoa/` + value.id}>{value.name}</Link>
                    </td>
                    <td className="text-end">{value.wholesalePrice}</td>
                    <td className="text-end">{value.quantitySold}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
