<template>
  <div>
    <sub-test-1 v-if="paketSoal == 'subtest_1_ist'"></sub-test-1>
    <sub-test-2 v-if="paketSoal == 'subtest_2_ist'"></sub-test-2>
    <sub-test-3 v-if="paketSoal == 'subtest_3_ist'"></sub-test-3>
    <sub-test-4 v-if="paketSoal == 'subtest_4_ist'"></sub-test-4>
    <sub-test-5 v-if="paketSoal == 'subtest_5_ist'"></sub-test-5>
    <sub-test-6 v-if="paketSoal == 'subtest_6_ist'"></sub-test-6>
    <sub-test-7 v-if="paketSoal == 'subtest_7_ist'"></sub-test-7>
    <sub-test-8 v-if="paketSoal == 'subtest_8_ist'"></sub-test-8>
    <sub-test-9 v-if="paketSoal == 'subtest_9_ist'"></sub-test-9>
  </div>
</template>

<script>
import SubTest1 from '../components/IST/Subtest1.vue'
import SubTest2 from '../components/IST/Subtest2.vue'
import SubTest3 from '../components/IST/Subtest3.vue'
import SubTest4 from '../components/IST/Subtest4.vue'
import SubTest5 from '../components/IST/Subtest5.vue'
import SubTest6 from '../components/IST/Subtest6.vue'
import SubTest7 from '../components/IST/Subtest7.vue'
import SubTest8 from '../components/IST/Subtest8.vue'
import SubTest9 from '../components/IST/Subtest9.vue'

export default {
  name: 'petunjuk-soal',
  components: {
    SubTest1,
    SubTest2,
    SubTest3,
    SubTest4,
    SubTest5,
    SubTest6,
    SubTest7,
    SubTest8,
    SubTest9,
  },
  computed: {
    jenisSoal() {
      return this.$route.query.jenis;
    },
    paketSoal() {
      return this.$route.query.paket;
    },
    bagianSoal() {
      return this.$route.query.paket.split("_")[1]
    },
  }
}
</script>
