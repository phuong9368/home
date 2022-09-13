import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import alertify from 'alertifyjs';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [dataSend, setDataSend] = useState({});

  let params = useParams();

  const handleChange = (propertyName) => (event) => {
    const newProduct = {
      ...product,
      [propertyName]: event.target.value,
    };
    setDataSend(newProduct);
  };

  const fetchProducts = async (id) => {
    const response = await productApi.getById(id);
    if (response?.status === "OK") {
      if (response.data) {
        let data = response.data;
        if (!data.delFlg) {
          setProduct(data);
          setDataSend(data);
        }
      }
    }
  };

  useEffect(() => {
    fetchProducts(params.id);
  }, [params]);

  const saveProduct = async () => {
    const response = await productApi.update(dataSend);
    if (response?.status === "OK") {
      setProduct([]);
      if (response.data) {
        let data = response.data;
        if (data.delFlg) {
          setProduct(null);
        } else {
          setProduct(data);
          setDataSend(data);
        }
      }
      window.$('#name-modal').modal('hide');
      alertify.success("Cập nhật dữ liệu thành công");
    }
  };

  return (
    <>
      <div className="row">
        <div className="col-12 col-sm-12 col-md-4">
          <div className="text-center">
            <b className="text-uppercase ">
              {product.name}
              <i className="bi bi-pencil-square ms-2 text-primary" data-bs-toggle="modal" data-bs-target="#name-modal"></i>
            </b>
          </div>

          <div className="card mt-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div className="bd-highlight">Mã hàng:</div>
                  <div className="bd-highlight"></div>
                  <div className="bd-highlight">
                    <div className="d-flex justify-content-end">
                      <div className="bd-highlight"></div>
                      <div className="bd-highlight">SP{product.id}</div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div className="bd-highlight">Giá nhập:</div>
                  <div className="bd-highlight"></div>
                  <div className="bd-highlight">
                    <div className="d-flex justify-content-end">
                      <div className="bd-highlight"></div>
                      <div className="bd-highlight">
                        {product.entryPrice}
                        <i className="bi bi-pencil-square ms-2 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div className="bd-highlight">Giá bán sỉ:</div>
                  <div className="bd-highlight"></div>
                  <div className="bd-highlight">
                    <div className="d-flex justify-content-end">
                      <div className="bd-highlight"></div>
                      <div className="bd-highlight">
                        {product.wholesalePrice}
                        <i className="bi bi-pencil-square ms-2 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div className="bd-highlight">Giá bán lẻ:</div>
                  <div className="bd-highlight"></div>
                  <div className="bd-highlight">
                    <div className="d-flex justify-content-end">
                      <div className="bd-highlight"></div>
                      <div className="bd-highlight">
                        {product.retailPrice}
                        <i className="bi bi-pencil-square ms-2 text-primary"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div className="d-flex justify-content-between">
                  <div className="bd-highlight">Ghi chú:</div>
                  <div className="bd-highlight"></div>
                  <div className="bd-highlight">
                    <div className="d-flex justify-content-end">
                      <div className="bd-highlight"></div>
                      <div className="bd-highlight">
                        {product.note}
                        <i
                          className="bi bi-pencil-square ms-2 text-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#note"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="modal fade" id="name-modal" aria-labelledby="name1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="name1">
                    Chỉnh sửa tên
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange("name")}
                    value={dataSend.name || ""}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => saveProduct()}>
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="modal fade" id="note" aria-labelledby="note1" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="note1">
                    Chỉnh sửa ghi chú
                  </h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <input
                    type="text"
                    className="form-control"
                    onChange={handleChange("note")}
                    value={product.note || ""}
                  />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                  </button>
                  <button type="button" className="btn btn-primary" onClick={() => saveProduct()}>
                    Lưu
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
