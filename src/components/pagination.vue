<template>
  <div class="pt-pagination">
    <div class="pt-pagination__inner">
      <span @click="prev" :class="{ 'is-disabled': index === 1 }">
        <i class="iconfont icon-arrow-left"></i>
      </span>
      <!-- 首页 -->
      <span v-show="pages > 0" @click="current(1)" :class="{ 'is-active': index === 1 }">1</span>
      <span v-show="showPrevMore" @mouseenter="showPrevMoreIcon = true" @mouseleave="showPrevMoreIcon = false" @click="prevStep">
        <i class="iconfont" :class="showPrevMoreIcon ? 'icon-double-arrow-left' : 'icon-ellipsis'"></i>
      </span>

      <span v-for="item of middle" :key="item" @click="current(item)" :class="{ 'is-active': index === item }">{{ item }}</span>

      <span v-show="showNextMore" @mouseenter="showNextMoreIcon = true" @mouseleave="showNextMoreIcon = false" @click="nextStep">
        <i class="iconfont" :class="showNextMoreIcon ? 'icon-double-arro-right' : 'icon-ellipsis'"></i>
      </span>

      <!-- 末页 -->
      <span v-show="pages > 1" @click="current(pages)" :class="{ 'is-active': index === pages }">{{ pages }}</span>
      <span @click="next" :class="{ 'is-disabled': index === pages }">
        <i class="iconfont icon-arrow-right"></i>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PtPagination',
  props: {
    total: {
      type: Number,
      required: true
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pagerCount: {
      type: Number,
      default: 7
    },
    currentPage: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      size: this.total, // 总数
      limit: this.pageSize, // 每页大小
      index: this.currentPage, // 当前页码
      pager: this.pagerCount, // 可见页码，最小为 5 的奇数
      showPrevMoreIcon: false, // 显示跳页图标，鼠标悬停时为 true
      showNextMoreIcon: false // 显示跳页图标，鼠标悬停时为 true
    }
  },
  computed: {
    // 以 index 为圆心，offset 为半径，区间内数字都是可见页码
    offset() {
      return (this.pager - 5) / 2
    },
    // 总页数
    pages() {
      return Math.ceil(this.size / this.limit)
    },
    // 总页数大于可见页码数，且当前值大于 (offset + 2) 时，显示省略号。举个例子，假设 offset 为 0 (pager 为 5 时)，index 为 1 或者 2 时，省略号不显示，为 3 时省略号显示
    showPrevMore() {
      if (this.pages > this.pager && this.index - 2 > this.offset) {
        return true
      }
      return false
    },
    // 还是假设 offset 为 0 ，index 为 (this.pages - 1) 或者 this.pages 时，省略号不显示，小于 (this.pages - 1) 时省略号显示
    showNextMore() {
      if (this.pages > this.pager && this.index + this.offset + 1 < this.pages) {
        return true
      }
      return false
    },
    // 计算省略号之间的页码
    middle() {
      // 只有 0/1/2 页时 arr 是一个空数组
      var arr = []
      if (this.pages <= this.pager) {
        for (let i = 2; i < this.pages; i++) {
          arr.push(i)
        }
      } else {
        // radius 初始值为 offset ，当以 index 为圆心，radius 为半径的区间内数字个数小于 length 时，调整 radius 大小，直到区间内数字个数刚好等于 length 。页码为 1 或者 pages 不能加入到 arr
        let radius = this.offset
        let length = this.pager - 2
        if (this.showPrevMore) length--
        if (this.showNextMore) length--
        // console.log(length)
        while (arr.length < length) {
          arr = []
          for (let i = this.index - radius; i <= this.index + radius; i++) {
            if (i > 1 && i < this.pages) {
              arr.push(i)
            }
          }
          radius++
        }
      }
      // console.log(arr)
      return arr
    }
  },
  methods: {
    prev() {
      if (this.index > 1) {
        this.index--
      } else {
        this.index = 1
      }
      this.$emit('prev-click', this.index)
    },
    next() {
      if (this.index < this.pages) {
        this.index++
      } else {
        this.index = this.pages
      }
      this.$emit('next-click', this.index)
    },
    current(num) {
      this.index = num
      this.$emit('current-change', this.index)
    },
    // 跳页步数选择 (offset + 1)，假设 offset 为 0，跳页步数则为 1
    prevStep() {
      if (this.index > this.offset + 1) {
        this.index -= this.offset + 1
      } else {
        this.index = 1
      }
    },
    nextStep() {
      if (this.index + (this.offset + 1) <= this.pages) {
        this.index += this.offset + 1
      } else {
        this.index = this.pages
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-pagination {
  .pt-pagination__inner {
    span {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      text-align: center;
      width: 30px;
      margin-right: 10px;
      background: #ecf0f3;
      cursor: pointer;
      border-radius: 5px;
      user-select: none;
      transition: box-shadow 0.65s;
      box-shadow: -6px -6px 14px rgba(255, 255, 255, 0.7), -6px -6px 10px rgba(255, 255, 255, 0.5), 6px 6px 8px rgba(255, 255, 255, 0.075),
        6px 6px 10px rgba(0, 0, 0, 0.15);
      &:hover {
        box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
          2px 2px 4px rgba(0, 0, 0, 0.1);
      }
      &.is-active {
        background: #95afc0;
        color: white;
      }
      &.is-disabled {
        color: #c9c9c9;
        box-shadow: -2px -2px 6px rgba(255, 255, 255, 0.6), -2px -2px 4px rgba(255, 255, 255, 0.4), 2px 2px 2px rgba(255, 255, 255, 0.05),
          2px 2px 4px rgba(0, 0, 0, 0.1);
        cursor: not-allowed;
      }
    }
  }
}
</style>
