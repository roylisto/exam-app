<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (01-20)
      </p>
      <div class="box">
        <div class="soal-petunjuk">
          <p>Soal-soal 01-20 terdiri atas kalimat-kalimat</p>
          <p>
            Pada setiap kalimat satu
            kata yang hilang dan disediakan 5 (lima) kata pilihan sebagai
            penggantinya Pilihlah kata yang tepat yang dapat menyempurnakan
            kalimat itu.
          </p>
        </div>
        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p class="has-text-left">Seekor kuda memunyai kesamaan terbanyak dengan seekor....................</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="kucing" type="radio" name="radio-1" value="kucing" v-model="soal1">
              <label for="kucing">a) Kucing</label>
            </div>
            <div class="radio">
              <input id="bajing" type="radio" name="radio-1" value="bajing" v-model="soal1">
              <label for="bajing">b) Bajing</label>
            </div>
            <div class="radio">
              <input id="lembu" type="radio" name="radio-1" value="lembu" v-model="soal1">
              <label for="lembu">c) Lembu</label>
            </div>
            <div class="radio">
              <input id="anjing" type="radio" name="radio-1" value="anjing" v-model="soal1">
              <label for="anjing">d) Anjing</label>
            </div>
            <p class="mt-3 has-text-success" v-if="rightAnswer1">
              <b-icon
                icon="check"
                size="is-small">
              </b-icon>
              Jawaban Benar</p>
            <p class="mt-3 has-text-success" v-else-if="soal1 == ''"></p>
            <p class="mt-3 has-text-danger" v-else>
              <b-icon
                icon="times-circle"
                size="is-small">
              </b-icon>
              Jawaban Salah</p>
          </div>
        </div>

        <div class="soal-item">
          <h1>Contoh berikutnya</h1>
          <p>Lawannya "Harapan" adalah.....</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="duka" type="radio" name="radio-2" value="duka" v-model="soal2">
              <label for="duka">a) Duka</label>
            </div>
            <div class="radio">
              <input id="putusAsa" type="radio" name="radio-2" value="putusAsa" v-model="soal2">
              <label for="putusAsa">b) Putus Asa</label>
            </div>
            <div class="radio">
              <input id="sengsara" type="radio" name="radio-2" value="sengsara" v-model="soal2">
              <label for="sengsara">c) Sengsara</label>
            </div>
            <div class="radio">
              <input id="cinta" type="radio" name="radio-2" value="cinta" v-model="soal2">
              <label for="cinta">d) Cinta</label>
            </div>
            <p class="mt-3 has-text-success" v-if="rightAnswer2">
              <b-icon
                icon="check"
                size="is-small">
              </b-icon>
              Jawaban Benar</p>
            <p class="mt-3 has-text-success" v-else-if="soal2 == ''"></p>
            <p class="mt-3 has-text-danger" v-else>
              <b-icon
                icon="times-circle"
                size="is-small">
              </b-icon>
              Jawaban Salah</p>
          </div>
        </div>

        <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: jenisSoal}}" style="margin-top: 2rem"
          >Mulai test</b-button>
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
    soal1: '',
    soal2: ''
  }),
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
    rightAnswer2() {
      return this.soal2 == 'duka' ? true : false;
    },
    rightAnswer1() {
      return this.soal1 == 'kucing' ? true : false;
    }
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