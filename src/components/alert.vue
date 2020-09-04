<template>
  <div class="pt-alert">
    <div class="pt-alert--inner" :style="{ backgroundColor: colors[type]['background-color'], color: colors[type]['color'] }">
      <i v-if="icon" :class="icon"></i>
      <span class="title">{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PtAlert',
  props: {
    type: {
      type: String,
      default: 'info'
    },
    icon: {
      type: String,
      default: 'iconfont icon-info_fill'
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      colors: {
        success: {
          'background-color': '#f0f9eb',
          color: '#67c23a'
        },
        info: {
          'background-color': '#ecf0f3',
          color: '#95afc0'
        },
        warning: {
          'background-color': '#fdf6ec',
          color: '#e6a23c'
        },
        error: {
          'background-color': '#fef0f0',
          color: '#f56c6c'
        }
      }
    }
  },
  computed: {
    color() {
      return ''
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.pt-alert {
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  transition: 0.65s;
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .pt-alert--inner {
    height: 30px;
    line-height: 30px;
    padding: 0 1rem;
    border-radius: 3px;
    color: #95afc0;
    font-size: 13px;
    .iconfont {
      font-size: 14px;
    }
    .title {
      margin-left: 5px;
    }
  }
}
</style>
