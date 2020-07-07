<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import { mapState } from "vuex";
import Footer from "../components/Footer.vue";

const states = mapState({
  welcome: state => state.dummy.welcome
});

export default {
  name: "app",
  computed: { ...states },
  components: {
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,700;1,800;1,900&display=swap");

html,
* {
  font-family: "Poppins", sans-serif;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>