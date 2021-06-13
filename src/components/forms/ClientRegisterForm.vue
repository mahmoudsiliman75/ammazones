<template>
  <form class="client_register_form" @submit.prevent="submitForm">
    <p class="create_acc_text">  لديك حساب بالفعل؟ <router-link :to="{name: 'LoginForm', params: { type: this.$route.params.type } }"> تسجيل دخول </router-link> </p>
    <div class="row justify-content-center">
      <div class="col-12 my-2">
        <div class="form-group mt-4">
          <input type="file" class="form-control" @change="handleFileInputChange">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="text" class="form-control" id="name" v-model="regData.name" placeholder="الإسم">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="text" class="form-control" id="user_name" placeholder="إسم المستخدم">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="tele" class="form-control" id="phone" v-model="regData.phone" placeholder="رقم الجوال">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="email" class="form-control" id="email" v-model="regData.email" placeholder="البريد الإلكترونى">
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
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <select class="form-control" v-model="regData.area">
            <option value="" disabled> المنطقة </option>
            <option
              v-for="area in areas"
              :key="area.id"
              :value="area.id"
            > 
              {{area.name}} 
            </option>
          </select>
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="password" class="form-control" id="password" v-model="regData.password"  placeholder="كلمة المرور">
        </div>
      </div>

      <div class="col-12 col-md-6 my-2">
        <div class="form-group mt-4">
          <input type="password" class="form-control" id="confirm_password" v-model="regData.password_confirmation"  placeholder="تأكيد كلمةالمرور">
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
    }
  },

  mounted() {
    axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/all-countries')
    .then( res => {
      this.countries = res.data.data;
    })
  },

  methods: {
    handleFileInputChange(e) {
      this.data.append('avatar', e.target.files[0]); 
    },

    getAreas() {
      axios.get('http://elsaed.rmal.com.sa/ammazones/public/api/general/cities', { 
        params: { country_id: this.regData.city_id } 
      })
      .then( res => {
        this.areas = res.data.data;
      })
    },

    submitForm() {
      axios.post('http://elsaed.rmal.com.sa/ammazones/public/api/auth/clientRegister',this.data)
      .then( res => console.log(res) )
      .catch( error => console.log(error) );
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