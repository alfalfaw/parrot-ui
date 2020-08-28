<template>
  <div class="pt-pagination">
    <div class="pt-pagination__inner">
      <span>&lt;</span>
      <!-- 开始页 -->
      <span>1</span>
      <span v-show="leftDots">...</span>

      <span>2</span>
      <span>3</span>
      <span>4</span>

      <span v-show="rightDots">...</span>

      <!-- 末尾页面 -->
      <span v-if="pageCount > 1">{{ pageCount }}</span>
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
      default: 5
    },
    currentPage: {
      type: Number,
      default: 0
    }
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  created() {
    console.log('打印总页数')
    console.log(this.count)
  }
}
</script>

<style lang="scss" scoped>
.pt-pagination {
}
</style>
