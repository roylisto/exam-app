<template>
  <div id="soal">
    <div v-if="jenisSoal == 'ist'">
      <div v-if="soal.kategori == 'pilgan'">
        <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
        <div class="radio-btn-group">
          <div v-for="(value, index) in soal.pilihan" :key="index" class="radio">
            <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
            <label :for="value">{{`${index}. ${value}`}}</label>
          </div>
        </div>
      </div>
      <div v-else-if="soal.kategori == 'gambar'">
        <!-- <p class="has-text-left">{{soal.nomor}}</p> -->
        <div class="has-text-left">
          <img :src="gambarURL + '/' + soal.pertanyaan" alt="">
        </div>
        <div class="radio-gbr-group has-text-centered">
            <div v-for="(value, index) in soal.pilihan" :key="index" class="radio" >
              <img :src="gambarURL + '/' + value" alt="">
              <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
              <label :for="value">{{index}}</label>
            </div>
        </div>
      </div>
      <div v-else-if="soal.kategori == 'nosoal'">
        <b-button disabled type="is-text">{{`Nomor ${nomor} dari ${total} soal`}}</b-button>
        <div class="radio-btn-group">
          <div v-for="(value, index) in soal.pilihan" :key="index" class="radio" >
            <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
            <label :for="value">{{`${index}. ${value}`}}</label>
          </div>
        </div>
      </div>
      <div v-else-if="soal.kategori == 'nopilgan'">
        <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
          <section>
            <b-field label="Jawaban">
                <b-input v-model="jawaban[soal.nomor - 1]"></b-input>
            </b-field>
          </section>
      </div>
      <div v-else-if="soal.kategori == 'pilganbutton'">
        <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
          <div class="radio-gbr-group">
            <div v-for="(value, index) in pilganbutton" :key="index" class="radio" >
              <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
              <label :for="value">{{value}}</label>
            </div>
          </div>
      </div>
      <div v-else>
        <div class="radio-btn-group">
          <div v-for="(value, index) in soal.pilihan" :key="index" class="radio">
            <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
            <label :for="value">{{value}}</label>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
      <div class="radio-btn-group">
        <div v-for="(value, index) in soal.pilihan" :key="index" class="radio">
          <input :id="value" type="radio" :name="jawaban[index]" :value="index" v-model="jawaban[soal.nomor - 1]">
          <label :for="value">{{value}}</label>
        </div>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-button class="button" v-if="nomor != '1'" @click="submitJawaban('Sebelumnya')" type="is-primary" outlined>Sebelumnya</b-button>
        <b-button class="button" v-if="total !== nomor" @click="submitJawaban('Berikutnya')" type="is-primary">Berikutnya</b-button>
        <b-button class="button" v-else @click="kirimJawaban" type="is-primary">Selesai</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'soal-ist',
  props: ['soal', 'nomor', 'total', 'dataJawaban'],
  data: () => ({
    pilganbutton: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 0
    ],
    jawaban: []
  }),
  computed: {
    gambarURL() {
      return process.env.VUE_APP_IMAGE_URL
    },
    jenisSoal() {
      return this.$route.query.jenis;
    },
    isLast() {
      return this.nomor === this.soal.length
    },
    ...mapGetters("ist", ["jawabanTersimpan"]),
    bindJawaban() {
      this.jawaban = this.jawabanTersimpan
    }
  },
  created() {
    this.jawabanTersimpan;
    this.bindJawaban;
  },
  methods: {
    submitJawaban: function(e) {
      this.$emit('jawaban', { jawaban: this.jawaban, aksi: e });
      this.jawaban;
    },
    kirimJawaban: function() {
      var id = JSON.parse(this.$store.getters['auth/user']).id
      var payload = {
        jawaban_peserta: this.jawaban,
        peserta_id: id,
        paket_soal: this.$route.query.paket,
        jenis_soal: this.$route.query.jenis,
      }

      this.$store.dispatch("soal/kirimJawaban", payload)
        .then((response) => {
          
          if (response.status == 200) {
            this.$buefy.toast.open({
                duration: 5000,
                message: `Jawaban berhasil diinput`,
                position: 'is-bottom',
                type: 'is-success'
            })
            this.$store.dispatch('ist/resetJawaban');
            this.$router.replace('rincian-test');
          }
        })
        .catch((error) => {
          console.error(error)
        })
    }
  }
}
</script>

<style>
/* non-gambar */
.radio-btn-group {
  display: -webkit-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.radio-btn-group .radio {
  margin: 1em .25rem;
}
.radio-btn-group .radio label {
  background: #fff;
  border: 1px solid #ddd;
  padding: .5rem 1.25rem;
  border-radius: 56px;
  cursor: pointer;
  color: #444;
  -webkit-transition: box-shadow 400ms ease;
  transition: box-shadow 400ms ease;
}
.radio-btn-group .radio label:hover {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.radio-btn-group .radio input[type="radio"] {
  display: none;
}
.radio-btn-group .radio input[type="radio"]:checked + label {
  background: #2196F3;
  color: #fff;
  border-color: #2196F3;
}

/* gambar */
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
.image img {
    height: 210px;
}

.show {
  font-weight: 400;
  color: #444;
}
.show span {
  background: #f5f5f5;
  color: #F44336;
  border-radius: 3px;
  padding: .25rem .5rem;
  font-size: 1.25rem;
  border: 1px solid #f1f1f1;
}
</style>