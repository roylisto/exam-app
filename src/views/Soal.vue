<template>
  <div>
    {{ jenis }}
    <soal-i-s-t v-if="jenis == 'ist'"></soal-i-s-t>
    <soal-m-i-i v-else-if="jenis == 'mii'"></soal-m-i-i>
  </div>
</template>

<script>
import SoalIST from "./SoalIST.vue";
import SoalMII from "./SoalMII.vue";

export default {
  name: 'soal',
  components: {
    SoalIST,
    SoalMII
  },
  computed: {
    jenis() {
      return this.$route.query.jenis;
    }
  }
}
</script>