<template>
  <div class="home">
    Home
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {
        HelloWorld,
    },
    mounted() {
        this.$router.push('/recipes');
    },
};
</script>
