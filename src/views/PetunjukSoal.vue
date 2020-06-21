<template>
  <div>
    <Navbar />
    <div class="container">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal Subtest 1 (01-20)
      </p>
      <div class="box">
        <p>
          Soal-soal 01-20 terdiri atas kalimat-kalimat Pada setiap kalimat satu
          kata yang hilang dan disediakan 5 (lima) kata pilihan sebagai
          penggantinya Pilihlah kata yang tepat yang dapat menyempurnakan
          kalimat itu.
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "rincian-test",
  components: {
    Navbar,
    Footer
  },
  methods: {
    login() {
      console.log("login");
    }
  }
};
</script>
