<template>
  <div id="nav">
    <Navigation />
  </div>
  <div style="padding-top:40px;">
    <router-view />
  </div>
</template>
<script>
import Navigation from './views/Navigation.vue';

export default {
    name: 'App',
    components: {
        Navigation,
    },
    props: {
    },
};

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html, body,#app {
  height:100%;
  background:#232323;
  color:#FFFFFF;
}
</style>
