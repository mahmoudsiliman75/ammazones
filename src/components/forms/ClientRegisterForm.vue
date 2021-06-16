<template>
  <form class="client_register_form" @submit.prevent="submitForm">
    <p class="create_acc_text">  لديك حساب بالفعل؟ <router-link :to="{name: 'LoginForm', params: { type: this.$route.params.type } }"> تسجيل دخول </router-link> </p>
    <div class="row justify-content-center">

      <div class="col-12 my-2 d-flex justify-content-center align-items-center">
        <div class="form-group field_img mt-4">
          <input id="pro_img" name="image" type='file' @change="handleFileInputChange" />
          <label for="pro_img">
            <img id="img" src="../../assets/media/img_placeholder.png" alt="your image" />
          </label>
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!avatarIsValid"
          >
            {{avatarValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="text" class="form-control" id="name" v-model.trim="regData.name" placeholder="الإسم">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!nameIsValid"
          >
            {{nameValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="text" class="form-control" id="user_name" v-model.trim="regData.user_name" placeholder="إسم المستخدم">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="tele" class="form-control" id="phone" v-model.trim="regData.phone" placeholder="رقم الجوال">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!phoneIsValid"
          >
            {{phoneValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="email" class="form-control" id="email" v-model.trim="regData.email" placeholder="البريد الإلكترونى">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!emailIsValid"
          >
            {{emailValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <select class="form-control" v-model="regData.city_id" @change="getAreas">
            <option value=""  disabled> المدينة </option>
            <option
              v-for="country in countries"
              :key="country.id"
              :value="country.id"
            > 
              {{country.name}} 
            </option>
          </select>
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!cityIsValid"
          >
            {{cityValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <select class="form-control" v-model="regData.area">
            <option value="" disabled> المنطقة </option>
            <option
              v-for="area in areas"
              :key="area.id"
              :value="area.name"
            > 
              {{area.name}} 
            </option>
          </select>
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!areaIsValid"
          >
            {{areaValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="password" class="form-control" id="password" v-model.trim="regData.password"  placeholder="كلمة المرور">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!passwordIsValid"
          >
            {{passwordValidationMsg}}
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="password" class="form-control" id="confirm_password" v-model.trim="regData.password_confirmation"  placeholder="تأكيد كلمةالمرور">
          <div 
            class="alert alert-danger mt-3 p-1" 
            role="alert" 
            v-if="!password_confirmationIsValid"
          >
            {{password_confirmationValidationMsg}}
          </div>
        </div>
      </div>
    </div>

    <div class="btns_wraper mt-4">
      <button class="my-2"> تسجيل دخول </button>
    </div>
  </form>
</template>

<script>
import axios from "axios";

export default {
  props: ["regData"],

  data() {
    return {
      countries: null,
      areas: null, 
      data: new FormData(),

      avatarIsValid: true,
      avatarValidationMsg: '',

      nameIsValid: true,
      nameValidationMsg: '',

      phoneIsValid: true,
      phoneValidationMsg: '',

      emailIsValid: true,
      emailValidationMsg: '',

      cityIsValid: true,
      cityValidationMsg: '',

      areaIsValid: true,
      areaValidationMsg: '',

      passwordIsValid: true,
      passwordValidationMsg: '',

      password_confirmationIsValid: true,
      password_confirmationValidationMsg: '',
    }
  },

  mounted() {
    axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/all-countries')
    .then( res => this.countries = res.data.data)
  },

  methods: {
    showAlert(msg) {
      this.$swal({
        icon: 'success',
        text: msg,
      });
    },

    handleFileInputChange(e) {
      console.log(e.target)
      this.data.append('avatar', e.target.files[0]);
      if (e.target.files && e.target.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
          document.querySelector('#img').setAttribute('src', e.target.result);
        };
        reader.readAsDataURL(e.target.files[0]);
      }
    },

    getAreas() {
      axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/cities', { 
        params: { country_id: this.regData.city_id } 
      })
      .then(res => this.areas = res.data.data)
    },

    submitForm() {
      this.data.append('type', 'user');
      this.data.append('name', this.regData.name);
      this.data.append('email', this.regData.email);
      this.data.append('phone', this.regData.phone);
      this.data.append('area', this.regData.area);
      this.data.append('city_id', this.regData.city_id);
      this.data.append('password', this.regData.password);
      this.data.append('password_confirmation', this.regData.password_confirmation);

      this.avatarIsValid = true;
      this.nameIsValid = true;
      this.phoneIsValid = true;
      this.emailIsValid = true;
      this.cityIsValid = true;
      this.areaIsValid = true;
      this.passwordIsValid = true;
      this.password_confirmationIsValid = true;

      axios.post('http://elsaed.rmal.com.sa/ammazones/public/api/auth/clientRegister', this.data)
      .then( res => {
        if ( res.data.status == true ) {
          this.showAlert(res.data.msg);
          this.regData.name = '';
          this.regData.user_name = '';
          this.regData.email = '';
          this.regData.phone = '';
          this.regData.area = '';
          this.regData.city_id = '';
          this.regData.password = '';
          this.regData.password_confirmation = '';

          this.saveUserDataAtLocalStorage(res);

          this.$router.replace('/');
        }
      })
      .catch( error => {
        console.log(error.response.data ) 
        if ( error.response.data.field == 'avatar' ) {
          this.avatarIsValid = false;
          this.avatarValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'name' ) {
          this.nameIsValid = false;
          this.nameValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'phone' ) {
          this.phoneIsValid = false;
          this.phoneValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'email' ) {
          this.emailIsValid = false;
          this.emailValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'city_id' ) {
          this.cityIsValid = false;
          this.cityValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'area' ) {
          this.areaIsValid = false;
          this.areaValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'password' ) {
          this.passwordIsValid = false;
          this.passwordValidationMsg = error.response.data.msg;
        } else if ( error.response.data.field == 'password_confirmation' ) {
          this.password_confirmationIsValid = false;
          this.password_confirmationValidationMsg = error.response.data.msg;
        }
      });
    },

    saveUserDataAtLocalStorage(res) {
      localStorage.setItem('user_token', res.data.data.token);
      localStorage.setItem('user_type', res.data.data.type);
      localStorage.setItem('user_data', JSON.stringify(res.data.data));
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';

form {
  width: 800px;

  .btns_wraper {
    button {
      display: inline-block;
      @include mainBtnStyle;
      margin-inline: 15px;
    }
  }

  .field_img {
    display: block;
    background: transparent;
    width: 250px;
    height: 150px;
    & > input {
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.4);
      width: 100%;
      padding: 15px 5px;
      border-radius: 8px;
      margin-bottom: 15px;
      display: none;
    }
    label {
      position: relative;
      text-align: center;
      cursor: pointer;
    }
    img {
      max-width: 250px;
      height: 150px;
      border-radius: 10px;
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

@media ( max-width: 767px ) {
  form {
    width: 400px;
  }
}

</style>