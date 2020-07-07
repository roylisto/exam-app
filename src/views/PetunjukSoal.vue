<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal Subtest 1 (01-20)
      </p>
      <div class="box">
        <div class="soal-petunjuk">
          <p>
            Soal-soal 01-20 terdiri atas kalimat-kalimat Pada setiap kalimat satu
            kata yang hilang dan disediakan 5 (lima) kata pilihan sebagai
            penggantinya Pilihlah kata yang tepat yang dapat menyempurnakan
            kalimat itu.
          </p>
        </div>
        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p>Seekor kuda memunyai kesamaan terbanyak dengan seekor....................</p>
        </div>
        
        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p>Seekor kuda memunyai kesamaan terbanyak dengan seekor....................</p>
        </div>
        
        <b-button expanded type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: 'subtes1', jenis: 'ist'}}" style="margin-top: 2rem"
        >Mulai test</b-button>
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
