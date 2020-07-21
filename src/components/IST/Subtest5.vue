<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (77-96)
      </p>
      <div class="box">
        <div class="soal-petunjuk container">
          <p class="has-text-weight-normal">
            Persoalan berikutnya ialah soal-soal hitungan
          </p>
        </div>

        <div class="soal-item container">
          <h1>Contoh 05</h1>
          <p>Sebatang pensil harganya 25 rupiah. Berapa harga 3 batang?</p>
          <div class="checkbox-gbr-group">
            <div v-for="(value, index) in pilganbutton" :key="index" class="checkbox" >
              <input :id="value" type="checkbox" :name="jawaban[index]" :value="value" v-model="tmpJawaban">
              <label :for="value">{{value}}</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p>Kolom ini terdiri atas angka-angka 1 sampai 9 dan 0. <br/>
            Untuk menunjukan jawaban suatu soal, maka plilihlah angka-angka yang terdapat didalam jawaban itu urutan angka jawaban tidak perlu dihiraukan pada contoh 05 jawaban ialah 75 oleh karena itu pilihlah angka 7 dan 5  </p>
        </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <p>Dengan sepeda Husin dapat mencapai 15 km dalam waktu 1 jam. Berapa km-kah yang dapat ia capai dalam waktu 4 jam ? </p>
          <div class="checkbox-gbr-group">
            <div v-for="(value, index) in pilganbutton" :key="index" class="checkbox" >
              <input :id="value" type="checkbox" :name="jawaban[index]" :value="value" v-model="tmpJawaban">
              <label :for="value">{{value}}</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p>Jawabannya ialah 60 maka untuk menunjukan jawaban itu pilihlah angka 6 dan 0 </p>
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
  },
};
</script>


<style>
.radio-btn-group {
  display: -webkit-box;
  display: flex;
  flex-direction: column;
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