<template>
  <div id="app">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container-fluid">
          <a class="navbar-brand" @click.prevent
            ><img src="../header_img/logo.png" alt="" height="60"
          /></a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav ms-auto">
              <a class="nav-link"
                ><router-link to="/home" class="nav-link">Home </router-link></a
              >
              <a class="nav-link">
                <router-link to="/show-images" class="nav-link"
                  >Products</router-link
                >
              </a>
              <!-- <a v-if="showAdminBoard" class="nav-link">
                <router-link to="/add-product" class="nav-link"
                  >Add Product</router-link
                >
              </a> -->
              <a v-if="showAdminBoard" class="nav-link">
                <router-link to="/products" class="nav-link"
                  >Products Data</router-link
                >
              </a>

              <a v-if="showModeratorBoard" class="nav-link">
                <router-link to="/mod" class="nav-link"
                  >Moderator Board</router-link
                >
              </a>
              <a v-if="currentUser" class="nav-link">
                <router-link to="/user" class="nav-link"
                  >Contact Us</router-link
                >
              </a>
            </div>
            <div v-if="!currentUser" class="navbar-nav">
              <a class="nav-link">
                <router-link to="/register" class="nav-link">
                  <font-awesome-icon icon="user-plus" />Sign Up
                </router-link>
              </a>
              <a class="nav-link">
                <router-link to="/login" class="nav-link">
                  <font-awesome-icon icon="sign-in-alt" />Login
                </router-link>
              </a>
            </div>
            <div v-if="currentUser" class="navbar-nav">
              <a class="nav-link">
                <router-link to="/profile" class="nav-link">
                  <font-awesome-icon icon="user" />
                  {{ currentUser.username }}
                </router-link>
              </a>
              <a class="nav-link">
                <a class="nav-link" href @click.prevent="logOut">
                  <font-awesome-icon icon="sign-out-alt" />LogOut
                </a>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="container-fluid">
      <router-view />
    </div>
    <footer class="container-fluid footer">
      <p class="float-end"><a href="#">Back to top</a></p>
      <p>
        &copy; 2021 Xoxo Fashion, Inc. &middot;
        <a href="#">Privacy</a> &middot; <a href="#">Terms</a>
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
    showAdminBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_ADMIN');
      }

      return false;
    },
    showModeratorBoard() {
      if (this.currentUser && this.currentUser.roles) {
        return this.currentUser.roles.includes('ROLE_MODERATOR');
      }

      return false;
    }
  },
  methods: {
    logOut() {
      this.$store.dispatch('auth/logout');
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped src="./assets/style.css"></style>
