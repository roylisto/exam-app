<template>
  <div id="soal">
    <Navbar />
    <template v-if="!akhirTes">
      <div class="container">
        <p class="title has-text-centered has-text-weight-light">Test {{jenisSoal.toUpperCase().replace('IST', '')}} Bagian {{bagianSoal}}</p>
        <p class="subtitle has-text-centered has-text-weight-light">Sisa waktu pengerjaan: <span class="has-text-danger">{{convertTime}}</span></p>
        <div class="box">
          <div class="columns">
            <div class="column has-text-centered">
              <b-button disabled type="is-text">{{`Nomor ${nomor + 1} dari ${totalSoal} soal`}}</b-button>
            </div>
          </div>
          <div class="is-mobile has-text-centered">
            <soal-container
              :total="totalSoal"
              :soal="soal[nomor]"
              v-on:jawaban="handleJawaban"
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
              Anda telah selesai mengerjakan soal test {{jenisSoal.toUpperCase()}}
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
    akhirTes: false,
    waktu: ''
  }),
  components: {
    SoalContainer,
    Navbar,
    Footer
  },
  mounted() {
    this.$options.interval = setInterval(() => {
        this.waktu -= 1
    }, 1000);
  },
  watch: {
    'interval': function (newValue, oldValue) {
      this.convertTime
    }
  },
  beforeDestroy () {
    clearInterval(this.$options.interval);
  },
  computed: {
    ...mapGetters("ist", ["soalIST"]),
    ...mapGetters("auth", ["user"]),
    userInfo() {
      return JSON.parse(this.user)
    },
    bagianSoal() {
      return this.$route.query.paket.split("_")[1]
    },
    jenisSoal() {
      return this.$route.query.jenis;
    },
    convertTime() {
      var totalWaktu;
      if (this.waktu != null && this.waktu != ' ') {
        var menit = Math.floor(this.waktu / 60);
        var detik = Math.floor(this.waktu % 60);
        totalWaktu = `${menit < 10 ? '0' + menit : menit}:${detik < 10 ? '0' + detik : detik}`;
      } else {
        // auto send jawaban if time reached < 1
        var id = JSON.parse(this.$store.getters['auth/user']).id
        var payload = {
          jawaban_peserta: this.jawaban,
          peserta_id: id,
          paket_soal: this.$route.query.paket,
          jenis_soal: this.$route.query.jenis,
        }

        this.$store.dispatch('soal/kirimJawaban', payload)
          .catch((error) => {
            console.error(error)
          })

          // reset jawaban
          this.$store.dispatch('ist/resetJawaban');
          this.$buefy.toast.open({
              duration: 5000,
              message: `Sesi waktu soal bagian ${this.bagianSoal} sudah habis`,
              position: 'is-bottom',
              type: 'is-warning'
          })
          this.$router.replace('rincian-test')
      }
      return totalWaktu
    },
    dataJawaban() {
      return this.$store.state.ist.jawaban
    }
  },
  created() {
    this.fetchWaktu();
    this.getSingleSoalIST();
    this.getAllSoalIST();
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
          this.waktu = response.data.data.waktu
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getSingleSoalIST() {
      var nomor = this.$route.query.nomor;
      var paket_soal = this.$route.query.paket;

      var payload = {
        nomor: nomor,
        paket: paket_soal
      }

      this.$store.dispatch("ist/getSingle", payload)
        .then((response) => {
          this.soal = response.data.data
          this.totalSoal = this.soal.length
        })
        .catch((error) => {
          console.error(error)
        })
    },
    getAllSoalIST() {
      const loadingComponent = this.$buefy.loading.open()
      var jenis = this.$route.query.jenis;

      if (jenis == 'ist') {
      this.$store.dispatch("ist/getAllSoal")
          .then((response) => {
            this.allSoal = response.data.data
          })
          .catch((error) => {
            console.error(error)
          })
      } else {
        this.$store.dispatch("mii/getAllSoal")
          .then((response) => {
            this.allSoal = response.data.data
            this.totalSoal = this.allSoal.length
          })
          .catch((error) => {
            console.error(error)
          })
      }
      loadingComponent.close()
    },
    handleJawaban(e) {
      if (e.aksi == 'Berikutnya') {
        this.jawaban[this.nomor] = e.jawaban;
        this.$store.dispatch('ist/simpanJawaban', this.jawaban[this.nomor])
        this.nomor++;
      } else {
        this.nomor--;
      }
    },
  },
}
</script>