import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productApi from "../../api/productApi";

const Order = () => {
  const [products, setProducts] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await productApi.getAll();
    if (response?.status === "OK") {
      if (response.data) {
        let data = response.data;
        data = data.filter((obj) => !obj.delFlg);
        setProducts(data);
      }
    }
    setShowLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const formatDate = () => {
    let d = new Date(),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };

  const formatHour = () => {
    let d = new Date(),
      h = d.getHours(),
      m = d.getMinutes(),
      s = d.getSeconds();
      m = checkTime(m);
      s = checkTime(s);
    return [h, m, s].join(":");
  };

  const checkTime = (i) => {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
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
                  <th scope="col">Giá</th>
                  <th scope="col">Ngày/Giờ</th>
                  <th scope="col">Trạng thái</th>
                </tr>
              </thead>
              <tbody>
                {products?.map((value, key) => (
                  <tr key={key}>
                    <td>
                      HD{key + 1}
                      <br></br>
                      <span className="form-text">Tên khách hàng</span>
                    </td>
                    <td>{value.wholesalePrice}</td>
                    <td className="text-end">
                      {formatDate()}
                      <br></br>
                      <span className="form-text">{formatHour()}</span>
                    </td>
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

export default Order;
