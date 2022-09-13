import axiosClient from "./axiosClient";

const productApi = {
  getAll: () => {
    const url = "/product";
    return axiosClient.get(url);
  },
  getById: (id) => {
    const url = `/product/${id}`;
    return axiosClient.get(url);
  },
  update: (product) => {
    const url = `/product`;
    return axiosClient.put(url, product);
  }
};

export default productApi;
