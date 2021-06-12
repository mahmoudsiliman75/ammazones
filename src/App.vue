<template>
  <div id="app">
    <div id="nav" v-if="handleShowNav">
      <router-link to="/home">Home</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    handleShowNav() {
      if (this.$route.path == "/" || this.$route.path.includes("/login")) {
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
