import React, { useState } from "react";
import productApi from "../../api/productApi";
import alertify from "alertifyjs";

const ProductAdd = () => {
  const [product, setProduct] = useState({});
  const [showLoading, setShowLoading] = useState(false);

  const handleChange = (propertyName) => (event) => {
    const newProduct = {
      ...product,
      [propertyName]: event.target.value,
    };
    setProduct(newProduct);
  
  };

  const saveProduct = async () => {
    setShowLoading(true);
    console.log(product);
    // const response = await productApi.create(product);
    // if (response?.status === "OK") {
    //   if (response.data) {
    //     let data = response.data;
    //     if (!data.delFlg) {
    //       setProduct(data);
    //       setDataSend(data);
    //     }
    //   }
    //   alertify.success("Thêm dữ liệu thành công");
    // }
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
            <form>
              <div className="mb-3">
                <label className="form-label">Tên hàng hóa</label>
                <input type="text" className="form-control" placeholder="Nhập tên hàng hóa" onChange={handleChange("name")} value={product.name || ""}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Giá nhập</label>
                <input type="number" className="form-control" placeholder="Nhập giá nhập" onChange={handleChange("entryPrice")} value={product.entryPrice || ""}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Giá sỉ</label>
                <input type="number" className="form-control" placeholder="Nhập giá sỉ" onChange={handleChange("wholesalePrice")} value={product.wholesalePrice || ""}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Giá lẻ</label>
                <input type="number" className="form-control" placeholder="Nhập giá lẻ" onChange={handleChange("retailPrice")} value={product.retailPrice || ""}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Tồn kho</label>
                <input type="number" className="form-control" placeholder="Nhập tồn kho" onChange={handleChange("quantityInventory")} value={product.quantityInventory || ""}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Ghi chú</label>
                <input type="text" className="form-control" placeholder="Nhập ghi chú" onChange={handleChange("note")} value={product.note || ""}/>
              </div>
              <div className="d-flex justify-content-between">
                <button type="button" className="btn btn-secondary mb-3">
                  Clear
                </button>
                <button type="button" className="btn btn-primary mb-3" onClick={() => saveProduct()}>
                  Lưu
                </button>
                <button type="button" className="btn btn-danger mb-3">
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAdd;
