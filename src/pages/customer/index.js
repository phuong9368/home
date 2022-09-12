import React from "react";
import { Link } from "react-router-dom";

const Customer = () => {
  const customers = [{
    "id": 1,
    "name": "Cathi",
    "email": "cbuckle0@sciencedaily.com",
    "address": "0414 Warner Court",
    "phone_number": "401-415-8886",
    "notes": ""
  }, {
    "id": 2,
    "name": "Trefor",
    "email": "tgiacaponi1@blogs.com",
    "address": "09696 Montana Hill",
    "phone_number": "481-891-1862",
    "notes": ""
  }, {
    "id": 3,
    "name": "Hogan",
    "email": "hbowser2@hao123.com",
    "address": "67 Butternut Center",
    "phone_number": "131-425-7168",
    "notes": ""
  }, {
    "id": 4,
    "name": "Florentia",
    "email": "fgofford3@army.mil",
    "address": "68559 Little Fleur Alley",
    "phone_number": "499-363-9870",
    "notes": ""
  }, {
    "id": 5,
    "name": "Tiphani",
    "email": "tgrizard4@vinaora.com",
    "address": "2097 Kennedy Alley",
    "phone_number": "690-401-8286",
    "notes": ""
  }, {
    "id": 6,
    "name": "Stanislaus",
    "email": "sedelston5@printfriendly.com",
    "address": "35675 Dottie Junction",
    "phone_number": "452-251-1447",
    "notes": ""
  }, {
    "id": 7,
    "name": "Doralyn",
    "email": "dblas6@purevolume.com",
    "address": "3365 Thackeray Alley",
    "phone_number": "461-497-2631",
    "notes": ""
  }, {
    "id": 8,
    "name": "Glendon",
    "email": "gwardall7@unblog.fr",
    "address": "9579 Delaware Road",
    "phone_number": "703-565-7724",
    "notes": ""
  }, {
    "id": 9,
    "name": "Sabra",
    "email": "sshreenan8@slideshare.net",
    "address": "71311 Macpherson Trail",
    "phone_number": "987-352-9162",
    "notes": ""
  }, {
    "id": 10,
    "name": "Ferne",
    "email": "fbarkworth9@lycos.com",
    "address": "54979 Emmet Way",
    "phone_number": "613-728-0572",
    "notes": ""
  }];
  return (
    <>
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
                  <td>{value.phone_number}</td>
                  <td>{value.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Customer;
