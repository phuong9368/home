import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import customerApi from "../../api/customerApi";

const Customer = () => {
  const [customers, setCustomers] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const fetchCustomers = async () => {
    const response = await customerApi.getAll();
    if (response?.status === "OK") {
      setCustomers([]);
      if (response.data) {
        let data = response.data;
        data = data.filter((obj) => !obj.delFlg);
        setCustomers(data);
      }
    }
    setShowLoading(false);
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

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
            <b className="text-uppercase">Danh sách khách hàng</b>
            <table className="table table-hover table-bordered ">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Tên</th>
                  <th scope="col">SĐT</th>
                  <th scope="col">Địa chỉ</th>
                </tr>
              </thead>
              <tbody>
                {customers?.map((value, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>
                      <Link to={`/khach-hang/` + value.id}>{value.name}</Link>
                    </td>
                    <td>{value.phoneNumber}</td>
                    <td>{value.address}</td>
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

export default Customer;
