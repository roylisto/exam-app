<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (21-40)
      </p>
      <div class="box">
        <div class="soal-petunjuk">
          <p>Soal-soal 01-20 terdiri atas kalimat-kalimat</p>
          <p>
            Pada setiap kalimat satu kata yang hilang dan disediakan 5 (lima) kata pilihan sebagai
            penggantinya Pilihlah kata yang tepat yang dapat menyempurnakan
            kalimat itu.
          </p>
        </div>
        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p>Seekor kuda memunyai kesamaan terbanyak dengan seekor....................</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="kucing" type="radio" name="radio-1" value="kucing">
              <label for="kucing">Kucing</label>
              <input id="bajing" type="radio" name="radio-1" value="bajing">
              <label for="bajing">Bajing</label>
              <input id="lembu" type="radio" name="radio-1" value="lembu">
              <label for="lembu">Lembu</label>
              <input id="anjing" type="radio" name="radio-1" value="anjing">
              <label for="anjing">Anjing</label>
            </div>
          </div>
        </div>
        
        <div class="soal-item">
          <h1>Contoh berikutnya</h1>
          <p>Lawannya "Harapan" adalah.....</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="duka" type="radio" name="radio-2" value="duka">
              <label for="duka">Duka</label>
              <input id="putusAsa" type="radio" name="radio-2" value="putusAsa">
              <label for="putusAsa">Putus Asa</label>
              <input id="sengsara" type="radio" name="radio-2" value="sengsara">
              <label for="sengsara">Sengsara</label>
              <input id="cinta" type="radio" name="radio-2" value="cinta">
              <label for="cinta">Cinta</label>
            </div>
          </div>
        </div>
        
        <b-button expanded type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: jenisSoal}}" style="margin-top: 2rem"
        >Mulai test</b-button>
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
  components: {
    Navbar,
    Footer
  },
  computed: {
    bagianSoal() {
      return this.$route.query.paket;
    },
    jenisSoal() {
      return this.$route.query.jenis;
    },
  },
};
</script>

<style>
/* non-gambar */
.radio-btn-group {
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
}
.radio-btn-group .radio {
  margin: 1em .25rem;
}
.radio-btn-group .radio label {
  background: #fff;
  border: 1px solid #ddd;
  padding: .5rem 1.25rem;
  border-radius: 56px;
  cursor: pointer;
  color: #444;
  -webkit-transition: box-shadow 400ms ease;
  transition: box-shadow 400ms ease;
}
.radio-btn-group .radio label:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.radio-btn-group .radio input[type="radio"] {
  display: none;
}
.radio-btn-group .radio input[type="radio"]:checked + label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}
.show {
  font-weight: 400;
  color: #444;
}
.show span {
  background: #f5f5f5;
  color: #F44336;
  border-radius: 3px;
  padding: .25rem .5rem;
  font-size: 1.25rem;
  border: 1px solid #f1f1f1;
}
</style>