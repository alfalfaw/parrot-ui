<template>
  <div class="pt-tab-pane">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PtTabPane',
  props: {
    label: {
      type: String,
      default: '默认标签'
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-tab-pane {
  box-sizing: border-box;
  padding: 4px 12px;
  width: 100%;
  flex: 1 0 auto;
}
</style>
