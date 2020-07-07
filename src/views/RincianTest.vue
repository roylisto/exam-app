<template>
  <div>
    <Navbar />
    <div class="container mt-5">
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
              <p>{{value.test}}</p>
            </div>
            <div class="column">
              <p>{{value.status}}</p>
          </div>
            </div>
        </div>
        <div class="field">
          <div class="control">
            <b-button
              tag="router-link"
              to="/petunjuk-soal"
              expanded
              type="is-primary"
              >Petunjuk Test</b-button
            >
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
    ...mapGetters("ist", ["soalIST"])
  },
  mounted() {
    this.getSoal();
  },
  methods: {
    getSoal() {
      var peserta_id = JSON.parse(this.$store.getters['auth/user']).id
      this.$store.dispatch("soal/getRincianTes", peserta_id)
        .then((response) => {
          this.soalTes = response.data.data
          console.log(this.soalTes)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
</script>
