<template>
  <div class="pt-checkbox" :class="{ 'is-checked': checked }">
    <span class="pt-checkbox__input">
      <span class="pt-checkbox__inner"></span>
      <input type="checkbox" class="pt-checkbox__original" v-model="model" />
    </span>
    <span class="pt-checkbox__label">
      <slot></slot>
      <!-- 如果默认插槽没有内容，则显示label  -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PtCheckbox',
  props: {
    label: {
      type: String,
      default: ''
    },
    value: null,
    checkedValue: null,
    uncheckedValue: null
  },
  data() {
    return {}
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set() {
        this.checked ? this.$emit('input', this.uncheckedValue) : this.$emit('input', this.checkedValue)
      }
    },
    checked() {
      return this.value === this.checkedValue
    }
  },
  created() {
    console.log(this.value)
    console.log(this.checkedValue)
    console.log(this.uncheckedValue)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.pt-checkbox {
  color: #606266;
  font-size: 14px;
  height: 20px;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  display: inline-flex;
  align-items: center;
  & + .pt-checkbox {
    margin-left: 30px;
  }
  .pt-checkbox__input {
    border: 1px solid #95afc0;
    box-sizing: border-box;
    position: relative;
    width: 14px;
    height: 14px;
    box-shadow: -8px -4px 8px 0px #ffffff, 8px 4px 12px 0px #d1d9e6;

    .pt-checkbox__inner {
      display: block;
      position: relative;
      height: 100%;
      width: 100%;
      z-index: 1;
    }
    .pt-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      // z-index 必须较高
      z-index: 1;
    }
  }
  .pt-checkbox__label {
    display: inline-block;
    padding-left: 10px;
  }
  &.is-checked {
    .pt-checkbox__input {
      .pt-checkbox__inner {
        &::after {
          position: absolute;
          content: '';
          width: 7px;
          height: 7px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 2px;
          background: #95afc0;
        }
      }
    }
    .pt-checkbox__label {
      color: #95afc0;
    }
  }
}
</style>
