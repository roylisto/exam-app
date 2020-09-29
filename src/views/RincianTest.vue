<template>
  <div>
    <Navbar />
    <div class="container">
      <p class="title has-text-centered has-text-weight-light">Rincian Test</p>
      <div class="my-5">
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <b-skeleton v-if="!loaded" width="100%" :animated="true"></b-skeleton>
            <h5 class="is-size-5 has-text-weight-semibold" v-else>Jenis Test</h5>
          </div>
          <div class="column">
            <b-skeleton v-if="!loaded" width="100%" :animated="true"></b-skeleton>
            <h5 class="is-size-5 has-text-weight-semibold" v-else>Status</h5>
          </div>
        </div>
        <div class="my-5" v-if="!loaded">
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <div v-for="i in 17" :key="i">
                <b-skeleton width="100%" :animated="true"></b-skeleton> <br>
              </div>
            </div>
            <div class="column">
              <div v-for="i in 17" :key="i">
                <b-skeleton width="100%" :animated="true"></b-skeleton> <br>
              </div>
            </div>
          </div>
        </div>
        <div class="item" v-for="(value, index) in soalTes" :key="index" v-else>
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <router-link :class="value.status == 'Sudah' || value.status == 'Waktu habis' || (!skippable && value.test != testWhichBelum[0].test) ? 'disabled' : 'has-text-primary has-text-weight-semibold'" :to="{path: '/petunjuk-soal', query: {paket: value.test, jenis: value.jenis}}">{{(value.test.replace(/_/g, " ").toUpperCase()).replace("BAGIAN", "MII").replace("IST", "")}}</router-link>
            </div>
            <div class="column">
              <p :class="value.status == 'Sudah' || value.status == 'Waktu habis' || (!skippable && value.test != testWhichBelum[0].test) ? 'disabled' : value.status == 'Sedang dikerjakan' ? 'has-text-success' : 'has-text-primary has-text-weight-semibold'">{{value.status}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
import { mapGetters } from 'vuex';
import _ from 'lodash'

export default {
  name: "rincian-test",
  data: () => ({
    soalTes: [],
    skippable: process.env.NODE_ENV === 'development' ? true : false,
    loaded: false,
  }),
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapGetters("ist", ["soalIST"]),
    testWhichBelum() {
      return _.filter(this.soalTes, function(o) {
        return o.status == 'Belum' || o.status == 'Sedang dikerjakan'
      })
    },
  },
  // mounted() {
  //   this.loaded = true
  // },
  created() {
    this.getSoal();
  },
  methods: {
    getSoal() {
      var peserta_id = JSON.parse(this.$store.getters['auth/user']).id
      this.$store.dispatch("soal/getRincianTes", peserta_id)
        .then((response) => {
          this.soalTes = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          this.$nextTick(() => {
            this.loaded = true
            var jumlahSoalBelum = _.countBy(this.soalTes, o => o.status == 'Belum' || o.status == 'Sedang dikerjakan').false
            if (jumlahSoalBelum === 17) {
              this.$buefy.notification.open({
                duration: 5000,
                message: `Semua test telah dikerjakan/waktu habis, silahkan menunggu hasilnya.`,
                position: 'is-top-right',
                type: 'is-danger'
              })
            }
          })
        })
    }
  }
};
</script>

<style scoped>
a.disabled, p.disabled {
  /* Make the disabled links grayish*/
  color: rgb(202, 202, 202);
  /* And disable the pointer events */
  pointer-events: none;
}
</style>