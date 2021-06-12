<template>
  <div class="acc_type">
    <div class="img_wraper mb-4">
      <img src="../assets/media/logo.png" alt="">
    </div>

    <div class="title_wraper mt-4">
      <h3 class="mb-4"> أنواع المستخدمين </h3>
      <p> قم بتسجيل دخول بإدخالك للبيانات التالية </p>
    </div>

    <div class="btns_wraper mt-4">
      <router-link to="/" class="my-2"> حساب عميل </router-link>
      <router-link to="/" class="my-2"> حساب مقدم خدمة </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.acc_type {
  min-height: 100vh;
  @include flexCenterAlignment;
  flex-direction: column;

  .img_wraper {
    width: 350px;
    img {
      width: 100%;
    }
  }

  .title_wraper {
    p {
      color: $lightGray;
    }
  }

  .btns_wraper {
    a {
      display: inline-block;
      &:first-child {
        @include mainBtnStyle;
        margin-inline: 15px;
      }

      &:last-child {
        @include secondaryBtnStyle;
        margin-inline: 15px;
      }
    }
  }
}
</style>


