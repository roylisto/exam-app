<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (21-40)
      </p>
      <div class="box">
        <div class="container">
          <p class="has-text-weight-normal">Ditentukan lima kata</p>
          <p class="has-text-weight-normal">Pada 4 dari 5 kata itu terdapat satu kesamaan</p>
          <p class="has-text-weight-normal">Carilah kata yang kelima yang tidak memiliki kesamaan dari keempat kata itu. </p>
        </div>
        <div class="soal-item container">
          <h1>Contoh 02</h1>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="kucing" type="radio" name="radio-1" value="kucing">
              <label for="kucing">a) Meja</label>
              <input id="bajing" type="radio" name="radio-1" value="bajing">
              <label for="bajing">b) Kursi</label>
              <input id="lembu" type="radio" name="radio-1" value="lembu">
              <label for="lembu">c) Burung</label>
              <input id="anjing" type="radio" name="radio-1" value="anjing">
              <label for="anjing">d) Lemari</label>
              <input id="tempat" type="radio" name="radio-1" value="tempat">
              <label for="tempat">d) Tempat Tidur</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p class="has-text-weight-normal">a,b,d, dan e adalah peralatan perabot rumah (meubel) <br />c burung bukan perabot rumah atau tidak memiliki kesamaan keempat kata itu
          <br/> oleh karena itu, jawaban yang harus dipilih adalah c</p>
        </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <p>Lawannya "Harapan" adalah.....</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="duduk" type="radio" name="radio-2" value="duduk">
              <label for="duduk">a) Duduk</label>
              <input id="berbaring" type="radio" name="radio-2" value="berbaring">
              <label for="berbaring">b) Putus Asa</label>
              <input id="berdiri" type="radio" name="radio-2" value="berdiri">
              <label for="berdiri">c) Berdiri</label>
              <input id="berjalan" type="radio" name="radio-2" value="berjalan">
              <label for="berjalan">d) Berjalan</label>
              <input id="berjongkok" type="radio" name="radio-2" value="berjongkok">
              <label for="berjongkok">e) Berjongkok</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p class="has-text-weight-normal">Pada a,b,c dan e orang berada dalam keadaan tidak bergerak, sedangkan d orang dalam
            keadaan bergerak. Maka jawaban yang benar adalah d berjalan.
            oleh karena itu jawabna yang harus dipilih adalah d. berjalan</p>
        </div>

        <b-button   type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: jenisSoal}}" style="margin-top: 2rem"
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