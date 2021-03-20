<template>
  <div class="container">
    <div class="col-md-12 mt-4 text-center">
      <h4>OUR PRODUCT</h4>
    </div>
    <div class="row">
      <div class="col-md-4 ms-auto mt-4">
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

    <!-- Projects -->
    <section id="projects">
      <div class="container">
        <div class="row">
          <div
            class="card"
            :class="{ active: index == currentIndex }"
            v-for="(product, index) in products"
            :key="index"
            @click="setActiveProduct(product, index)"
            style="width: 18rem;"
          >
            <div class="card-body justify-content-center text-center">
              <div class="col-4 ">
                <div
                  v-for="(file, index) in fileInfos"
                  :key="index"
                  align-center
                >
                  <div v-if="index + 1 == product.id">
                    <img
                      :src="file.url"
                      :alt="file.name"
                      height="220rem"
                      width="170rem"
                      border="0px"
                    />
                  </div>
                </div>
              </div>
              <h5 class="card-title mt-3">
                {{ product.product_name }}
              </h5>
              <p class="card-text">
                {{ '$' + product.price }}
              </p>
              <button
                type="button"
                class="btn btn-outline-primary"
                data-toggle="modal"
                data-target="#myModal"
              >
                Show Details
              </button>
              <div v-if="currentProduct">
                <div class="modal" id="myModal">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="modal-title">
                          {{ currentProduct.product_name }}
                        </h4>
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                      </div>
                      <div class="modal-body">
                        <p class="card-text">
                          {{ currentProduct.description }}
                        </p>
                      </div>
                      <!-- Modal footer -->
                      <div class="modal-footer">
                        <p class="card-text">
                          Color Option:
                        </p>
                        <p class="colorPicker" style="background: #FC6F9A"></p>
                        <p class="colorPicker" style="background: #DEEBD6"></p>
                        <p class="colorPicker" style="background: #75F5E1"></p>
                        <p class="colorPicker" style="background: #8CEE86"></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br /><br />
  </div>
</template>

<script>
/* eslint-disable */
import ProductDataService from '../services/ProductDataService';
export default {
  name: 'products-list',
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
          ProductDataService.getFiles().then(response => {
            this.fileInfos = response.data;
          });
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
.aligncenter {
  text-align: center;
}
center {
  display: block;
  margin: 0 auto;
}
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

<style scoped src="./../assets/style.css"></style>
