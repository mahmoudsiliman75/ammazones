<template>
  <div class="home">
    <h1>Welcome to Home Page"</h1>
  </div>
</template> 

<script>
import axios from 'axios';

export default {
  data() {
    return {
      homeData: null,
    }
  },

  mounted() {
    axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/homePage')
    .then( res => {
      this.homeData = res.data.data[0] 
      console.log(this.homeData);
    })
  }
};
</script>

<style scoped lang="scss">
@import '../assets/sass/main.scss';

h1 {
  color: $mainColor;
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
</style>
