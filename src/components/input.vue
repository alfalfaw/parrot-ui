<template>
  <div class="pt-input" :class="{ 'pt-input--suffix': showSuffix, 'is-value': !!this.value }">
    <input
      class="pt-input__inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type === 'password' ? (passwordVisible ? 'text' : 'password') : 'text'"
      :disabled="disabled"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
    <span class="pt-input__suffix" v-if="showSuffix">
      <i
        v-if="clearable && this.value"
        class="pt-input__icon iconfont icon-close"
        @click="
          $emit('input', '')
          passwordVisible = false
        "
      ></i>
      <i
        v-if="showPassword && type === 'password'"
        class="pt-input__icon iconfont icon-eye_protection"
        @click="passwordVisible = !passwordVisible"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PtInput',
  props: {
    value: null,
    showSuffix: {
      type: Boolean,
      default: true
    },
    showPassword: {
      type: Boolean,
      default: false
    },

    clearable: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  data() {
    return {
      passwordVisible: false
    }
  },
  computed: {},
  created() {
    console.log(this.showPassword)
    console.log(this.clearable)
    console.log(this.value)
  }
}
</script>

<style lang="scss" scoped>
.pt-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;

  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  transition: 0.65s;
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }
  &.is-value {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .pt-input__inner {
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

    &.is-disabled {
      background: #ecf0f3;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  .pt-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 35px;
    transition: 0.65s;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
      &:hover {
        color: #95afc0;
      }
    }
  }
}
</style>
