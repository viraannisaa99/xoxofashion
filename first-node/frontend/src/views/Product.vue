<template>
  <div class="container">
    <div v-if="currentProduct" class="edit-form">
      <br />
      <h4 style="text-align:center">Edit Product</h4>
      <br />
      <form>
        <div class="form-group">
          <label for="product_name">Product Name</label>
          <input
            type="text"
            class="form-control"
            id="product_name"
            v-model="currentProduct.product_name"
          />
        </div>
        <div class="form-group">
          <label for="price">Price</label>
          <input
            type="text"
            class="form-control"
            id="price"
            v-model="currentProduct.price"
          />
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            type="text"
            class="form-control"
            id="description"
            v-model="currentProduct.description"
            style="height:100px"
          />
        </div>
      </form>

      <button class="btn btn-danger" @click="deleteProduct">
        Delete
      </button>

      <button type="submit" class="btn btn-success" @click="updateProduct">
        Update
      </button>
      <p>{{ message }}</p>
    </div>

    <div v-else>
      <br />
      <p>Please click on a ...</p>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ProductDataService from '../services/ProductDataService';

export default {
  name: 'product',
  data() {
    return {
      currentProduct: null,
      message: ''
    };
  },
  methods: {
    getTutorial(id) {
      ProductDataService.get(id)
        .then(response => {
          this.currentProduct = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    updateProduct() {
      ProductDataService.update(this.currentProduct.id, this.currentProduct)
        .then(response => {
          console.log(response.data);
          this.message = 'The product was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },

    deleteProduct() {
      ProductDataService.delete(this.currentProduct.id)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: 'tutorials' });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getTutorial(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  width: 70%;
  padding-left: 300px;
}
</style>
