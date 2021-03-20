<template>
  <div class="container">
    <div v-if="currentFile" class="progress">
      <div
        class="progress-bar progress-bar-info progress-bar-striped"
        role="progressbar"
        :aria-valuenow="progress"
        aria-valuemin="0"
        aria-valuemax="100"
        :style="{ width: progress + '%' }"
      >
        {{ progress }}%
      </div>
    </div>
    <br />

    <h4 style="text-align:center">Add Product</h4>
    <br />

    <form enctype="multipart/form-data" ref="data" class="add-form">
      <div v-if="!submitted">
        <div class="form-group">
          <label for="product_name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="product_name"
            required
            v-model="product.product_name"
            name="product_name"
          />
        </div>

        <div class="form-group">
          <label for="price">Price</label>
          <input
            class="form-control"
            id="price"
            required
            v-model="product.price"
            name="price"
          />
        </div>

        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            class="form-control"
            id="description"
            required
            v-model="product.description"
            name="description"
            style="height:100px"
          />
        </div>

        <div class="form-group">
          <label for="file">Image</label>
          <input
            class="form-control"
            type="file"
            ref="file"
            @change="selectFile"
          />
        </div>

        <br />

        <button @click="saveProduct" class="btn btn-success">Submit</button>
      </div>

      <div v-else>
        <h4>You submitted successfully!</h4>
        <button class="btn btn-success" @click="newProduct">Add</button>
      </div>
    </form>
    <div class="alert alert-light" role="alert">{{ message }}</div>
  </div>
</template>

<script>
/* eslint-disable */
import http from '../http-common';

export default {
  name: 'add-product',
  data() {
    return {
      product: {
        id: null,
        product_name: '',
        price: '',
        description: ''
      },
      selectedFiles: undefined,
      currentFile: undefined,
      progress: 0,
      message: '',
      submitted: false
    };
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },

    saveProduct() {
      this.progress = 0;
      this.currentFile = this.selectedFiles.item(0);

      let formData = new FormData();
      formData.append('product_name', this.product.product_name);
      formData.append('price', this.product.price);
      formData.append('description', this.product.description);
      formData.append('file', this.currentFile);

      http
        .post('/products', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        .then(response => {
          this.product.id = response.data.id;
          this.submitted = true;
          console.log(response.data);
          this.message = response.data.message;
        })
        .catch(e => {
          console.log(e);
          this.progress = 0;
          this.message = 'Could not upload the file!';
          this.currentFile = undefined;
        });
    },

    newProduct() {
      this.submitted = false;
      this.product = {};
    }
  }
};
</script>

<style>
.add-form {
  width: 70%;
  padding-left: 300px;
}
</style>
