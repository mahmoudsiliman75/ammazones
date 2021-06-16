<template>
  <div class="home">
    <TheCarousel
      :carouselData="galleries"
    />


  </div>
</template> 

<script>
import axios from 'axios';
import TheCarousel from '../components/ui/TheCarousel.vue';

export default {
  components: {
    TheCarousel
  },

  data() {
    return {
      galleries: null,
      top_visited: null,
      top_rated: null,
    }
  },

  mounted() {
    axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/homePage')
    .then( res => {
      this.galleries = res.data.data[0].galleries;
      this.top_visited = res.data.data[0].top_visited;
      this.top_rated = res.data.data[0].top_rated;
      console.log(this.galleries);
      console.log(this.top_visited);
      console.log(this.top_rated);
    })
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/main.scss';


</style>
