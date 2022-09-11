import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import data from "./data";

const Goods = () => {
  const data = [
    {
      id: 1,
      name: "Tên 1",
    },
    {
      id: 2,
      name: "Tên 2",
    },
  ];
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <b className="text-uppercase">Danh sách hàng hóa</b>
          <table className="table table-hover table-bordered ">
            <thead>
              <tr>
                <th scope="col">STT</th>
                <th scope="col">Tên hàng hóa</th>
                <th scope="col">Giá</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((value, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>
                    <Link to={`/hang-hoa`}>{value.name}</Link>
                  </td>
                  <td>0</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Goods;
