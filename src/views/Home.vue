<template>
  <div>
    <Navbar />
    <section class="hero is-medium is-bold">
      <div class="hero-body has-text-centered">
        <div class="container">
          <h1 class="title has-text-primary">
            Ketahui Minat dan Bakatmu disini !
          </h1>
          <p>
            Ikuti tes ini dan dapatkan gambaran tentang diri Anda secara akurat
            serta objektif. Ketahui apa yang unik dari diri Anda dan mengapa
            melakukan sesuatu dengan cara Anda
          </p>
          <img src="../assets/hero-image.png" alt="" />
        </div>
      </div>
    </section>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "home",
  components: {
    Navbar,
    Footer
  }
};
</script>
