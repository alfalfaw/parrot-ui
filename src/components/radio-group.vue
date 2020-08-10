<template>
  <div class="pt-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PtRadioGroup',
  props: {
    value: null
  },
  // 任何子组件都可以通过inject接收到
  provide() {
    return {
      RadioGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-radio-group {
  width: fit-content;
  padding: 12px 18px;
  border-radius: 16px;
  background: #ecf0f3;
  // box-shadow: 20px 20px 60px #d1d9e6, -20px -20px 60px #d1d9e6;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>
