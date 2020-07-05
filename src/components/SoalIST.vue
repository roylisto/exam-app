<template>
  <div id="soal-ist">
    <p>{{soal.nomor}}. {{soal.pertanyaan}}</p>
    <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn">
      <input type="radio" id="value" v-model="jawaban" v-bind:value="index" checked>
      <label>{{value}}</label>
    </div>
    <button class="button" v-if="total !== nomor" @click="submitJawaban">Berikutnya</button>
    <button class="button" v-else @click="submitJawaban">Selesai</button>
  </div>
</template>

<script>

export default {
  name: 'soal-ist',
  props: ['soal', 'nomor', 'total'],
  data: () => ({
    jawaban: ''
  }),
  computed: {
    isLast() {
      return this.nomor === this.soal.length
    }
  },
  methods: {
    submitJawaban: function() {
      this.$emit('jawaban', { jawaban: this.jawaban });
      this.jawaban;
    }
  }
}
</script>