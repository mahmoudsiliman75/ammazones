<template>
  <div class="register_form_wraper">
    <div class="img_wraper mb-3">
      <img src="../assets/media/logo.png" alt="">
    </div>

    <div class="title_wraper">
      <h3 class="mb-4"> إنشاء حساب </h3>
      <p> قم بإنشاء حساب بإدخالك للبيانات التالية </p>
    </div>

    <ClientRegisterForm 
      v-if="this.$route.path === '/register/client' " 
      :regData="clientRegisterData"
    />

    <ProviderRegisterForm 
      v-if="this.$route.path === '/register/provider' "
    />
  </div>
</template>

<script>
import ClientRegisterForm from '../components/forms/ClientRegisterForm.vue';
import ProviderRegisterForm from '../components/forms/ProviderRegisterForm.vue';

export default {
  components: {
    ClientRegisterForm,
    ProviderRegisterForm
  },
  data() {
    return {
      clientRegisterData: {
        type: 'user',
        name: '',
        user_name: '',
        email: '',
        phone: '',
        area: '',
        city_id: '',
        avatar: '',
        password: '',
        password_confirmation: ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

.register_form_wraper {
  padding: 25px 0;
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
}
</style>