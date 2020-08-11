<template>
  <transition name="message-fade">
    <div class="pt-message" :class="`pt-message--${type}`" v-show="visible" key="aaa">
      <span class="iconfont" :class="'icon-' + type + '_fill'"></span>
      <span class="pt-message__content">
        {{ content }}
      </span>
      <span v-if="closeable" class="iconfont" :class="'icon-' + type"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PtMessage',
  data() {
    return {
      content: '',
      time: 3000,
      visible: false,
      type: 'info',
      closeable: false
    }
  },
  mounted() {
    this.close()
  },
  methods: {
    close() {
      setTimeout(() => {
        this.visible = false
      }, this.time)
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-message {
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0);

  padding: 6px 12px;
  color: #606266;
  font-size: 13px;
  border-radius: 3px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  background: #fff;
  margin-bottom: 8px;

  .iconfont {
    font-size: 12px;
    &.icon-success_fill {
      color: rgb(26, 198, 13);
    }
    &.icon-info_fill {
      color: rgba(42, 132, 255);
    }
    &.icon-warning_fill {
      color: rgb(253, 135, 9);
    }
    &.icon-error_fill {
      color: rgb(251, 25, 8);
    }
  }
}
.message-fade-enter-active,
.message-fade-leave-active {
  transition: all 0.65s;
}

.message-fade-enter,
.message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
</style>
