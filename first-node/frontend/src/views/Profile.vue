<template>
  <div class="form-style-10">
    <h1>Profile<span></span></h1>
    <form>
      <div class="section"><span>1</span>Name & Roles</div>
      <div class="inner-wrap">
        <label>
          Name<input type="text" name="name" v-model="currentUser.name" disabled
        /></label>
        <label>
          Username
          <input
            type="text"
            name="username"
            v-model="currentUser.username"
            disabled
        /></label>
        <label>
          Authorization
          <input
            type="text"
            name="authorization"
            v-model="currentUser.roles"
            disabled
        /></label>
      </div>

      <div class="section"><span>2</span>Email & Token</div>
      <div class="inner-wrap">
        <label
          >Email Address
          <input type="email" name="email" v-model="currentUser.email" disabled
        /></label>
        <label
          >Token Access
          <input
            type="text"
            name="token"
            v-model="currentUser.accessToken"
            disabled
        /></label>
      </div>

      <div class="button-section">
        <input type="submit" name="update" value="Update" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if (!this.currentUser) {
      this.$router.push('/login');
    }
  }
};
</script>

<style scoped src="./../assets/form.css"></style>
