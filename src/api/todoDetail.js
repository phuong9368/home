import axiosClient from "./axiosClient";

const todoDetailApi = {
  create: (params) => {
    const url = "/todo/detail";
    return axiosClient.postForm(url, params);
  },
  update: (params) => {
    const url = "/todo/detail";
    return axiosClient.put(url, params);
  },
  delete: (id) => {
    const url = `/todo/detail/${id}`;
    return axiosClient.delete(url);
  }
};

export default todoDetailApi;