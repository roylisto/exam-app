<template>
  <div id="soal">
    <Navbar />
    <template v-if="!akhirTes">
      <div class="container">
        <p class="title has-text-centered has-text-weight-light">Test IST Bagian 1</p>
        <p class="subtitle has-text-centered has-text-weight-light">Sisa waktu pengerjaan</p>
        <div class="box">
          <div class="is-mobile has-text-centered">
            <soal-container
              :total="totalSoal"
              :soal="allSoal[nomor]"
              v-on:jawaban="handleJawaban"
              :jawabanBundle="jawaban"
              :nomor="nomor + 1"
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
              Anda telah selesai mengerjakan soal test IST
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
    ...mapGetters("ist", ["soalIST"]),
    ...mapGetters("auth", ["user"]),
    userInfo() {
      return JSON.parse(this.user)
    }
  },
  created() {
    this.fetchWaktu();
    this.getAllSoal();
  },
  methods: {
    fetchWaktu() {
      var jenis = this.$route.query.jenis;
      var paket = this.$route.query.paket;
      var id    = this.userInfo.id;

      var payload = {
        jenis_soal: jenis,
        paket_soal: paket,
        peserta_id: id
      }

      this.$store.dispatch("waktu/sisaWaktu", payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error)
        })
    },
    // getSingleSoal() {
    //   var nomor = this.$route.query.nomor;
    //   var paket_soal = this.$route.query.paket_soal;

    //   var payload = {
    //     nomor: nomor,
    //     paket: paket_soal
    //   }

    //   this.$store.dispatch("ist/getSingle", payload)
    //     .then((response) => {
    //       this.soal = response.data
    //     })
    //     .catch((error) => {
    //       console.log(error)
    //     })
    // },
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
    submitJawaban() {
      
    },
    handleJawaban(e) {
      this.jawaban[this.nomor] = e.jawaban;
      this.$store.dispatch('ist/simpanJawaban', this.jawaban[this.nomor])
      this.nomor++;
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