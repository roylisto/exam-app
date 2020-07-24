<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (61-76)
      </p>
      <div class="box">
        <p class="subtitle has-text-centered">
          Untuk mengerjakan soal selanjutnya anda harus menghafalkan kata-kata yang terdapat pada daftar kata berikut ini selama 3 menit
        </p>
        <p class="subtitle has-text-centered">
          Dalam mengerjakan tes ini diperlukan kejujuran dari saudara. Cukup hafalkan saja kata yang tersedia tanpa mencorat-coret atau mencatat.
        </p>
        <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/hafal-soal', query: {paket: bagianSoal, jenis: 'ist'}}" style="margin-top: 2rem"
          >Daftar Kata</b-button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";

export default {
  name: "rincian-test",
  data: () => ({
    pilganbutton: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ],
    jawaban: [],
  }),
  components: {
    Navbar,
    Footer
  },
  computed: {
    bagianSoal() {
      return this.$route.query.paket;
    },
    gambarURL() {
      return process.env.VUE_APP_IMAGE_URL
    },
  },
};
</script>


<style>
.radio-gbr-group {
  margin: 2rem 0;
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}
.radio-gbr-group .radio {
  margin: .20em .25rem;
}
.radio-gbr-group .radio label {
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #ddd;
  padding: .5rem 1.25rem;
  border-radius: 56px;
  cursor: pointer;
  color: #444;
  -webkit-transition: box-shadow 400ms ease;
  transition: box-shadow 400ms ease;
}
.radio-gbr-group .radio label:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.radio-gbr-group .radio input[type="radio"] {
  display: none;
}
.radio-gbr-group .radio input[type="radio"]:checked + label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}
</style>