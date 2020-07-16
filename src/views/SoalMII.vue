<template>
  <div id="soal">
    <Navbar />
    <template v-if="!hasilTes">
      <div class="container">
        <p class="title has-text-centered has-text-weight-light">Test MII Bagian 1</p>
        <p class="subtitle has-text-centered has-text-weight-light">Sisa waktu pengerjaan</p>
        <div class="box">
          <div class="is-mobile has-text-centered">
            <soal-container
              :total="totalSoal"
              :soal="allSoal[nomor]"
              v-on:jawaban="handleJawaban"
              :jawabanBundle="jawaban"
              :nomor="nomor + 1"
              :dataJawaban="dataJawaban"
            ></soal-container>
          </div>
        </div>
      </div>
    </template>
    <template v-else>
      <section class="hero is-medium">
        <div class="hero-body has-text-centered">
          <div class="container">
            <h1 class="title has-text-weight-light">
              Anda telah selesai mengerjakan soal test MII
            </h1>
            <h2 class="subtitle">
              Submit jawaban anda dengan menekan tombol button dibawah ini
            </h2>
            <b-button type="is-primary" @click="submitJawaban" style="margin-top: 2rem; width: 30%">Submit</b-button>
          </div>
        </div>
      </section>
    </template>
    <Footer />
  </div>
</template>

<script>
import SoalContainer from '../components/Soal.vue';
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
    benar: 0,
    akhirTes: false
  }),
  components: {
    SoalContainer,
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters("mii", ["soalMII"]),
    dataJawaban() {
      return this.$store.state.mii.jawaban
    }
  },
  created() {
    this.getSingleSoal();
    // this.getAllSoal();
  },
  methods: {
    getSingleSoal() {
      var nomor = this.$route.query.nomor;
      var paket_soal = this.$route.query.paket_soal;

      var payload = {
        nomor: nomor,
        paket: paket_soal
      }

      this.$store.dispatch("mii/getSingle", payload)
        .then((response) => {
          this.soal = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // getAllSoal() {
    //  this.$store.dispatch("mii/getAllSoal")
    //     .then((response) => {
    //       this.allSoal = response.data.data
    //       this.totalSoal = this.allSoal.length
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
    handleJawaban(e) {
      if (e.aksi == 'Berikutnya') {
        this.jawaban[this.nomor] = e.jawaban;
        this.$store.dispatch('mii/simpanJawaban', this.jawaban[this.nomor])
        this.nomor++;
      } else {
        this.nomor--;
      }
      // if(this.nomor + 1 === this.allSoal.length) {
      //   // this.handleHasil();
      //   // this.akhirTes = true
      // } else {
      //   this.nomor++;
      // }
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