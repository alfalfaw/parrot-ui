<template>
  <div id="app">
    <pt-radio-group v-model="gender">
      <pt-radio label="1">男</pt-radio>
      <pt-radio label="0">女</pt-radio>
    </pt-radio-group>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      gender: '1'
    }
  }
}
</script>

<style lang="scss"></style>
