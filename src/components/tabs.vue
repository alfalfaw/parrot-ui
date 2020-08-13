<template>
  <div class="pt-tabs">
    <div class="pt-tabs__header" v-if="titles">
      <span
        class="pt-tabs__header__link"
        :class="{ active: value === item.name }"
        v-for="(item, index) in titles"
        :key="index"
        @click="handleClick(index, item)"
        ><span class="pt-tabs__header__title"> {{ item.label }}</span>
      </span>
    </div>
    <div class="pt-tabs__content" ref="tabPane">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PtTabs',
  props: {
    value: null
  },

  data() {
    return {
      titles: []
    }
  },
  mounted() {
    this.init()
  },
  created() {
    // console.log(this.value)
  },
  methods: {
    init() {
      this.$children.forEach(item => {
        this.titles.push({ label: item.label, name: item.name })
      })
    },
    handleClick(index, item) {
      this.$refs.tabPane.style.left = -index * 100 + '%'
      this.$emit('input', item.name)
      this.$emit('tab-click')
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-tabs {
  color: #606266;
  border-radius: 8px;
  overflow: hidden;
  transition: 0.65s;
  box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
    6px 6px 10px rgba(0, 0, 0, 0.15);
  &:hover {
    box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
      2px 2px 4px rgba(0, 0, 0, 0.1);
  }

  .pt-tabs__header {
    font-size: 14px;
    background: #ecf0f3;
    padding: 3px 15px;

    .pt-tabs__header__link {
      display: inline-block;
      padding: 3px 5px;
      margin: 0 2px;
      position: relative;
      transform: skewX(30deg);
      box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.15);
      transition: 0.65s;
      border-top-right-radius: 35%;
      border-bottom-left-radius: 35%;
      &.active {
        background: #95afc0;
        color: white;
      }
      &:hover {
        box-shadow: 1px 2px 8px 0 rgba(0, 0, 0, 0.09);
      }

      // -moz-user-select: none;
      // -webkit-user-select: none;
      // user-select: none;
      cursor: pointer;
      .pt-tabs__header__title {
        display: inline-block;
        transform: skewX(-30deg);
      }
    }
  }
  .pt-tabs__content {
    position: relative;
    display: flex;
    transition: 0.65s;
  }
}
</style>
