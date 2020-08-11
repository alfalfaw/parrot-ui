<template>
  <div class="pt-switch" :class="{ 'is-checked': checked }">
    <span class="pt-switch__input">
      <span class="pt-switch__inner"></span>
      <input type="checkbox" class="pt-switch__original" v-model="model" />
    </span>
  </div>
</template>

<script>
export default {
  watch: {
    value(newVal) {
      console.log(newVal)
    }
  },
  name: 'PtSwitch',
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
    // console.log(this.value)
    // console.log(this.checkedValue)
    // console.log(this.uncheckedValue)
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.pt-switch {
  display: inline-flex;
  color: #606266;
  font-size: 14px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  white-space: nowrap;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border-radius: 10px;
  background: #fff;
  transition: 0.65s;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);

  & + .pt-switch {
    margin-left: 30px;
  }
  .pt-switch__input {
    height: 20px;
    width: 40px;
    position: relative;
    .pt-switch__inner {
      position: absolute;
      content: '';
      width: 12px;
      height: 12px;
      top: 50%;
      left: 3px;
      transform: translateY(-50%);
      border-radius: 50%;
      background: #ecf0f3;
      transition: 0.65s;
    }
    .pt-switch__original {
      display: block;
      opacity: 0;
      outline: none;
      position: absolute;
      width: 100%;
      height: 100%;
      margin: 0;
      // z-index 必须较高
      z-index: 1;
    }
  }

  &.is-checked {
    background: #ecf0f3;

    .pt-switch__input {
      .pt-switch__inner {
        // 必须取消设置
        left: calc(100% - 15px);
        background: #95afc0;
      }
    }
  }
}
</style>
