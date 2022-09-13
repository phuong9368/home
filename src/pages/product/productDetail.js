import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productApi from "../../api/productApi";
import alertify from "alertifyjs";

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const [dataSend, setDataSend] = useState({});
  const [showLoading, setShowLoading] = useState(true);

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
          console.log(data)
        }
      }
    }
    setShowLoading(false);
  };

  useEffect(() => {
    fetchProducts(params.id);
  }, [params]);

  const saveProduct = async () => {
    setShowLoading(true);
    const response = await productApi.update(dataSend);
    if (response?.status === "OK") {
      if (response.data) {
        let data = response.data;
        if (!data.delFlg) {
          setProduct(data);
          setDataSend(data);
        }
      }
      window.$("#name-modal").modal("hide");
      window.$("#entry-price-modal").modal("hide");
      window.$("#wholesale-price-modal").modal("hide");
      window.$("#retail-price-modal").modal("hide");
      window.$("#note-modal").modal("hide");
      alertify.success("Cập nhật dữ liệu thành công");
    }
    setShowLoading(false);
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
                          <i className="bi bi-pencil-square ms-2 text-primary" data-bs-toggle="modal" data-bs-target="#entry-price-modal"></i>
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
                          <i className="bi bi-pencil-square ms-2 text-primary" data-bs-toggle="modal" data-bs-target="#wholesale-price-modal"></i>
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
                          <i className="bi bi-pencil-square ms-2 text-primary" data-bs-toggle="modal" data-bs-target="#retail-price-modal"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="list-group-item">
                  <div className="d-flex justify-content-between">
                    <div className="bd-highlight">Đơn vị tính:</div>
                    <div className="bd-highlight"></div>
                    <div className="bd-highlight">
                      <div className="d-flex justify-content-end">
                        <div className="bd-highlight"></div>
                        <div className="bd-highlight">
                          {product.unit}
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
                          <i className="bi bi-pencil-square ms-2 text-primary" data-bs-toggle="modal" data-bs-target="#note-modal"></i>
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
                    <input type="text" className="form-control" onChange={handleChange("name")} value={dataSend.name || ""} />
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

            <div className="modal fade" id="entry-price-modal" aria-labelledby="entry-price-modal1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="entry-price-modal1">
                      Chỉnh sửa giá nhập
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="number" className="form-control" onChange={handleChange("entryPrice")} value={dataSend.entryPrice || ""} />
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

            <div className="modal fade" id="wholesale-price-modal" aria-labelledby="wholesale-price-modal1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="wholesale-price-modal1">
                      Chỉnh sửa giá bán sỉ
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="number" className="form-control" onChange={handleChange("wholesalePrice")} value={dataSend.wholesalePrice || ""} />
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

            <div className="modal fade" id="retail-price-modal" aria-labelledby="retail-price-modal1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="retail-price-modal1">
                      Chỉnh sửa giá bán lẻ
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="number" className="form-control" onChange={handleChange("retailPrice")} value={dataSend.retailPrice || ""} />
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

            <div className="modal fade" id="note-modal" aria-labelledby="note-modal1" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="note-modal1">
                      Chỉnh sửa ghi chú
                    </h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <input type="text" className="form-control" onChange={handleChange("note")} value={dataSend.note || ""} />
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
      </div>
    </>
  );
};

export default ProductDetail;
