<template>
  <div id="soal">
    <Navbar />
    <div class="container">
      <p class="title has-text-centered has-text-weight-light">Test IST Bagian 1</p>
      <div class="box">
        <div class="is-mobile has-text-centered">
          <soal-container
            :total="totalSoal"
            :soal="allSoal[nomor]"
            v-on:jawaban="handleJawaban"
            :nomor="nomor + 1"
          ></soal-container>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import SoalContainer from '../components/SoalIST.vue';
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from 'vuex';

export default {
  name: 'soal',
  data: () => ({
    soal: [],
    jawaban: [],
    nomor: 0,
    totalSoal: '',
    allSoal: [],
    benar: 0
  }),
  components: {
    SoalContainer,
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters("ist", ["soalIST"])
  },
  created() {
    this.getSingleSoal();
    this.getAllSoal();
  },
  methods: {
    getSingleSoal() {
      var nomor = this.$route.query.nomor;
      var paket_soal = this.$route.query.paket_soal;

      var payload = {
        nomor: nomor,
        paket: paket_soal
      }

      this.$store.dispatch("ist/getSingle", payload)
        .then((response) => {
          this.soal = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getAllSoal() {
     this.$store.dispatch("ist/getAllSoal")
        .then((response) => {
          this.allSoal = response.data.data
          this.totalSoal = this.allSoal.length
        })
        .catch((error) => {
          console.log(error)
        })
    },
    handleJawaban(e) {
      this.jawaban[this.nomor] = e.jawaban;
      if(this.nomor + 1 === this.allSoal.length) {
        this.handleHasil();
      } else {
        this.nomor++;
      }
    },
    handleHasil() {
      this.allSoal.forEach((item, index) => {
        if (this.jawaban[index] === item.kunci_jawaban) this.benar++;
      })
    }
  },
  watch: {
    '$route.query.nomor': function () {
      this.getSingleSoal();
    }
  }
}
</script>