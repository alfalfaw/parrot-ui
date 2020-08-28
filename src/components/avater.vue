<template>
  <div class="pt-avater">
    <img :src="src" />
  </div>
</template>

<script>
export default {
  name: 'PtAvater',
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 100
    },
    shape: {
      type: String,
      default: 'square'
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-avater {
}
</style>
