<template>
  <button
    class="pt-button"
    @click="handleClick"
    :disabled="disabled"
    :class="[`pt-button--${type}`, { 'is-round': round, 'is-circle': circle, 'is-disabled': disabled }]"
  >
    <i :class="['iconfont', icon]" v-if="icon"></i>
    <span>
      <slot></slot>
    </span>
  </button>
  <!-- 字体图标 -->
</template>

<script>
export default {
  name: 'PtButton',
  props: {
    // 按钮类型
    type: {
      type: String,
      default: 'default'
    },

    // 椭圆按钮
    round: {
      type: Boolean,
      default: false
    },

    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  created() {
    console.log(this.icon)
  }
}
</script>

<style lang="scss" scoped>
.pt-button {
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ecf0f3;
  border: none;
  // border: 1px solid #dcdfe6;
  color: #606266;
  // 去除系统默认的 appearance
  -webkit-appearance: none;
  text-align: center;
  // box-sizing: border-box;
  outline: none;
  // margin: 0;
  transition: 0.1s;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 12px 18px;
  font-size: 14px;
  border-radius: 4px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &:active {
    box-shadow: inset -2px -2px 6px rgba(255, 255, 255, 0.7), inset -2px -2px 4px rgba(255, 255, 255, 0.5),
      inset 2px 2px 2px rgba(255, 255, 255, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
  }
  &.is-round {
    border-radius: 16px;
  }
  &.is-circle {
    border-radius: 50%;
  }
  &--primary {
    color: white;
    background: rgba(85, 185, 243, 0.85);

    &:active {
      box-shadow: inset -2px -2px 6px rgba(85, 185, 243, 0.7), inset -2px -2px 4px rgba(85, 185, 243, 0.5),
        inset 2px 2px 2px rgba(85, 185, 243, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    }
  }
  &--success {
    color: white;
    background: rgb(40, 167, 69, 0.85);

    &:active {
      box-shadow: inset -2px -2px 6px rgba(40, 167, 69, 0.7), inset -2px -2px 4px rgba(40, 167, 69, 0.5),
        inset 2px 2px 2px rgba(40, 167, 69, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    }
  }
  &--danger {
    color: white;
    background: rgba(235, 77, 75, 0.85);

    &:active {
      box-shadow: inset -2px -2px 6px rgba(235, 77, 75, 0.7), inset -2px -2px 4px rgba(235, 77, 75, 0.5),
        inset 2px 2px 2px rgba(235, 77, 75, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    }
  }
  &--warning {
    color: white;
    background: rgba(240, 147, 43, 1);

    &:active {
      box-shadow: inset -2px -2px 6px rgba(240, 147, 43, 0.7), inset -2px -2px 4px rgba(240, 147, 43, 0.5),
        inset 2px 2px 2px rgba(240, 147, 43, 0.075), inset 2px 2px 4px rgba(0, 0, 0, 0.15);
    }
  }
  .iconfont {
    margin-right: 2px;
    vertical-align: text-bottom;
  }
}
</style>
