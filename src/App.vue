<template>
  <div id="app">
    <pt-radio-group v-model="gender">
      <pt-radio label="1">男</pt-radio>
      <pt-radio label="0">女</pt-radio>
    </pt-radio-group>
    <div class="divider"></div>
    <pt-button round @click="handleClick" icon="icon-pinglun">提交表单</pt-button>

    <div class="divider"></div>
    <pt-checkbox v-model="status" checked-value="accepted" unchecked-value="not_accepted" label="是否接受协议"></pt-checkbox>

    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      gender: '1',
      status: 'accepted'
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
