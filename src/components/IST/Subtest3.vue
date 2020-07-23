<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (41-61)
      </p>
      <div class="box">
        <div class="container">
          <p class="has-text-weight-normal">Ditentukan tiga kata</p>
          <p class="has-text-weight-normal">Ditentukan tiga kata antara kata pertama dan kata kedua terdapat suatu hubungan yang tertentu. <br/>
          antara kata ketiga dan salah satu kata diantara lima kata pilihan harus pula terdapat hubungan yang sama itu.  Carilah kata itu </p>
        </div>
        <div class="soal-item container">
          <h1>Contoh 01</h1>
          <p>Hutan : pohon = tembok : ?</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="batuBara" type="radio" name="radio-1" value="batuBara">
              <label for="batuBara">a) Batu Bara</label>
            </div>
            <div class="radio">
              <input id="bajing" type="radio" name="radio-1" value="bajing">
              <label for="bajing">b) Rumah</label>
            </div>
            <div class="radio">
              <input id="lembu" type="radio" name="radio-1" value="lembu">
              <label for="lembu">c) Semen</label>
            </div>
            <div class="radio">
              <input id="anjing" type="radio" name="radio-1" value="anjing">
              <label for="anjing">d) Putih</label>
            </div>
            <div class="radio">
              <input id="tempat" type="radio" name="radio-1" value="tempat">
              <label for="tempat">d) Dinding</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p class="has-text-weight-normal">Hubungan antara hutan dan pohon ialah bahwa hutan terdiri atas pohon-pohon, maka hubungan antara tembok dan salah satu kata pilihan ialah bahwa tembok terdiri atas batu-batu bata. Oleh karena itu pilihlah jawaban a) batu bata </p>
        </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <p>Gelap : terang = basah : ?</p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="duduk" type="radio" name="radio-2" value="duduk">
              <label for="duduk">a) Hujan</label>
            </div>
            <div class="radio">
              <input id="berbaring" type="radio" name="radio-2" value="berbaring">
              <label for="berbaring">b) Hari</label>
            </div>
            <div class="radio">
              <input id="berdiri" type="radio" name="radio-2" value="berdiri">
              <label for="berdiri">c) Lembab</label>
            </div>
            <div class="radio">
              <input id="berjalan" type="radio" name="radio-2" value="berjalan">
              <label for="berjalan">d) Angin</label>
            </div>
            <div class="radio">
              <input id="berjongkok" type="radio" name="radio-2" value="berjongkok">
              <label for="berjongkok">e) Kering</label>
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