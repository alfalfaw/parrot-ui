<template>
  <div class="pt-dialog">
    <transition name="dialog-fade" @after-enter="afterEnter" @after-leave="afterLeave">
      <div class="pt-dialog__wrapper" v-show="visible" @click.self="handleClose" :style="{ width: width, top: top }">
        <div class="pt-dialog__header">
          <slot name="title">
            <span class="pt-dialog__title">{{ title }}</span>
          </slot>
          <span class="pt-dialog__close" @click="handleClose">
            <i class="iconfont icon-close"></i>
          </span>
        </div>
        <div class="border-light"></div>
        <div class="pt-dialog__body">
          <slot></slot>
        </div>
        <div class="border-light"></div>
        <div class="pt-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
    <div :class="{ mask: visible }"></div>
  </div>
</template>

<script>
export default {
  name: 'PtDialog',
  props: {
    title: {
      type: String,
      default: '默认标题'
    },
    width: { type: String, default: '400px' },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-dialog {
  text-align: center;
  .pt-dialog__wrapper {
    position: absolute;
    left: 50%;
    // 设置dialog的初始状态x轴偏移自身宽度50%，y轴初始不偏移，动画开始时向下移动
    transform: translate3d(-50%, 0, 0);
    text-align: initial;
    display: inline-block;
    background: #ecf0f3;
    border-radius: 8px;
    color: #606266;
    z-index: 2;
    box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
      6px 6px 10px rgba(0, 0, 0, 0.15);
    &:hover {
      box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
        2px 2px 4px rgba(0, 0, 0, 0.1);
    }
    .pt-dialog__header {
      height: 45px;
      display: flex;
      align-items: center;
      padding: 0 25px;
      justify-content: space-between;
      .pt-dialog__close {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        text-align: center;
        line-height: 24px;
        box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
          6px 6px 10px rgba(0, 0, 0, 0.15);
        &:active {
          box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
            2px 2px 4px rgba(0, 0, 0, 0.1);
        }
      }
    }
    .pt-dialog__body {
      padding: 10px 25px;
    }
    .pt-dialog__footer {
      text-align: right;
      padding: 10px 25px;
    }
  }
  .mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    background: -webkit-linear-gradient(top, #f5f5f5, #f1f1f1);
  }
}
.border-light {
  width: 95%;
  margin: 0 auto;
  height: 1px;
  background: #d1d9e6 !important;
}
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(-50%, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(-50%, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(-50%, -20px, 0);
    opacity: 0;
  }
}
</style>
