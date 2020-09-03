<template>
  <div
    class="pt-tooltip"
    :class="[{ 'is-hover': hover && !disabled }, 'is-' + placement]"
    @mouseenter="hover = true"
    @mouseleave="hover = false"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PtTooltip',
  props: {
    content: {
      type: String,
      default: ''
    },
    placement: {
      type: String,
      default: 'left'
    },

    // 是否禁用 tooltip
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hover: false
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-tooltip {
  display: inline-block;
  position: relative;

  &::after {
    padding: 3px 5px;
    font-size: 12px;
  }
  &::after,
  &::before {
    transition: 0.65s;
  }
  &::before {
    content: '';
    display: inline-block;
    position: absolute;
    top: calc(100% + 2px);
    bottom: unset;
    border: 3px solid transparent;
    border-bottom: 3px solid #95a5a6;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
  }
  &::after {
    content: '这是一段文字';
    display: inline-block;
    position: absolute;
    top: calc(100% + 8px);
    bottom: unset;
    left: 50%;
    transform: translateX(-50%);
    white-space: nowrap;
    background: #95a5a6;
    color: white;
    border-radius: 4px;
    opacity: 0;
  }
  &.is-hover {
    &::after {
      opacity: 0.9;
    }
    &::before {
      opacity: 0.9;
    }
  }

  &.is-top {
    &::before {
      bottom: calc(100% + 2px);
      top: unset;

      border: 3px solid transparent;
      border-top: 3px solid #95a5a6;
    }
    &::after {
      bottom: calc(100% + 8px);
      top: unset;
    }
  }
  &.is-top-start {
    &::before {
      top: unset;
      bottom: calc(100% + 2px);
      border: 3px solid transparent;
      border-top: 3px solid #95a5a6;
    }
    &::after {
      top: unset;
      bottom: calc(100% + 8px);
      left: 0;
      transform: translateX(0);
    }
  }
  &.is-top-end {
    &::before {
      top: unset;
      bottom: calc(100% + 2px);
      border: 3px solid transparent;
      border-top: 3px solid #95a5a6;
    }
    &::after {
      top: unset;
      right: 0px;
      left: unset;
      transform: none;
      bottom: calc(100% + 8px);
    }
  }

  &.is-bottom-start {
    &::after {
      transform: none;
      left: 0;
    }
  }
  &.is-bottom-end {
    &::after {
      transform: none;
      right: 0;
      left: unset;
    }
  }
  &.is-right {
    &::before {
      left: calc(100% + 2px);
      transform: translate(0, -50%);
      top: 50%;
      border: 3px solid transparent;
      border-right: 3px solid #95a5a6;
    }
    &::after {
      left: calc(100% + 8px);
      transform: translate(0, -50%);
      top: 50%;
    }
  }
  &.is-left {
    &::before {
      left: unset;
      right: calc(100% + 2px);
      transform: translate(0, -50%);
      top: 50%;
      border: 3px solid transparent;
      border-left: 3px solid #95a5a6;
    }
    &::after {
      left: unset;
      right: calc(100% + 8px);
      transform: translate(0, -50%);
      top: 50%;
    }
  }
}
</style>
