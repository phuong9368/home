import axiosClient from "./axiosClient";

const customerApi = {
  getAll: () => {
    const url = "/customer";
    return axiosClient.get(url);
  }
};

export default customerApi;
