<template>
  <div class="pt-badge" :class="{ 'is-dot': isDot }">
    <sup class="pt-badge--inner">{{ isDot ? '' : max && value > max ? max + '+' : value }}</sup>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PtBadge',
  props: {
    value: {
      type: Number
    },
    max: {
      type: Number
    },
    isDot: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // console.log(this.max && this.value > this.max ? this.max + '+' : this.value)
  }
}
</script>

<style lang="scss" scoped>
.pt-badge {
  display: inline-block;
  position: relative;
  .pt-badge--inner {
    font-size: 10px;
    position: absolute;
    left: 100%;
    bottom: 100%;
    transform: translate(-50%, 50%);
    background: #95a5a6;
    color: white;
    border-radius: 10px;
    height: 18px;
    line-height: 18px;
    padding: 0 5px;
    text-align: center;
  }
  &.is-dot {
    .pt-badge--inner {
      height: 8px;
      width: 8px;
      padding: 0;
    }
  }
}
</style>
