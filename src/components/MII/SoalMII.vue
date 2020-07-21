<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk dan Contoh Soal MII
      </p>
      <div class="box">
        <p class="has-text-left">Adik-adik, silahkan dipahami pernyataan-pernyataan berikut, kemudian cocokkan pernyataan tersebut dengan pilihan pada diri adik-adik. Tidak perlu berpikir terlalu lama. Karena tugas Adik--adik hanyalah jujur pada diri sendiri apakah pertanyaan tersebut sesuai atau tidak sesuai Adik-adik sukai atau tidak sukai. Jika menurut adik-adik pernyataan tersebut sesuai dengan diri Adik-adik pilihlah jawaban ya pada pilihan jawaban demikian juga jika tidak sesuai, pilihlah jawaban tidak. </p>

        <div class="soal-item container">
          <h1>Contoh 05</h1>
          <p>saya tertarik untuk mengikuti kegiatan musik </p>
          <div class="radio-btn-group">
            <div class="radio">
              <input id="ya" type="radio" name="mii" value="ya">
              <label for="ya">a) Ya</label>
              <input id="tidak" type="radio" name="mii" value="tidak">
              <label for="tidak">b) Tidak</label>
            </div>
          </div>
        </div>
        <div class="container">
          <p>Jika adik-adik bermaksud ingin mengganti pilihan jawaban tersebut adik-adik tinggal memberi tanda garis mendatar pada pilihan jawaban semula dan mencentang pilihan jawaban baru.</p>
          <p>Selamat mengerjakan!</p>
        </div>
        <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: 'mii'}}" style="margin-top: 2rem"
          >Mulai Test</b-button>
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
</style>