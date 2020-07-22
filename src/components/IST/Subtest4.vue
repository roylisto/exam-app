<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (61-76)
      </p>
      <div class="box">
        <div class="soal-petunjuk">
          <p class="has-text-weight-normal">
            Ditentukan dua kata. Carilah satu perkataan yang meliputi pengertian kedua kata tadi. Tulislah perkataan itu pada kolom yang tersedia dibawah soal
          </p>
        </div>

        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p>Ayam - Itik</p>
          <b-field label="Jawab">
            <b-input></b-input>
          </b-field>
        </div>

        <div class="container">
          <p>Perkataan  "burung" dapat meliputi pengertian kedua kata itu. Maka jawabannya ialah "burung". Oleh karena itu pada kolom yang terdapat pada bawah soal dituliskan "burung"</p>
        </div>

        <div class="soal-item">
          <h1>Contoh 01</h1>
          <p>Gaun - Celana</p>
          <b-field label="Jawab">
            <b-input></b-input>
          </b-field>
        </div>

        <div class="container">
          <p>Pada contoh ini jawabannya ialah "pakaian, maka "pakaian" yang seharusnya ditulis carilah selalu perkataan yang tepat yang dapat meliputi pengertian kedua kata itu</p>
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