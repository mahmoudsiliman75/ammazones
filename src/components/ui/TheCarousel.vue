<template>
  <div id="home_slider" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div 
        v-for="(slide, index) in carouselData"
        :key="slide.id"
        class="carousel-item"
        :class=" index == 0 ? 'active' : '' "
      >
        <img :src="slide.image" class="d-block w-100" alt="">
        <div class="overlay">
          <h2>{{ slide.title }}</h2>
        </div>
      </div>

      <a class="carousel-control-prev" href="#home_slider" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#home_slider" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['carouselData'],
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';

.carousel {
  .carousel-inner {
    min-height: 600px;
    max-height: 600px;
    .carousel-item {
      position: relative;
      img {
        min-height: 600px;
        max-height: 600px;
      }
      .overlay {
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.4);
        @include flexCenterAlignment;
        h2 {
          color: $white;
          font-size: 2.5rem;
        }
      }
    }
  }
}
</style>