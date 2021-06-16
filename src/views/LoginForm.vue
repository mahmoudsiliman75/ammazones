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
        <input type="email" class="form-control" id="email" v-model="loginData.email" placeholder="البريد الإلكتروني">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!emailIsValid"
          >
            {{emailValidationMsg}}
          </div>
      </div>

      <div class="form-group mt-4">
        <input type="password" class="form-control" id="password" v-model="loginData.password" placeholder="كلمة المرور">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!passwordIsValid"
          >
            {{passwordValidationMsg}}
          </div>
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
import axios from 'axios';

export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },

      emailIsValid: true,
      emailValidationMsg: '',

      passwordIsValid: true,
      passwordValidationMsg: '',
    }
  },

  methods: {
    showAlert(type, msg) {
      this.$swal({
        icon: type,
        text: msg,
      });
    },

    submitForm() {
      if ( this.loginData.email == '' ) {
        this.showAlert('error', 'البريد الإلكترونى لايجب ان يكون فارغ');
        return;
      } else if ( !this.loginData.email.includes('@') ) {
        this.showAlert('error', 'يجب ادخال بريد لإلكترونى صحيح');
        return;
      } else if ( this.loginData.password == '' ) {
        this.showAlert('error', 'كلمة المرور لايمكن ان تكون فارغة');
        return;
      }

      this.emailIsValid = true;
      this.passwordIsValid = true;

      axios.post('http://elsaed.rmal.com.sa/ammazones/public/api/auth/login', this.loginData)
      .then(res => {
        console.log(res.data)
        if (res.data.status === true ) {
          this.showAlert( 'success', res.data.msg );
        }
      })
      .catch ( error => {
        console.log(error.response.data)
        if ( error.response.data.field === 'email' ) {
          this.emailIsValid = false;
          this.emailValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field === 'password' ) {
          this.passwordIsValid = false;
          this.passwordValidationMsg = error.response.data.msg;
        }
      })
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