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
    <pt-switch v-model="switch1" checked-value="accepted" unchecked-value="not_accepted"></pt-switch>
    <div class="divider"></div>
    <pt-input showPassword clearable v-model="inputVal" type="password"></pt-input>
    <div class="divider"></div>
    <pt-dialog></pt-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      gender: '1',
      status: 'accepted',
      switch1: 'not_accepted',
      inputVal: '请输入内容'
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
