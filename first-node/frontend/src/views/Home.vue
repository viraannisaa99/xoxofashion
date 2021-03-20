<template>
  <div>
    <div class="container-fluid">
      <section class="img text-center mt-3">
        <img
          src="../../header_img/page1.png"
          :style="{ height: '400px', width: '100%' }"
        />
      </section>

      <section id="new">
        <div class="row">
          <div class="row text-center">
            <div class="col">
              <h4>NEW THIS WEEK</h4>
            </div>
          </div>
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../../header_img/dress2.jpg"
                  alt=""
                  style="height:100%; width:100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Knee Length Dress</h5>
                  <p class="card-text">
                    Plaid Long Sleeves A-line Knee Length Vintage/Casual Dress.
                    The brilliant attire creates a dramatic canvas with amazing
                    print work.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">$65 | Stock: 5 pc</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="../../header_img/wedges.jpg"
                  alt=""
                  style="height:100%; width:100%"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Lift Off Cork Wedges</h5>
                  <p class="card-text">
                    Fun slip on platform wedges with gold scale effect uppers
                    and lightweight cork heel, perfect for any summer outfit.
                  </p>
                  <p class="card-text">
                    <small class="text-muted">$45 | Stock: 3 pc</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <section class="jumbotron text-center mt-5">
        <div class="row text-center mt-5">
          <div class="col">
            <h4>XOXO FASHION SHOP</h4>
          </div>
        </div>
        <div class="container mt-5">
          <div class="row justify-content-center fs-5 text-center">
            <div class="col-md-12">
              <p style="opacity:0.8">
                XOXO FASHION is here to provide the best in women's fashion
                trends. We provide the most complete collections such as tops,
                dresses, bottoms, skirts, pants, and outerwear. Besides that,
                you can find high heels, boots, to slip-ons and sandals that are
                comfortable to use. You also need a bag to support your
                appearance, there are various choices of handbags, shoulder
                bags, and tote bags. Don't miss the attractive discounts that we
                will provide every month. See our header for more information
                about the discount!
              </p>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fill-opacity="10"
            d="M0,160L60,154.7C120,149,240,139,360,138.7C480,139,600,149,720,170.7C840,192,960,224,1080,208C1200,192,1320,128,1380,96L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </section>
      <!-- End Jumbotron -->

      <section class="text-center">
        <h4 style="text-align: center">XOXO BEST PRODUCT</h4>
        <br /><br />
        <CarouselCard
          :interval="7000"
          height="300px"
          type="card"
          arrow="always"
        >
          <CarouselCardItem v-for="(file, index) in fileInfos" :key="index">
            <img :src="file.url" height="300px" border="0px" />
          </CarouselCardItem>
        </CarouselCard>
      </section>
      <br /><br /><br /><br /><br /><br />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ProductDataService from '../services/ProductDataService';
import { CarouselCard, CarouselCardItem } from 'vue-carousel-card';
import 'vue-carousel-card/styles/index.css';

import UserService from '../services/user.service';

export default {
  components: { CarouselCard, CarouselCardItem },
  name: 'Home',
  data() {
    return {
      content: '',
      message: '',
      fileInfos: []
    };
  },

  mounted() {
    UserService.getPublicContent().then(
      response => {
        this.content = response.data;
      },
      error => {
        this.content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );

    ProductDataService.getFiles().then(response => {
      this.fileInfos = response.data;
    });
  }
};
</script>

<style scoped src="./../assets/style.css"></style>
