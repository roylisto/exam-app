<template>
  <div id="soal-ist">
    <p>{{soal.nomor}}. {{soal.pertanyaan}}</p>
    <div v-for="(value, index) in soal.pilihan" :key="index" class="radiobtn">
        <p>
      <input type="radio" id="value" v-model="jawaban" v-bind:value="value" checked>
      <label>{{value}}</label>
  </p>
    </div>
    <button class="button" v-if="!soal.isLast" @click="submitJawaban">Berikutnya</button>
    <button class="button" v-else @click="submitJawaban">Selesai</button>
  </div>
</template>

<script>

export default {
  name: 'soal-ist',
  props: ['soal', 'nomor'],
  data: () => ({
    jawaban: ''
  }),
  computed: {
    isLast() {
      console.log(this.soal)
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