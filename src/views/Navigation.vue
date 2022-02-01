<template>
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Just the Recipe</a>
    <button class="navbar-toggler"
    type="button"
    data-bs-toggle="collapse"
    data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/recipes">Recipes</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/new">Add a recipe</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
<style scoped>

.navbar-dark .navbar-nav .nav-link {
    color:#ABABAB;
}

.navbar-dark .navbar-nav .nav-link.router-link-active {
    color:#FFFFFF;
    font-weight: bold;
}
</style>
