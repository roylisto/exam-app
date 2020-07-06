<template>
  <div id="soal-ist">
    <p class="has-text-left">{{soal.nomor}}. {{soal.pertanyaan}}</p>
    <template v-if="!jawabanTersimpan">
      {{jawabanTersimpan}}
      <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn has-text-left">
        <input type="radio" id="value" :value="jawabanTersimpan[soal.nomor]" :checked="a">
        <label>{{value}}</label>
      </div>
    </template>
    <template v-else>
      <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn has-text-left">
        <input type="radio" id="value" v-model="jawaban" v-bind:value="index">
        <label>{{value}}</label>
      </div>
    </template>
    <button class="button" v-if="total !== nomor" @click="submitJawaban">Berikutnya</button>
    <!-- <button class="button" @click="Kembali">Sebelumnya</button> -->
    <button class="button" v-else @click="kirimJawaban">Selesai</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'soal-ist',
  props: ['soal', 'nomor', 'total', 'jawabanBundle'],
  data: () => ({
    jawaban: ''
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
      var payload = {
        jawaban_peserta: this.jawabanBundle,
        peserta_id: id,
        paket_soal: this.$router.params.query.paket,
        jenis_soal: this.$router.params.query.jenis,
      }
    }
  }
}
</script>