<template>
  <label class="pt-radio" :class="{ 'is-checked': label === model }">
    <!-- 小圆 -->
    <span class="pt-radio__input">
      <span class="pt-radio__inner"></span>
      <input class="pt-radio__original" type="radio" v-model="model" :value="label" :name="name" />
    </span>
    <span class="pt-radio__label">
      <slot></slot>
      <!-- 如果默认插槽没有内容，则显示label  -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'PtRadio',

  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null,
    name: {
      type: String,
      default: ''
    }
  },
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    // input 双向数据绑定的是model，而不是传进来的 value
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set(value) {
        // 触发父组件或自身input事件，并传入修改后的值
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    // 判断radio是否被radiogroup包裹
    isGroup() {
      return !!this.RadioGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  // 段落中的文本不进行换行
  white-space: nowrap;
  // outline: none;
  font-size: 14px;
  margin-right: 30px;
  // 不可选择
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .pt-radio__input {
    white-space: nowrap;
    // cursor: pointer;
    // outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;

    .pt-radio__inner {
      // 模拟radio
      border: 1px solid #dcdfe6;
      border-radius: 50%;
      display: inline-block;
      height: 14px;
      width: 14px;
      background-color: #fff;
      position: relative;
      // cursor: pointer;
      box-sizing: border-box;
      &::after {
        content: '';
        position: absolute;
        height: 5px;
        width: 5px;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
      }
    }
    .pt-radio__original {
      // 隐藏真实radio
      opacity: 0;
      // outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      // margin: 0;
    }
  }
  .pt-radio__label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.pt-radio.is-checked {
  .pt-radio__input {
    .pt-radio__inner {
      border-color: #409eff;
      background: #409eff;
      &::after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .pt-radio__label {
    color: #409eff;
  }
}
</style>
