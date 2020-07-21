<template>
  <div>
    <Navbar />
    <div class="container">
      <p class="title has-text-centered has-text-weight-light">Rincian Test</p>
      <div class="box my-5">
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <h5 class="is-size-5 has-text-weight-semibold">Jenis Test</h5>
          </div>
          <div class="column">
            <h5 class="is-size-5 has-text-weight-semibold">Status</h5>
          </div>
        </div>
        <div v-for="(value, index) in soalTes" :key="index">
          <div class="columns is-mobile has-text-centered">
            <div class="column">
              <router-link :class="value.status == 'Sudah' || value.status == 'Waktu habis' ? 'disabled' : 'has-text-primary has-text-weight-semibold'" :to="{path: '/petunjuk-soal', query: {paket: value.test, jenis: value.jenis}}">{{value.test.replace(/_/g, " ").toUpperCase()}}</router-link>
            </div>
            <div class="column">
              <p :class="value.status == 'Sudah' || value.status == 'Waktu habis' ? 'disabled' : value.status == 'Sedang dikerjakan' ? 'has-text-success' : 'has-text-primary has-text-weight-semibold'">{{value.status}}</p>
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
    soalTes: []
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
    }
  },
  mounted() {
    this.getSoal();
  },
  methods: {
    getSoal() {
      const loadingComponent = this.$buefy.loading.open()

      var peserta_id = JSON.parse(this.$store.getters['auth/user']).id
      this.$store.dispatch("soal/getRincianTes", peserta_id)
        .then((response) => {
          this.soalTes = response.data.data
        })
        .catch((error) => {
          console.error(error)
        })
        .finally(() => {
          loadingComponent.close()
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