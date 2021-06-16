<template>
  <div class="home">
    <!-- START:: HOME SLIDER -->
    <TheCarousel
      :carouselData="galleries"
    />
    <!-- START:: HOME SLIDER -->

    <!-- START:: TOP VISITED SECTION -->
    <div class="top_visited py-5">
      <div class="header_wraper mb-4">
        <h2> الأكثر زيارة </h2>
      </div>
      <div class="container">
        <div class="row justify-content-center">

          <div
            v-for=" card in top_visited "
            :key=" card.id "
            class="col-9 col-md-3 my-3"
          >
            <div class="card">
              <div class="card_img">
                <img :src="card.main_image">
              </div>

              <div class="card_body">
                <h5 class="title">
                  {{ card.name }}
                  <RatingStars
                    :rate="card.rate"
                  />
                  <span> {{ card.rate }} </span>
                </h5>
                <h6 class="location">
                  <img src="../assets/media/icons/location.png">
                  {{ card.location }}
                </h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- END:: TOP VISITED SECTION -->

    <!-- START:: TOP RATED SECTION -->
    <div class="top_rated py-5">
      <div class="header_wraper mb-4">
        <h2> الأعلى تقيم </h2>
      </div>
      <div class="container">
        <div class="row justify-content-center">

          <div
            v-for=" card in top_rated "
            :key=" card.id "
            class="col-9 col-md-3 my-3"
          >
            <div class="card">
              <div class="card_img">
                <img :src="card.main_image">
              </div>

              <div class="card_body">
                <h5 class="title">
                  {{ card.name }}
                  <RatingStars
                    :rate="card.rate"
                  />
                  <span> {{ card.rate }} </span>
                </h5>
                <h6 class="location">
                  <img src="../assets/media/icons/location.png">
                  {{ card.location }}
                </h6>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- END:: TOP RATED SECTION -->

  </div>
</template> 

<script>
import axios from 'axios';
import TheCarousel from '../components/ui/TheCarousel.vue';
import RatingStars from '../components/ui/RatingStars';

export default {
  components: {
    TheCarousel,
    RatingStars
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

.home {
  .top_visited, 
  .top_rated {
    .header_wraper {
      @include flexCenterAlignment;
      h2 {
        color: $mainColor;
      }
    }

    .card {
      border: none;
      .card_img {
        img {
          width: 100%;
          min-height: 200px;
          max-height: 200px;
          @include borderRadius(8px);
        }
      }
      .card_body {
        margin-top: 10px;
        text-align: start;
        .title,
        .location {
          color: $mainColor;
        }
        .title {
          @include flexStartAlignment;
          flex-wrap: wrap;
          span {
            margin-inline-start: 5px;
            font-size: 15px;
            color: $lighterGray;
          }
        }
        .location {
          img {
            width: 15px;
            height: 20px;
          }
        }
      }
    }
  }
}
</style>
