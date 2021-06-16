<template>
  <div class="rating">
    <!-- START:: ZERO STARS -->
    <span v-if="rate == '0'">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: ZERO STARS -->
    
    <!-- START:: ONE STARS -->
    <span v-if="rate == '1'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: ONE STARS -->

    <!-- START:: ONE AND HALF STARS -->
    <span v-if="rate == '1.5'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_half.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: ONE AND HALF STARS -->

    <!-- START:: TWO STARS -->
    <span v-if="rate == '2'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: TWO STARS -->

    <!-- START:: TWO AND HALF STARS -->
    <span v-if="rate == '2.5'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_half.png">
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: TWO AND HALF STARS -->

    <!-- START:: THREE STARS -->
    <span v-if="rate == '3'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: THREE STARS -->

    <!-- START:: THREE AND HALF STARS -->
    <span v-if="rate == '3.5'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_half.png">
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: THREE AND HALF STARS -->

    <!-- START:: FOUR STARS -->
    <span v-if="rate == '4'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star.png">
    </span>
    <!-- END:: FOUR STARS -->

    <!-- START:: FOUR AND HALF STARS -->
    <span v-if="rate == '4.5'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_half.png">
    </span>
    <!-- END:: FOUR AND HALF STARS -->

    <!-- START:: FIVE STARS -->
    <span v-if="rate == '5'">
      <img src="../../assets/media/icons/star_gold.png">
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
      <img src="../../assets/media/icons/star_gold.png"> 
    </span>
    <!-- END:: FIVE STARS -->
  </div>
</template>

<script>
export default {
  props: ['rate']
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';

.rating {
  margin-inline-start: 6px;
}
</style>