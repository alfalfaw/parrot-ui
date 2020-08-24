<template>
  <div class="pt-select" :class="{ 'is-value': !!this.value }">
    <div class="pt-select__wrapper">
      <input
        class="pt-select__inner"
        :class="{ 'is-disabled': disabled }"
        :placeholder="placeholder"
        type="text"
        :disabled="disabled"
        v-model="model"
        readonly
        @click="opened = !opened"
      />
      <span class="pt-select__suffix" v-if="showSuffix">
        <i v-show="this.value" class="iconfont icon-close" @click="$emit('input', '')"></i>
        <i class="iconfont" @click="opened = !opened" :class="opened ? 'icon-upward' : 'icon-down'"></i>
      </span>
    </div>
    <div class="pt-select__option" :class="{ opened: opened }">
      <ul>
        <li
          :class="{ selected: option.value === value }"
          v-for="(option, index) in options"
          :key="index"
          @click="$emit('input', option.value)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PtSelect',

  props: {
    showSuffix: {
      type: Boolean,
      default: true
    },
    value: null,
    options: {
      type: Array,
      default: () => {
        return [
          {
            label: '重庆',
            value: 10012
          },
          {
            label: '南京',
            value: 1023203
          },
          {
            label: '青岛',
            value: 13333
          },
          {
            label: '海南',
            value: 23333
          },
          {
            label: '海南',
            value: 23333
          }
        ]
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请选择'
    },
    filterable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    model: {
      get() {
        const res = this.options.filter(option => option.value === this.value)
        if (res.length > 0) return res[0].label
        else return ''
      }
    },
    filterOptions() {
      return this.options.filter(option => option.indexOf(this.model) >= 0)
    }
  },

  data() {
    return {
      opened: false
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.pt-select {
  display: inline-block;
  width: 180px;
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
  .pt-select__wrapper {
    position: relative;
    font-size: 14px;
    .pt-select__inner {
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
    .pt-select__suffix {
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
  .pt-select__option {
    border-top: 0;
    border-left: 1px solid #ecf0f3;
    max-height: 0;
    overflow: hidden;
    transition: 0.4s;
    &.opened {
      max-height: 145px;
      overflow-y: scroll;
    }
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 8px 5px;
        transition: 0.65s;
        font-size: 14px;
        &.selected {
          background: #ecf0f3;
        }
        &:hover {
          background: #ecf0f3;
        }
      }
    }
  }
}
</style>
