<template>
  <nav class="navbar navbar-expand-lg">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="col-12 px-0 row">
      <div class="col-3">
        <router-link class="navbar-brand m-0 p-0" to="/">
          <img src="../../assets/media/logo.png">
        </router-link>
      </div>

      <div class="col-6 d-flex justify-content-center align-items-center">
        <form>
          <input class="form-control bg-light" type="search" placeholder="إبحث هنا" aria-label="Search">
          <button class="btn" type="submit">بحث</button>
        </form>
      </div>

      <div class="col-3 d-flex justify-content-center align-items-center">
        <router-link to="/">
          <img src="../../assets/media/icons/home.png" class="mx-3">
        </router-link>

        <router-link to="/">
          <img src="../../assets/media/icons/shopping-cart.png" class="mx-3">
        </router-link>

        <router-link to="/">
          <img src="../../assets/media/icons/heart-empty.png" class="mx-3">
        </router-link>

        <router-link to="/">
          <img src="../../assets/media/icons/Profile.png" class="mx-3">
        </router-link>
      </div>

      <div class="collapse navbar-collapse col-12 mt-3" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex justify-content-around align-items">
          <li class="nav-item dropdown_wraper">
            <span class="nav-link">
              مولات
              <img src="../../assets/media/icons/arrow-down.png">
            </span>

            <ul class="list-unstyled dropdown_menu">
              <li> 
                <router-link to="/"> مول 1 </router-link>
              </li>
              <li> 
                <router-link to="/"> مول 2 </router-link>
              </li>
              <li> 
                <router-link to="/"> مول 3 </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown_wraper">
            <span class="nav-link">
              مطاعم
              <img src="../../assets/media/icons/arrow-down.png">
            </span>

            <ul class="list-unstyled dropdown_menu">
              <li> 
                <router-link to="/"> مطعم 1 </router-link>
              </li>
              <li> 
                <router-link to="/"> مطعم 2 </router-link>
              </li>
              <li> 
                <router-link to="/"> مطعم 3 </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item dropdown_wraper">
            <span class="nav-link">
              كافيهات
              <img src="../../assets/media/icons/arrow-down.png">
            </span>

            <ul class="list-unstyled dropdown_menu">
              <li> 
                <router-link to="/"> كافيه 1 </router-link>
              </li>
              <li> 
                <router-link to="/"> كافيه 2 </router-link>
              </li>
              <li> 
                <router-link to="/"> كافيه 3 </router-link>
              </li>
            </ul>
          </li>

          <li class="nav-item">
            <span class="nav-link">
              أماكن ترفيه
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/sass/main.scss';

nav {
  .navbar-brand {
    img {
      width: 140px;
      height: 60px;
    }
  }

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }

  form {
    border-radius: 25px;
    @include simpleShadow;
    @include flexCenterAlignment;
    width: 100%;
    input {
      border: none;
      border-radius: 0 25px 25px 0;
      width: 80%;
      &:focus {
        box-shadow: none;
      }
    }
    button {
      border: none;
      background-color: $secondaryColor;
      color: $mainColor;
      font-weight: 600;
      border-radius: 25px 0 0 25px;
      width: 20%;
    }
  }

  .navbar-nav {
    width: 100%;
    .nav-item {
      &.dropdown_wraper {
        width: 20%;
        position: relative;
        &:hover {
          .dropdown_menu {
            display: block;
          }
        }

        .dropdown_menu {
          padding: 0;
          margin: 0;
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          border: 1px solid $mainColor;
          @include borderRadius(5px);
          display: none;
          z-index: 10;
          @include transitioning(0.4s);
          li {
            padding-block: 8px;
            padding-inline-start: 10px;
            text-align: start;
            background-color: $white;
            border-bottom: 1px solid $mainColor;
            @include transitioning(0.4s);
            &:last-child {
              border-bottom: none;
            }
            &:hover {
              background-color: #f2f2f2;
              a {
                color: $secondaryColor;
              }
            }
            a {
              text-decoration: none;
              color: $mainColor;
              @include transitioning(0.4s); 
              &:hover {
                color: $secondaryColor;
              }
            }
          }
        }
      }
    }
  }
}
</style>