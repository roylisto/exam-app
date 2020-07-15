<template>
  <div id="soal-ist">
    <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
      <div v-if="soal.kategori == 'pilgan'">
        <div class="radio-btn-group">
          <div v-for="(value, index) in soal.pilihan" :key="index" class="radio">
            <input :id="value" type="radio" name="radio" :value="value" checked="checked" v-model="checked">
            <label :for="value">{{value}}</label>
          </div>
        </div>
      </div>
      <div v-else-if="soal.kategori == 'gambar'">
        <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn has-text-left" >
          <input type="radio" id="value" v-model="jawaban" v-bind:value="index">
          <label>{{value}}</label>
        </div>
      </div>
      <div v-else-if="soal.kategori == 'nosoal'">
        <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn has-text-left" >
          <input type="radio" id="value" v-model="jawaban" v-bind:value="index">
          <label>{{value}}</label>
        </div>
      </div>
      <div v-else>
        <div class="radio-btn-group">
          <div v-for="(value, index) in soal.pilihan" :key="index" class="radio">
            <input :id="value" type="radio" name="radio" :value="value" checked="checked" v-model="checked">
            <label :for="value">{{value}}</label>
          </div>
        </div>
      </div>
    <b-button class="button" v-if="total !== nomor" @click="submitJawaban" type="is-primary">Berikutnya</b-button>
    <!-- <button class="button" @click="Kembali">Sebelumnya</button> -->
    <b-button class="button" v-else @click="kirimJawaban" type="is-primary">Selesai</b-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'soal-ist',
  props: ['soal', 'nomor', 'total', 'jawabanBundle'],
  data: () => ({
    jawaban: '',
    checked: ''
  }),
  computed: {
    isLast() {
      return this.nomor === this.soal.length
    },
    ...mapGetters("ist", ["jawabanTersimpan"])
  },
  methods: {
    submitJawaban: function() {
      this.$emit('jawaban', { jawaban: this.jawaban });
      this.jawaban;
    },
    kirimJawaban: function() {
      var id = JSON.parse(this.$store.getters['auth/user']).id
      var payload = {
        jawaban_peserta: this.jawabanBundle,
        peserta_id: id,
        paket_soal: this.$route.query.paket,
        jenis_soal: this.$route.query.jenis,
      }
      
      this.$store.dispatch("soal/kirimJawaban", payload)
        .then((response) => {
          console.log(response)
          if (response.status == 200) {
            this.$buefy.toast.open({
                duration: 5000,
                message: `Jawaban berhasil diinput`,
                position: 'is-bottom',
                type: 'is-success'
            })
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