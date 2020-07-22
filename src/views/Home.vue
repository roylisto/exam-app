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
          <img
            src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/9c71260d-bab9-4036-a3e5-2c192901e874.png"
            style="height: 21rem"
          />
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
  },
  mounted() {
    localStorage.clear();
  },
};
</script>
