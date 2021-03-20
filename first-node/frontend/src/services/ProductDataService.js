import http from "../http-common";

class ProductDataService {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  /* eslint-disable */
  
  // create(file, onUploadProgress) {
  //   let formData = new FormData();
    
  //   formData.append("file", file),
  //   formData.append("product_name", product_name)

  //   return http.post("/products", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data"
  //     }
  //   }, onUploadProgress);

  // }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  deleteAll() {
    return http.delete(`/products`);
  }

  findByTitle(product_name) {
    return http.get(`/products?product_name=${product_name}`);
  }

  getFiles() {
    return http.get("/products/files");
  }

}

export default new ProductDataService();