<template>
  <div>
    <Navbar />
    <div class="container mt-5">
      <p class="title has-text-centered has-text-weight-light">
        Petunjuk Soal {{bagianSoal.replace(/_/g, ' ').toUpperCase()}} (117-136)
      </p>
      <div class="box">
        <div class="container">
          <p>
            Ditentukan 5 (lima) buah kubus, yaitu kubus a,b,c,d,e pada tiap tiap kubus terdapat enam tanda yang berlainan pada setiap sisinya. Tiga dari tanda itu dapat dilihat. <br>

            Kubus-kubus yang ditentukan itu ( a, b, c, d,e) ialah kubus-kubus yang berbeda, artinya kubus-kubus itu dapat mempunyai tanda-tanda yang sama, akan tetapi susunannya berlainan.
            Setiap soal memperlihatkan salah satu kubus yang ditentukan didalam kedudukan yang berbeda. <br>

            Carilah kubus yang dimaksudkan itu dan pilihlah jawaban yang tersedia dibawah soal. <br>
            Kubus itu dapat diputar, dapat digulingkan atau dapat diputar dan digulingkan dalam pikiran saudara. Oleh karena itu mungkin akan terlihat suatu tanda yang baru.
          </p>
        </div>
        <div class="soal-item container">
          <h1>Contoh 08</h1>
          <div class="has-text-left">
            <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/9a0a82e8-5634-41f0-9fd2-cf62d55106d1.png" alt="">
          </div>
          <div class="container">
            <p>Contoh ini memperlihatkan kubus  dengan kedudukan yang berbeda. Untuk mendapakannya adalah dengan cara menggulingkan lebih dahulu kubus itu kekiri satu kali dan kemudian diputar kekiri satu kali, sehingga sisi kubus yang bertanda dua segi empat hitam terletak didepan, seperti kubus a. <br> Oleh karena itu pilihan jawaban. Pilihlah jawaban a </p>
          </div>
            <div class="radio-gbr-group has-text-centered">
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/179aa91b-7a76-4589-bf10-99d863dd16fc.png" alt=""> <br>
                <input id="1" type="radio" name="jawaban1" value="1">
                <label for="1">a</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/affce040-f3ae-4fe6-844b-63ee4707b2df.png" alt=""> <br>
                <input id="2" type="radio" name="jawaban1" value="2">
                <label for="2">b</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/07f8846f-f763-4492-b4cf-346b4ab3b832.png" alt=""> <br>
                <input id="4" type="radio" name="jawaban1" value="4">
                <label for="4">c</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/f7f6cea2-7d45-4e77-8a0c-e6f2c6eb64db.png" alt=""> <br>
                <input id="3" type="radio" name="jawaban1" value="3">
                <label for="3">d</label>
              </div>
              <div class="radio" >
                <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/96116835-1845-4937-bdf8-e5d6301ad4e5.png" alt=""> <br>
                <input id="5" type="radio" name="jawaban1" value="5">
                <label for="5">e</label>
              </div>
            </div>
          </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <div class="has-text-left">
            <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/233ee69a-f777-4ff5-aad5-b59f297d7021.png" alt="">
          </div>
          <div class="container">
            <p>Contoh berikutnya jawabannya adalah kubus e. <br> Cara mendapatkannya adalah dengan digulingkan kekiri satu kali dan diputar ke kiri satu kali sehingga sisi kubus yang bertanda garis silang terletak didepan, seperti  kubus e. </p>
          </div>
          <div class="radio-gbr-group has-text-centered">
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/d6c2b2fb-0b51-4843-b92c-142fdb58dede.png" alt=""> <br>
              <input id="1b" type="radio" name="jawaban2" value="1b">
              <label for="1b">a</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/a913ebb3-e4d6-4728-aa23-a62eb2aab7ae.png" alt=""> <br>
              <input id="2b" type="radio" name="jawaban2" value="2b">
              <label for="2b">b</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/200c543c-7a73-4e59-9ad9-d48e7954f662.png" alt=""> <br>
              <input id="3b" type="radio" name="jawaban2" value="3b">
              <label for="3b">c</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/62e706ca-53ae-4a3b-93cb-03ac3857f72a.png" alt=""> <br>
              <input id="4b" type="radio" name="jawaban2" value="4b">
              <label for="4b">d</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/cc9d4b98-9efa-4118-8f44-244005541266.png" alt=""> <br>
              <input id="5b" type="radio" name="jawaban2" value="5b">
              <label for="5b">e</label>
            </div>
          </div>
        </div>

        <div class="soal-item container">
          <h1>Contoh berikutnya</h1>
          <div class="has-text-left">
            <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/efb0cd4a-c003-4488-9c2c-c053a5570bdb.png" alt="">
          </div>
          <div class="container">
            <p>Contoh ini jawabannya adalah kubus b, <br> cara mendapatkannya adalah dengan menggulingkannya ke kiri satu kali sehingga dasar kubus tadinya tidak terlihat memunculkan tanda baru ( dalam hal ini adalah tanda dua segi empat hitam ) tanda silang pada sisi atas kubus itu menjadi tidak terlihat lagi. </p>
          </div>
          <div class="radio-gbr-group has-text-centered">
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/7ee11246-ed9a-49df-b2b3-809d055541ea.png" alt=""> <br>
              <input id="1c" type="radio" name="jawaban2" value="1c">
              <label for="1c">a</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/d01a9db2-83c9-42c1-97f9-ee696178779f.png" alt=""> <br>
              <input id="2c" type="radio" name="jawaban2" value="2c">
              <label for="2c">b</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/a30d4ae9-f97f-4210-b658-83b2fdcf9116.png" alt=""> <br>
              <input id="3c" type="radio" name="jawaban2" value="3c">
              <label for="3c">c</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/ef540bcb-d314-46fe-9847-b6090ad127b6.png" alt=""> <br>
              <input id="4c" type="radio" name="jawaban2" value="4c">
              <label for="4c">d</label>
            </div>
            <div class="radio" >
              <img src="https://cdn.zeplin.io/5eea0882a4d52d4a36e76902/assets/3fb8a4a9-ccc5-4bb1-9e34-39a1297ea659.png" alt=""> <br>
              <input id="5c" type="radio" name="jawaban2" value="5c">
              <label for="5c">e</label>
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