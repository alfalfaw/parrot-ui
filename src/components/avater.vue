<template>
  <div
    class="pt-avater"
    :style="{ width: size + 'px', height: size + 'px' }"
    :class="{ 'is-circle': shape === 'circle', 'is-square': shape === 'square' }"
  >
    <img ref="img" :src="defaultImg" class="pt-avater__inner" :style="{ objectFit: fit }" />
  </div>
</template>

<script>
export default {
  name: 'PtAvater',
  props: {
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number,
      default: 100
    },
    shape: {
      type: String
    },
    fit: {
      type: String,
      default: 'cover'
    }
  },
  data() {
    return {
      defaultImg: 'https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png'
    }
  },
  methods: {
    loadImage(url) {
      const img = new Image()
      img.onload = res => {
        this.$refs.img.src = url
      }
      img.onerror = err => {
        this.$emit('on-error', err)
        // console.log(err)
      }
      img.src = url
    }
  },
  mounted() {
    this.loadImage(this.src)
  }
}
</script>

<style lang="scss" scoped>
.pt-avater {
  display: inline-block;
  background: #ecf0f3;
  transition: 0.65s;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &.is-square {
    border-radius: 5px;
    .pt-avater__inner {
      border-radius: 5px;
    }
  }
  &.is-circle {
    border-radius: 50%;
    .pt-avater__inner {
      border-radius: 50%;
    }
  }
  .pt-avater__inner {
    height: 100%;
    width: 100%;
    border: none;
  }
}
</style>
