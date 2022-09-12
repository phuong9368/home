import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../api/productApi";

const Product = () => {
  const [products, setProducts] = useState([]);
  
  const fetchProducts = async () => {
    const response = await productApi.getAll();
    if (response?.status === "OK") {
      setProducts([]);
      if (response.data) {
        let data = response.data;
        data = data.filter((obj) => !obj.delFlg);
        setProducts(data);
      }
    }
    console.log(response);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
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
                  <td>{value.wholesalePrice}</td>
                  <td>{value.quantitySold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Product;
