<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (01-20)
      </p>
      <p class="subtitle has-text-centered has-text-weight-light">Sisa waktu menghafal: <span class="has-text-danger">{{convertTime}}</span></p>
      <div class="box">
        <p class="has-text-weight-semibold subtitle">Disediakan waktu 3 menit untuk menghafalkan kata-kata di bawah ini:</p>
        <ul>
          <li class="is-size-5">BUNGA: Soka - Larat - Flamboyan - Jasmin - Dahlia</li>
          <li class="is-size-5">PERKAKAS: Wajan - Jarum - Kikir - Cangkul - Palu</li>
          <li class="is-size-5">BURUNG: Itik - Elang - Walet - Tekukur - Nuri</li>
          <li class="is-size-5">KESENIAN: Quintet - Arca - Opera - Gamelan - Ukiran</li>
          <li class="is-size-5">BINATANG: Musang - Rusa - Beruang - Zebra - Harimau</li>
        </ul>
        <b-button expanded type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: 'ist'}}" style="margin-top: 2rem"
        >Mulai test</b-button>
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";
import { mapGetters } from 'vuex'

export default {
  name: "rincian-test",
  components: {
    Navbar,
    Footer
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  computed: {
    ...mapGetters("soal", ["timer"]),
    bagianSoal() {
      return this.$route.query.paket;
    },
    jenisSoal() {
      return this.$route.query.jenis;
    },
    convertTime() {
      var totalWaktu;
      var menit = Math.floor(this.timer / 60);
      var detik = Math.floor(this.timer % 60);
      totalWaktu = `${menit < 10 ? '0' + menit : menit}:${detik < 10 ? '0' + detik : detik}`;
      if (this.timer < 1) {
        this.$store.dispatch("soal/resetTimer");
        this.$router.replace({
          path: '/petunjuk-soal', query: {
            paket: this.bagianSoal,
            jenis: this.jenis
          }
        })
      } else {
        return totalWaktu 
      }
    },
  },
  mounted() {
    this.$options.interval = setInterval(() => {
        this.startTimer()
    }, 1000);
  },
  methods: {
    startTimer() {
      this.$store.dispatch("soal/startTimer")
        .catch((error) => {
          console.error(error)
        })
    }
  }
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