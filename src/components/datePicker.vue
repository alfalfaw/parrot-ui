<template>
  <div class="pt-date-picker">
    <input type="date" class="pt-date-picker__inner" v-model="model" />
  </div>
</template>

<script>
export default {
  name: 'PtDatePicker',
  props: {
    label: {
      type: String,
      default: '生日'
    },
    value: null
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(newVal) {
        this.$emit('input', newVal)
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.pt-date-picker {
  display: inline-block;
  width: 180px;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  transition: 0.65s;
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  .pt-date-picker__inner {
    color: #606266;
    cursor: pointer;
    -webkit-appearance: none;
    border-radius: 4px;
    border: 1px solid #ecf0f3;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 35px;
    line-height: 35px;
    outline: none;
    padding: 0 10px;
    width: 100%;
    &:focus {
      outline: none;
      border-color: #95afc0;
    }
  }
}
</style>
