<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (137-156)
      </p>
      <div class="box">
        <div class="soal-item">
          <h1>117</h1>
          <div class="has-text-left">
              <img :src="gambarURL + '/ist_subtest_8/137.PNG'" alt="">
            </div>
            <div class="radio-gbr-group has-text-centered">
                <div class="radio" >
                  <img :src="gambarURL + '/ist_subtest_8/a.PNG'" alt=""> <br>
                  <input id="1" type="radio" name="jawaban1" value="1">
                  <label for="1">a</label>
                </div>
                <div class="radio" >
                  <img :src="gambarURL + '/ist_subtest_8/b.PNG'" alt=""> <br>
                  <input id="4" type="radio" name="jawaban1" value="4">
                  <label for="4">b</label>
                </div>
                <div class="radio" >
                  <img :src="gambarURL + '/ist_subtest_8/c.PNG'" alt=""> <br>
                  <input id="2" type="radio" name="jawaban1" value="2">
                  <label for="2">c</label>
                </div>
                <div class="radio" >
                  <img :src="gambarURL + '/ist_subtest_8/d.PNG'" alt=""> <br>
                  <input id="3" type="radio" name="jawaban1" value="3">
                  <label for="3">d</label>
                </div>
                <div class="radio" >
                  <img :src="gambarURL + '/ist_subtest_8/e.PNG'" alt=""> <br>
                  <input id="5" type="radio" name="jawaban1" value="5">
                  <label for="5">e</label>
                </div>
            </div>
          </div>
         <div class="has-text-centered">
          <b-button type="is-primary" tag="router-link" :to="{path: '/soal', query: {paket: bagianSoal, jenis: jenisSoal}}" style="margin-top: 2rem"
          >Mulai test</b-button>
        </div>
          </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import Navbar from "../Navbar.vue";
import Footer from "../Footer.vue";

export default {
  name: "rincian-test",
  data: () => ({
    pilganbutton: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ],
    jawaban: [],
  }),
  components: {
    Navbar,
    Footer
  },
  computed: {
    bagianSoal() {
      return this.$route.query.paket;
    },
    gambarURL() {
      return process.env.VUE_APP_IMAGE_URL
    },
  },
};
</script>


<style>
.radio-gbr-group {
  margin: 2rem 0;
  display: -webkit-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-items: center;
}
.radio-gbr-group .radio {
  margin: .20em .25rem;
}
.radio-gbr-group .radio label {
  margin-top: 2rem;
  background: #fff;
  border: 1px solid #ddd;
  padding: .5rem 1.25rem;
  border-radius: 56px;
  cursor: pointer;
  color: #444;
  -webkit-transition: box-shadow 400ms ease;
  transition: box-shadow 400ms ease;
}
.radio-gbr-group .radio label:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.radio-gbr-group .radio input[type="radio"] {
  display: none;
}
.radio-gbr-group .radio input[type="radio"]:checked + label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}
</style>