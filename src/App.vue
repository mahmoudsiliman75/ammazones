<template>
  <div id="app">
    <NavBar
      v-if="handleShowNav"
    />
    <router-view />
  </div>
</template>

<script>
import NavBar from './components/ui/NavBar.vue';

export default {
  components: {
    NavBar
  },

  computed: {
    handleShowNav() {
      if (this.$route.path == "/acctype" || this.$route.path.includes("/login") || this.$route.path.includes("/register")) {
        return false;
      }
      else {
        return true;
      }
    },
  },
};
</script>

<style lang="scss">
@import './assets/sass/main.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
