<template>
  <div id="soal">
    <Navbar />
    <template>
      <div class="container">
        <p class="title has-text-centered has-text-weight-light">
          Test {{ jenisSoal.toUpperCase().replace("IST", "") }} Bagian
          {{ bagianSoal }}
        </p>
        <p class="subtitle has-text-centered has-text-weight-light">
          Sisa waktu pengerjaan:
          <span class="has-text-danger">{{ convertTime }}</span>
        </p>
        <div class="box">
          <div class="columns">
            <div class="column has-text-centered">
              <b-button disabled type="is-text">{{
                `Nomor ${this.$route.query.nomor} dari ${allSoal.length} soal`
              }}</b-button>
            </div>
          </div>
          <div class="is-mobile has-text-centered">
            <transition name="fade">
              <div v-if="this.$store.state.loading">
                <b-skeleton
                  width="80%"
                  class="mb-6"
                  size="is-large"
                  :animated="true"
                ></b-skeleton>
                <b-skeleton
                  width="40%"
                  class="mb-6"
                  size="is-large"
                  :animated="true"
                ></b-skeleton>
                <b-skeleton
                  width="40%"
                  class="mb-6"
                  size="is-large"
                  :animated="true"
                ></b-skeleton>
                <b-skeleton
                  width="40%"
                  class="mb-6"
                  size="is-large"
                  :animated="true"
                ></b-skeleton>
                <b-skeleton
                  width="40%"
                  class="mb-6"
                  size="is-large"
                  :animated="true"
                ></b-skeleton>
              </div>
              <soal-container
                :total="allSoal"
                :soal="soal"
                :nomor="parseInt(this.$route.query.nomor)"
                v-on:jawaban="handleJawaban"
                v-else
              ></soal-container>
            </transition>
            <b-loading
              :is-full-page="false"
              :active.sync="loading"
              :can-cancel="true"
            ></b-loading>
          </div>
        </div>
      </div>
    </template>
    <Footer />
  </div>
</template>

<script>
import SoalContainer from "../components/Soal.vue";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters, mapState } from "vuex";

export default {
  name: "soal",
  data: () => ({
    soal: [],
    jawaban: [],
    allSoal: [],
    waktu: "",
    submit: false,
  }),
  components: {
    SoalContainer,
    Navbar,
    Footer,
  },
  mounted() {
    this.$options.interval = setInterval(() => {
      this.waktu -= 1;
    }, 1000);
  },
  watch: {
    $route: function (to, from) {
      this.$store.dispatch("general/changeLoadingState", true);
      this.getSingleSoalIST(to.query.nomor);
    },
  },
  beforeDestroy() {
    clearInterval(this.$options.interval);
  },
  computed: {
    ...mapGetters("ist", ["soalIST"]),
    ...mapGetters("auth", ["user"]),
    loading() {
      return this.$store.state.general.loading;
    },
    userInfo() {
      return JSON.parse(this.user);
    },
    bagianSoal() {
      return this.$route.query.paket.split("_")[1];
    },
    jenisSoal() {
      return this.$route.query.jenis;
    },
    convertTime() {
      var totalWaktu;
      if (this.waktu != null && this.waktu != " ") {
        var menit = Math.floor(this.waktu / 60);
        var detik = Math.floor(this.waktu % 60);
        totalWaktu = `${menit < 10 ? "0" + menit : menit}:${
          detik < 10 ? "0" + detik : detik
        }`;
      } else {
        // auto send jawaban if time reached < 1
        if (!this.submit) {
          this.submit = true;
          if (this.jawabanTersimpan.length > 0) {
            var id = JSON.parse(this.$store.getters["auth/user"]).id;
            var payload = {
              jawaban_peserta: this.jawabanTersimpan,
              peserta_id: id,
              paket_soal: this.$route.query.paket,
              jenis_soal: this.$route.query.jenis,
            };

            this.$store
              .dispatch("soal/kirimJawaban", payload)
              .catch((error) => {
                console.error(error);
              });
          }

          // reset jawaban
          this.$store.dispatch("ist/resetJawaban");
          this.$buefy.toast.open({
            duration: 5000,
            message: `Sesi waktu soal bagian ${this.bagianSoal} sudah habis`,
            position: "is-bottom",
            type: "is-warning",
          });
          this.$router.replace("rincian-test");
        }
      }
      return totalWaktu;
    },
    jawabanTersimpan() {
      return this.$store.state.ist.jawaban;
    },
  },
  created() {
    this.fetchWaktu();
    this.getSingleSoalIST(this.$route.query.nomor);
  },
  methods: {
    fetchWaktu() {
      var jenis = this.$route.query.jenis;
      var paket = this.$route.query.paket;
      var id = this.userInfo.id;

      var payload = {
        jenis_soal: jenis,
        paket_soal: paket,
        peserta_id: id,
      };

      this.$store
        .dispatch("waktu/sisaWaktu", payload)
        .then((response) => {
          this.waktu = response.data.data.waktu;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    getSingleSoalIST(args) {
      var nomor = args;
      var paket_soal = this.$route.query.paket;

      var payload = {
        nomor: args,
        paket: paket_soal,
      };

      this.$store
        .dispatch("ist/getSingle", payload)
        .then((response) => {
          this.soal = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$nextTick(() => {
            this.getAllSoalIST();
          });
        });
    },
    getAllSoalIST() {
      var jenis = this.$route.query.jenis;

      this.$store
        .dispatch("ist/getAllSoal")
        .then((response) => {
          var data = response.data.data;
          data.forEach((element) => {
            if (this.$route.query.paket == element.paket_soal) {
              this.allSoal.push(element);
            }
          });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => {
          this.$store.dispatch("general/changeLoadingState", false);
        });
    },
    handleJawaban(e) {
      var nomor = parseInt(this.$route.query.nomor);
      var paket_soal = this.$route.query.paket;
      var jenis = this.$route.query.jenis;

      if (e.aksi == "Berikutnya") {
        this.jawaban[this.nomor] = e.jawaban;
        this.$store.dispatch("ist/simpanJawaban", this.jawaban[this.nomor]);
        this.$router.replace({
          path: "/soal",
          query: { paket: paket_soal, jenis: jenis, nomor: nomor + 1 },
        });
      } else {
        this.$router.replace({
          path: "/soal",
          query: { paket: paket_soal, jenis: jenis, nomor: nomor - 1 },
        });
      }
    },
  },
};
</script>

<style scoped>
.fade-enter-active {
  transition: opacity 1.5s;
}
.fade-leave-active {
  opacity: 0;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>