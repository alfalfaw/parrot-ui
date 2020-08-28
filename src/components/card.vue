<template>
  <div class="pt-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PtCard'
}
</script>

<style lang="scss" scoped>
.pt-card {
  display: inline-block;
  color: #606266;
  max-width: 180px;
  border-radius: 3px;
  background: #ecf0f3;
  transition: 0.65s;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  img {
    max-width: 100%;
  }
}
</style>
