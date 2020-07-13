<template>
  <div>

  </div>
</template>

<script>
export default {
  props: {
    deadline: {
      type: String,
      required: true
    }
  },
  data: () => ({
    currentTime: Date.parse(this.deadline) - Date.parse(new Date())
  }),
  computed: {
    seconds() {
      return Math.floor((this.currentTime/1000) % 60);
    },
    minutes() {
      return Math.floor((this.currentTime/1000/60) % 60);
    },
  },
}
</script>