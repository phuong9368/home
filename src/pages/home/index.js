import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="text-center">
            <b>Thống kê</b>
          </div>
          <table className="table table-hover table-bordered ">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Hôm nay</th>
                <th scope="col">7 ngày</th>
                <th scope="col">30 ngày</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Doanh số</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
              <tr>
                <th scope="row">Lợi nhuận</th>
                <td>0</td>
                <td>0</td>
                <td>0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6">
          <div className="text-center">
            <b>Lối tắt</b>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-file-earmark-plus-fill"></i>
              </h5>
              <p className="card-text font-size-12">Thêm đơn hàng</p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-person-plus-fill"></i>
              </h5>
              <p className="card-text font-size-12">Thêm khách hàng</p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-file-plus-fill"></i>
              </h5>
              <p className="card-text font-size-12">Thêm hàng hóa</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-file-earmark-text-fill"></i>
              </h5>
              <p className="card-text font-size-12">Đơn bán hàng</p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-person-circle"></i>
              </h5>
              <p className="card-text font-size-12">
              <Link to={`/khach-hang`}>Khách hàng</Link></p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-box-fill"></i>
              </h5>
              <p className="card-text font-size-12">
                <Link to={`/hang-hoa`}>Hàng hóa</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-tag-fill"></i>
              </h5>
              <p className="card-text font-size-12">Danh mục</p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-box2-fill"></i>
              </h5>
              <p className="card-text font-size-12">Đơn nhập</p>
            </div>
          </div>
        </div>

        <div className="col-4 col-sm-4 col-md-2">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                <i className="bi bi-person-workspace"></i>
              </h5>
              <p className="card-text font-size-12">Nhà cung cấp</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
