<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container-fluid">
    <router-link class="navbar-brand" to="/">Just the Recipe</router-link>
    <button class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ in: show }">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       <!--  <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li> -->
        <li class="nav-item" data-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <router-link class="nav-link"
                      to="/recipes"
                      @click="toggleNavbar">Recipes</router-link>
        </li>
        <li class="nav-item" data-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <router-link class="nav-link"
                       to="/new"
                       @click="toggleNavbar">Add a recipe</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<script>
export default {
    data() {
        return {
            show: true,
        };
    },
    methods: {
        toggleNavbar() {
            this.show = !this.show;
        },
    },
};
</script>
<style scoped>

.navbar-dark .navbar-nav .nav-link {
    color:#ABABAB;
}

.navbar-dark .navbar-nav .nav-link.router-link-active {
    color:#FFFFFF;
    font-weight: bold;
}
</style>
