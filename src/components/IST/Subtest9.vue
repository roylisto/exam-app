<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (157-176)
      </p>
      <div class="box">
        <div class="container">
          <p class="has-text-weight-normal">Pada bagian ini terdapat sejumlah pertanyaan mengenai kata-kata yang telah saudara hafalkan tadi.
            Pilihlah jawaban saudaran pada pilhan jawaban yang disediakan.</p>
        </div>
        <div class="soal-item container">
          <h1>Contoh 09</h1>
          <p>Kata yang mempunya huruf permulaan -Q- adalah suatu..............</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="batuBara" type="radio" name="radio-1" value="bunga" v-model="soal1">
              <label for="batuBara">a) Bunga</label>
            </div>
            <div class="radio">
              <input id="bajing" type="radio" name="radio-1" value="bajing" v-model="soal1">
              <label for="bajing">b) Perkakas</label>
            </div>
            <div class="radio">
              <input id="lembu" type="radio" name="radio-1" value="lembu" v-model="soal1">
              <label for="lembu">c) Burung</label>
            </div>
            <div class="radio">
              <input id="anjing" type="radio" name="radio-1" value="batuBara" v-model="soal1">
              <label for="anjing">d) Kesenian</label>
            </div>
            <div class="radio">
              <input id="tempat" type="radio" name="radio-1" value="tempat" v-model="soal1">
              <label for="tempat">d) Binatang</label>
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

        <div class="container">
          <p class="has-text-weight-normal">Quintet adalah termasuk dalam kesenian, sehingga jawaban yang benar adalah d. Oleh karena itu pilihlah jawaban d) kesenian </p>
        </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <p>Kata yang mempunyai permulaan -Z- adalah suatu...................</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="duduk" type="radio" name="radio-2" value="hujan" v-model="soal2">
              <label for="duduk">a) Bunga</label>
            </div>
            <div class="radio">
              <input id="berbaring" type="radio" name="radio-2" value="berbaring" v-model="soal2">
              <label for="berbaring">b) Perkakas</label>
            </div>
            <div class="radio">
              <input id="berdiri" type="radio" name="radio-2" value="berdiri" v-model="soal2">
              <label for="berdiri">c) Burung</label>
            </div>
            <div class="radio">
              <input id="berjalan" type="radio" name="radio-2" value="berjalan" v-model="soal2">
              <label for="berjalan">d) Perkakas</label>
            </div>
            <div class="radio">
              <input id="berjongkok" type="radio" name="radio-2" value="duduk" v-model="soal2">
              <label for="berjongkok">e) Binatang</label>
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

        <div class="container">
          <p class="has-text-weight-normal">Jawabannya adalah e, karena zebra termasuk dalam jenis binatang</p>
        </div>
        <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/info-soal', query: {paket: bagianSoal, jenis: jenisSoal, nomor: 1}}" style="margin-top: 2rem"
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
      return this.soal2 == 'duduk' ? true : false;
    },
    rightAnswer1() {
      return this.soal1 == 'batuBara' ? true : false;
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