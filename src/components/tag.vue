<template>
  <transition name="tag-fade">
    <div class="pt-tag" v-if="visible">
      <span><slot></slot></span>
      <span v-if="closeable" class="iconfont icon-close" @click="handleClick"></span>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'PtTag',
  props: {
    color: {
      type: String,
      default: '#ccc'
    },
    closeable: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    handleClick(evt) {
      if (this.closeable) {
        this.$emit('close', evt)
        this.visible = false
      }
    }
  },
  created() {}
}
</script>

<style lang="scss">
.pt-tag {
  display: inline-block;
  padding: 2px 3px;
  border-radius: 6px;
  font-size: 12px;
  transition: 0.65s;
  opacity: 1;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .iconfont {
    font-size: 12px;
  }
}

.tag-fade-enter-active,
.tag-fade-leave-active {
  transition: all 0.65s;
}
.tag-fade-enter,
.tag-fade-leave-to {
  opacity: 0;
}
</style>
