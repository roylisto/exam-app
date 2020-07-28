<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase().replace('IST','')}} (97-116)
      </p>
      <div class="box">
        <div class="soal-petunjuk container">
          <p class="has-text-weight-normal">
            Pada persoalan berikut akan diberikan deret angka. Setiap deret tersusun menurut aturan yang tertentu dan dapat dilanjutkan menurut aturan itu.
            Carilah untuk setia deret angka berikutnya dan pilihlah jawaban saudara.
          </p>
        </div>

        <div class="soal-item">
          <h1>Contoh 06</h1>
          <p>2&emsp;4&emsp;6&emsp;8&emsp;10&emsp;12&emsp;14&emsp;16&emsp;?</p>
          <div class="checkbox-gbr-group">
            <div v-for="(value, index) in pilganbutton" :key="index" class="checkbox" >
              <input :id="value" type="checkbox" :name="jawaban[index]" :value="value" v-model="tmpJawaban">
              <label :for="value">{{value}}</label>
            </div>
          </div>
        </div>

        <div class="soal-item container">
          <p>Pada deret ini angka berikutnya selalu didapat jika angka didepannya ditambah dengan2 maka jawabannya ialah : 16.Oleh karena itu, pada angka yang tersedia dibawah soal, pilihlah angka 1 dan 6 </p>
        </div>

        <div class="soal-item">
          <h1>Contoh berikutnya</h1>
          <p>9&emsp;7&emsp;10&emsp;8&emsp;11&emsp;9&emsp;12&emsp;? </p>
          <div class="checkbox-gbr-group">
            <div v-for="(value, index) in pilganbutton" :key="index" class="checkbox" >
              <input :id="value + '1'" type="checkbox" :name="jawaban[index]" :value="value + '1'" v-model="tmpJawaban">
              <label :for="value + '1'">{{value}}</label>
            </div>
          </div>
        </div>

        <div class="container">
          <p>Pada deret ini selalu berganti-ganti harus dikurangi dengan 2 setelah itu ditambah dengan 3. Jawaban contoh ini ialah 10. Maka dari itu pilihlah angka 1 dan angka 0</p>
        </div>

        <div class="container">
          <p>Pada subtest ini peserta boleh menggunakan kertas coret-coretan untuk menghitung</p>
        </div>

         <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: 'ist'}}" style="margin-top: 2rem"
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
    jenisSoal() {
      return this.$route.query.jenis;
    },
  },
};
</script>


<style>
.checkbox-gbr-group {
  margin: 2rem 0;
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
  flex-wrap:wrap;
}
.checkbox-gbr-group .checkbox {
  overflow-x: auto;
  margin: .20em .1rem;
  line-height: 3;
}
.checkbox-gbr-group .checkbox label {
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #ddd;
  padding: .75rem .50rem;
  border-radius: 56px;
  cursor: pointer;
  color: #444;
  -webkit-transition: box-shadow 400ms ease;
  transition: box-shadow 400ms ease;
}
.checkbox-gbr-group .checkbox label:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.checkbox-gbr-group .checkbox input[type="checkbox"] {
  display: none;
}
.checkbox-gbr-group .checkbox input[type="checkbox"]:checked + label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}
</style>