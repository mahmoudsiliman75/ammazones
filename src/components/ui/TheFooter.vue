<template>
  <footer class="bg-light">
    <div class="container-fluid">
      <div class="row justify-content-around">
        <div class="col-4 col-md-2 order-2 order-md-1">
          <div class="header_wraper">
            <h5> روابط مهمة </h5>
          </div>
          <ul class="list-unstyled links_list">
            <li> 
              <router-link to="/"> أسئلة شائعة </router-link>
            </li>
            <li> 
              <router-link to="/"> الشروط و الأحكام </router-link>
            </li>
            <li> 
              <router-link to="/"> سياسة الإستخدام </router-link>
            </li>
            <li> 
              <router-link to="/"> تواصل معنا </router-link>
            </li>
          </ul>
        </div>

        <div class="col-10 col-md-6 order-1 order-md-2 mb-4 mb-md-0">
          <div class="footer_logo">
            <img src="../../assets/media/logo.png" alt="">
          </div>

          <div class="desc">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس
            المساحة، لقد تم توليد هذا النص من مولد النص العربى، 
            حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص 
            الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </div>
        </div>

        <div class="col-4 col-md-2 order-3 order-md-3">
          <div class="header_wraper">
            <h5> روابط مهمة </h5>
          </div>
          <ul class="list-unstyled links_list">
            <li> 
              <router-link to="/"> أسئلة شائعة </router-link>
            </li>
            <li> 
              <router-link to="/"> الشروط و الأحكام </router-link>
            </li>
            <li> 
              <router-link to="/"> سياسة الإستخدام </router-link>
            </li>
            <li> 
              <router-link to="/"> تواصل معنا </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';

footer {
  padding: 20px 10px;
  .header_wraper {
    text-align: start;
    color: $mainColor;
  }

  .links_list {
    padding: 0;
    margin: 0;
    li {
      text-align: start;
      font-size: 16px;
      padding-block: 15px;
      a {
        text-decoration: none;
        color: $lightGray;
        @include transitioning(0.4s);
        &:hover {
          color: $secondaryColor;
        }
      }
    }
  }

  .footer_logo {
    img {
      width: 250px;
    }
  }

  .desc {
    margin-top: 10px;
    @include textWraper;
    font-size: 15px;
  }
}
</style>