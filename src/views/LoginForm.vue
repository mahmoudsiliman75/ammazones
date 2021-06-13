<template>
  <div class="login_form_wraper">
    <div class="img_wraper mb-3">
      <img src="../assets/media/logo.png" alt="">
    </div>

    <div class="title_wraper">
      <h3 class="mb-4"> تسجيل دخول </h3>
      <p> قم بتسجيل دخول بإدخالك للبيانات التالية </p>
    </div>

    <form class="mt-4" @submit.prevent="submitForm">
      <div class="form-group mt-4">
        <input type="email" class="form-control" id="email" placeholder="البريد الإلكتروني">
      </div>

      <div class="form-group mt-4">
        <input type="password" class="form-control" id="password" placeholder="كلمة المرور">
      </div>

      <p class="forget_text"> نسيت كلمة المرور </p>

      <div class="btns_wraper mt-4">
        <button class="my-2"> تسجيل دخول </button>
      </div>

      <p class="create_acc_text"> ليس لديك حساب؟ <router-link :to="{name: 'RegisterForm', params: { type: this.$route.params.type } }"> إنشاء حساب </router-link> </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      formIsValid: true,
    }
  },

  mounted() {
    console.log(this.$route.params.type);
  },

  methods: {
    showAlert(msg) {
      this.$swal({
        icon: 'error',
        text: msg,
      });
    },

    submitForm() {
      this.formIsValid = true;
      if ( this.email === '' || !this.email.includes('@') || this.password === '' ) {
        this.showAlert('برجاء ادخال بريد الكترونى و كلمة مرور صحيحين');
        return
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.login_form_wraper {
  min-height: 100vh;
  @include flexCenterAlignment;
  flex-direction: column;

  .img_wraper {
    width: 300px;
    img {
      width: 100%;
    }
  }

  .title_wraper {
    p {
      color: $lightGray;
    }
  }

  form {
    .form-group {
      width: 450px;
    }

    @media ( max-width: 600px ) {
      .form-group {
        width: 300px;
      }
    }

    .forget_text {
      color: $midRed;
      font-size: 13px;
      text-decoration: underline;
    }

    .btns_wraper {
      button {
        display: inline-block;
        @include mainBtnStyle;
        margin-inline: 15px;
      }
    }

    .create_acc_text {
      margin-top: 20px;
      color: $midGray;
      font-size: 13px;
      a {
        color: $secondaryColor;
        text-decoration: underline;
      }
    }
  }
}
</style>