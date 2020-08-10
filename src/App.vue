<template>
  <div id="app">
    <pt-radio-group v-model="gender">
      <pt-radio label="1">男</pt-radio>
      <pt-radio label="0">女</pt-radio>
    </pt-radio-group>
    <div class="divider"></div>
    <pt-button round @click="handleClick" icon="icon-pinglun">提交表单</pt-button>
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
  },
  methods: {
    handleClick(e) {}
  }
}
</script>

<style lang="scss">
.divider {
  margin-bottom: 20px;
}
</style>
