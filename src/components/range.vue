<template>
  <div class="pt-range">
    <div class="mask" ref="mask"></div>
    <input
      class="pt-range__inner"
      type="range"
      :max="max"
      :min="min"
      :step="step"
      datalist="tickmarks"
      :value="value"
      @change="$emit('input', $event.target.value)"
      @input="handleInput"
    />
    <datalist v-if="datalist" id="tickmarks">
      <option :value="option.value" v-for="(option, index) of datalist" :key="index" :label="option.label"></option>
    </datalist>
  </div>
</template>

<script>
export default {
  name: 'PtRange',
  props: {
    value: {
      type: String,
      default: '0'
    },
    datalist: {
      type: Array
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    // step 为 any 可以选择浮点数
    step: {
      type: Number || String,
      default: 1
    }
  },
  data() {
    return {}
  },
  // watch: {
  //   value: {
  //     handler: function(newVal) {
  //       this.$nextTick(() => {
  //         // console.log('打印this')
  //         // console.log(this)
  //         const width = (newVal / this.max) * 100 + '%'
  //         this.$refs.mask.style.width = width
  //       })
  //     },
  //     immediate: true // 第一次刷新页面时就会执行
  //   }
  // },
  methods: {
    updateUI(value) {
      const width = (value / this.max) * 100 + '%'
      this.$refs.mask.style.width = width
    },
    handleInput(e) {
      this.updateUI(e.target.value)
    }
  },
  mounted() {
    this.updateUI(this.value)
  }
}
</script>

<style lang="scss" scoped>
.pt-range {
  display: inline-flex;
  border-radius: 3px;
  position: relative;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  transition: 0.65s;
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .mask {
    content: '';
    position: absolute;
    border-radius: 3px;
    top: 0;
    left: 0;
    bottom: 0;
    width: 0;
    background: #ecf0f3;
  }

  .pt-range__inner {
    z-index: 1;
    background: transparent;
    -webkit-appearance: none;
    appearance: none;
    margin: 0;
    border-radius: 3px;
    outline: none;
    opacity: 0.7;
    -webkit-transition: opacity 0.2s;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
    &::-webkit-slider-thumb {
      position: relative;
      z-index: 999;
      -webkit-appearance: none;
      appearance: none;
      cursor: pointer;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #95afc0;
    }
  }
}
</style>
