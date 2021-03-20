<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3 mt-3 text-center">
        <router-link to="/add-product" class="nav-link"
          ><button class="btn btn-success">
            Add Product
          </button></router-link
        >
      </div>
      <div class="col-md-9 ms-auto mt-4">
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Search by Name"
            v-model="product_name"
          />
          <div class="input-group-append">
            <button
              class="btn btn-outline-secondary"
              type="button"
              @click="searchProductName"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>

    <section>
      <div class="container">
        <div class="row">
          <div class="col-md-3 mt-5">
            <h4 style="text-align: center">Products List</h4>
            <br />
            <ul class="list-group">
              <li
                class="list-group-item"
                :class="{ active: index == currentIndex }"
                v-for="(product, index) in products"
                :key="index"
                @click="setActiveProduct(product, index)"
              >
                {{ product.product_name }}
              </li>
            </ul>

            <button
              class="m-3 btn btn-sm btn-danger"
              @click="removeAllProducts"
            >
              Remove All
            </button>
          </div>

          <div class="col-md-9 mt-5">
            <div v-if="currentProduct">
              <h4 style="text-align: center">Details Product</h4>
              <br />
              <table id="tables">
                <tr>
                  <th>Product Name</th>
                  <th>Price</th>
                  <th>Description</th>
                  <th>Image</th>
                  <th>Action</th>
                </tr>
                <tr>
                  <td>{{ currentProduct.product_name }}</td>
                  <td>{{ currentProduct.price }}</td>
                  <td>{{ currentProduct.description }}</td>
                  <td>
                    <span v-for="(file, index) in fileInfos" :key="index">
                      <span v-if="index + 1 == currentProduct.id">
                        <img
                          :src="file.url"
                          :alt="file.name"
                          height="80px"
                          border="0px"
                        />
                      </span>
                    </span>
                  </td>
                  <td>
                    <a
                      class="btn btn-warning"
                      :href="'/products/' + currentProduct.id"
                      >Edit</a
                    >
                  </td>
                </tr>
              </table>
            </div>
            <div v-else></div>
          </div>
        </div>
      </div>
    </section>

    <!-- 
    <div class="col-md-3">
      <br />
      <h4 style="text-align: center">Products List</h4>
      <br />
      <ul class="list-group">
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(product, index) in products"
          :key="index"
          @click="setActiveProduct(product, index)"
        >
          {{ product.product_name }}
        </li>
      </ul>

      <button class="m-3 btn btn-sm btn-danger" @click="removeAllProducts">
        Remove All
      </button>
    </div> -->
  </div>
</template>

<script>
/* eslint-disable */
import ProductDataService from '../services/ProductDataService';
export default {
  name: 'products-data',
  data() {
    return {
      message: '',
      fileInfos: [],
      products: [],
      currentProduct: null,
      currentIndex: -1,
      product_name: ''
    };
  },
  methods: {
    retrieveProducts() {
      ProductDataService.getAll()
        .then(response => {
          this.products = response.data;
          console.log(response.data);
          return ProductDataService.getFiles();
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveProducts();
      this.currentProduct = null;
      this.currentIndex = -1;
    },

    setActiveProduct(product, index) {
      this.currentProduct = product;
      this.currentIndex = index;
      ProductDataService.getFiles().then(response => {
        this.fileInfos = response.data;
      });
    },
    removeAllProducts() {
      ProductDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },

    searchProductName() {
      ProductDataService.findByTitle(this.product_name)
        .then(response => {
          this.products = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveProducts();
  }
};
</script>

<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}

.template {
  margin-top: 50px;
  max-width: 100%;
}

#tables {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#tables td,
#tables th {
  border: 1px solid #ddd;
  padding: 8px;
}

#tables tr:nth-child(even) {
  background-color: white;
}

#tables tr:hover {
  background-color: white;
}

#tables th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: center;
  background-color: #4caf50;
  color: white;
}
</style>
