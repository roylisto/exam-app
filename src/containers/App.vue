<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import { mapState } from "vuex";

  const states = mapState({
    welcome: (state) => state.dummy.welcome,
  });

  export default {
    name: "app",
    computed: { ...states },
  };
</script>

<style lang="scss">
  // Import Bulma's core
  @import "~bulma/sass/utilities/_all";

  // Set your colors
  $primary: #2799fa;
  $primary-invert: findColorInvert($primary);
  $twitter: #000000;
  $twitter-invert: findColorInvert($twitter);

  // Setup $colors to use as bulma classes (e.g. 'is-twitter')
  $colors: (
    "white": (
      $white,
      $black,
    ),
    "black": (
      $black,
      $white,
    ),
    "light": (
      $light,
      $light-invert,
    ),
    "dark": (
      $dark,
      $dark-invert,
    ),
    "primary": (
      $primary,
      $primary-invert,
    ),
    "info": (
      $info,
      $info-invert,
    ),
    "success": (
      $success,
      $success-invert,
    ),
    "warning": (
      $warning,
      $warning-invert,
    ),
    "danger": (
      $danger,
      $danger-invert,
    ),
    "twitter": (
      $twitter,
      $twitter-invert,
    ),
  );

  // navbar
  $navbar-padding-horizontal: 3rem;

  // footer
  $footer-background-color: $primary;
  $footer-color: white;

  // button
  $button-border-color: white;

  // card
  $card-background-color: $primary;
  $card-color: white;

  // Links
  $link: $primary;
  $link-invert: $primary-invert;
  $link-focus-border: $primary;

  // Import Bulma and Buefy styles
  @import "~bulma";
  @import "~buefy/src/scss/buefy";
</style>
