<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">Rincian Test</p>
      <div class="box">
        <div class="columns is-mobile has-text-centered">
          <div class="column">
            <h5 class="is-size-5 has-text-weight-semibold">Jenis Test</h5>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
            <p>Subtest 1 IST</p>
          </div>
          <div class="column">
            <h5 class="is-size-5 has-text-weight-semibold">Status</h5>
            <p>Belum</p>
            <p>Belum</p>
            <p>Belum</p>
            <p>Belum</p>
            <p>Belum</p>
            <p>Belum</p>
            <p>Belum</p>
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
      this.$store.dispatch("ist/getSoalIST")
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
};
</script>
