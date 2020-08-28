<template>
  <div class="pt-pagination">
    <div class="pt-pagination__inner">
      <span>&lt;</span>
      <!-- 开始页 -->
      <span v-show="pages > 0" @click="index = 1">1</span>
      <span v-show="showPrevMore">...</span>

      <span v-for="(item, idx) of middle" :key="idx" @click="index = item">{{ item }}</span>

      <span v-show="showNextMore">...</span>

      <!-- 末尾页面 -->
      <span v-show="pages > 1" @click="index = pages">{{ pages }}</span>
      <span>&gt;</span>
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
      size: this.total,
      limit: this.pageSize,
      index: this.currentPage,
      pager: this.pagerCount // 可见页码，最小为 5 的奇数
    }
  },
  computed: {
    offset() {
      return (this.pager - 5) / 2
    },
    pages() {
      return Math.ceil(this.size / this.limit)
    },
    showPrevMore() {
      if (this.pages > this.pager && this.index - 2 > this.offset) {
        return true
      }
      return false
    },
    showNextMore() {
      if (this.pages > this.pager && this.index + this.offset + 1 < this.pages) {
        return true
      }
      return false
    },
    middle() {
      // 1、2 页为空数组
      var arr = []
      if (this.pages <= this.pager) {
        for (let i = 2; i < this.pages; i++) {
          arr.push(i)
        }
      } else {
        let radius = this.offset
        let length = this.pager - 2
        if (this.showPrevMore) length--
        if (this.showNextMore) length--
        console.log(length)
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
      console.log(arr)
      return arr
    }
  },
  created() {}
}
</script>

<style lang="scss" scoped>
.pt-pagination {
  .pt-pagination__inner {
    span {
      margin: 0 10px;
    }
  }
}
</style>
