<template>
  <div class="container-fluid">
    <section class="jumbotron jumbotron-fluid">
      <div class="container">
        <div class="row justify-content-center fs-6">
          <div class="col-4" style="margin-left:10px; margin-top:100px">
            <p style="opacity: 0.5;" class="mt-3">
              Xoxo Fashion/Contact Us
            </p>
            <h1 class="mt-3">
              CONTACT US
            </h1>
            <p class="mt-3">
              Get in touch with us for the inquiries you have
            </p>
            <button type="button" class="btn btn-warning mt-3">
              SEND EMAIL
            </button>
          </div>
          <div class="col-6">
            <img src="../../header_img/comp.png" />
          </div>
        </div>
      </div>
    </section>

    <div class="container">
      <section class="justify-content-center text-center">
        <div class="row text-center mb-3">
          <div class="col mt-5">
            <h4>CUSTOMER CARE</h4>
          </div>
        </div>
        <div class="card-deck">
          <div class="card">
            <img
              class="card-img-top rounded-circle mx-auto"
              src="../../header_img/woman1.png"
              alt="Card image cap"
              style="height:200px; width:200px"
            />
            <div class="card-body">
              <h5 class="card-title">Jolie Park</h5>
              <p class="card-text">
                Live Chat Service
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">098268-0278</small>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top rounded-circle mx-auto"
              src="../../header_img/woman2.png"
              alt="Card image cap"
              style="height:200px; width:200px"
            />
            <div class="card-body">
              <h5 class="card-title">Lea Choi</h5>
              <p class="card-text">
                Live Phone Service
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">098268-0278</small>
            </div>
          </div>
          <div class="card">
            <img
              class="card-img-top rounded-circle mx-auto"
              src="../../header_img/woman3.png"
              alt="Card image cap"
              style="height:200px; width:200px"
            />
            <div class="card-body">
              <h5 class="card-title">Jean Lee</h5>
              <p class="card-text">
                Email Service
              </p>
            </div>
            <div class="card-footer">
              <small class="text-muted">jean@xoxofashion.com</small>
            </div>
          </div>
        </div>
      </section>
    </div>

    <div class="container">
      <section class="jumbotron-contact mt-5">
        <div class="row text-center mb-3">
          <div class="col mt-3">
            <h4>CONTACT US</h4>
          </div>
        </div>

        <form class="row g-2 form-about mx-auto ">
          <div class="col-md-6">
            <label for="fullname" class="form-label">Full Name</label>
            <input type="text" class="form-control" id="fullname" />
          </div>
          <div class="col-md-6">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control" id="email" />
          </div>
          <div class="col-md-6">
            <label for="message" class="form-label">Message</label>
            <textarea
              type="text"
              class="form-control"
              id="message"
              style="height:100px"
            />
          </div>
          <div class="col-md-6">
            <label for="phone" class="form-label">Phone</label>
            <input type="text" class="form-control" id="phone" />
          </div>
          <div class="col-md-12 mt-3 mb-5">
            <button type="submit" class="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </section>
    </div>

    <section class="mt-5">
      <div class="container">
        <div class="row g-2">
          <div class="col-md-4 jumbotron-about">
            <h4>ADDRESS</h4>
            <p>8 Sentosa Gateway, Singapura 098269</p>
            <p>098268-0278</p>
            <p>contact.xoxo@xoxofashion.com</p>
          </div>
          <div class="col-md-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8625023245163!2d103.82085596426562!3d1.2541727122259405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1955a615a343%3A0x3094037d34e6529f!2sUniversal%20Studios%20Singapura!5e0!3m2!1sid!2sid!4v1616060825062!5m2!1sid!2sid"
              width="720"
              height="225"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
    <br /><br />
  </div>
</template>

<script>
import UserService from '../services/user.service';

export default {
  name: 'User',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getUserBoard().then(
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
  }
};
</script>

<style scoped src="./../assets/style.css"></style>
