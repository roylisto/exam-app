<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (117-136)
      </p>
      <div class="box">
        <div class="container">
          <p>Pada persoalan berikutnya, setiap soal memperlihatkan sesuatu bentuk tertentu yang terpotong menjadi beberapa bagian. <br>

            Carilah diantara bentu-bentuk yang ditentukan (a,b,c,d) bentuk yang dapat dibangun
            dengan menyusun potongan potongan itu sedemikian rupa sehingga tidak ada kelebihan
            atau ruang diantaranya. <br>

            Carilah bentuk-bentuk itu dan pilihlah huruf yang menunjukkan bentuk tadi pada
            pilihan gambar dibawah soal.
          </p>
        </div>
        <div class="soal-item container">
          <h1>Contoh 07</h1>
          <div class="has-text-left">
            <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/ca27f0cd-a11f-447d-9248-ffb1e178860d.png" alt="">
          </div>
          <div class="container">
            <p>Jika potongan-potongan pada contoh 07 di atas disusun (digabungkan), maka akan menghasilkan bentuk a. Oleh karena itu, pilihlah gambar a . </p>
          </div>
            <div class="radio-gbr-group has-text-centered">
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/d5cae573-aa2a-448f-957b-f8ecb7ef580f.png" alt=""> <br>
                <input id="1" type="radio" name="jawaban1" value="1">
                <label for="1">a</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/87af31f5-2424-4dcd-b36c-23ead659cd19.png" alt=""> <br>
                <input id="2" type="radio" name="jawaban1" value="2">
                <label for="2">b</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/87af31f5-2424-4dcd-b36c-23ead659cd19.png" alt=""> <br>
                <input id="4" type="radio" name="jawaban1" value="4">
                <label for="4">c</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/32858106-33e0-4478-9f99-9a036f097fe2.png" alt=""> <br>
                <input id="3" type="radio" name="jawaban1" value="3">
                <label for="3">d</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/a15465d2-59b8-4f5e-a202-980781f3bd28.png" alt=""> <br>
                <input id="5" type="radio" name="jawaban1" value="5">
                <label for="5">e</label>
              </div>
            </div>
          </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <div class="has-text-left">
            <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/c8cdd86b-e77b-45c5-b3eb-e054bedf7c62.png" alt="">
          </div>
          <div class="container">
            <p>Potongan-potongan contoh ini setelah disusun (digabungkan) menghasilkan bentuk e. Oleh karena itu, pilihlah gambar e</p>
          </div>
            <div class="radio-gbr-group has-text-centered">
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/d5cae573-aa2a-448f-957b-f8ecb7ef580f.png" alt=""> <br>
                <input id="1b" type="radio" name="jawaban2" value="1b">
                <label for="1b">a</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/87af31f5-2424-4dcd-b36c-23ead659cd19.png" alt=""> <br>
                <input id="2b" type="radio" name="jawaban2" value="2b">
                <label for="2b">b</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/87af31f5-2424-4dcd-b36c-23ead659cd19.png" alt=""> <br>
                <input id="3b" type="radio" name="jawaban2" value="3b">
                <label for="3b">c</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/32858106-33e0-4478-9f99-9a036f097fe2.png" alt=""> <br>
                <input id="4b" type="radio" name="jawaban2" value="4b">
                <label for="4b">d</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/a15465d2-59b8-4f5e-a202-980781f3bd28.png" alt=""> <br>
                <input id="5b" type="radio" name="jawaban2" value="5b">
                <label for="5b">e</label>
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
    jenisSoal() {
      return this.$route.query.jenis;
    },
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