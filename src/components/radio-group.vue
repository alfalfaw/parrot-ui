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

<style></style>
