<template>
  <div id="app">
    <pt-radio-group v-model="gender">
      <pt-radio label="1">男</pt-radio>
      <pt-radio label="0">女</pt-radio>
    </pt-radio-group>
    <div class="divider"></div>
    <pt-button round small @click="handleClick" icon="icon-pinglun">提交</pt-button>
    <div class="divider"></div>
    <pt-checkbox v-model="status" checked-value="accepted" unchecked-value="not_accepted" label="是否接受协议"></pt-checkbox>
    <div class="divider"></div>
    <pt-switch v-model="switch1" checked-value="accepted" unchecked-value="not_accepted"></pt-switch>
    <div class="divider"></div>
    <pt-input showPassword clearable v-model="inputVal" type="text"></pt-input>
    <div class="divider"></div>
    <pt-button round @click="toggleDialog" icon="icon-pinglun">{{ visible ? '关闭Dialog' : '打开Dialog' }}</pt-button>
    <pt-dialog :visible.sync="visible" @opened="dialogOpened" @closed="dialogClosed">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, perspiciatis! Voluptas assumenda aut sequi id voluptatum autem
      consectetur! Sapiente eius expedita aspernatur inventore, laboriosam alias minima facere molestiae? Obcaecati, assumenda?
      <template slot="footer">
        <pt-button round small @click="handleClick" icon="icon-pinglun">提交</pt-button>
      </template>
    </pt-dialog>
    <div class="divider"></div>
    <pt-button round @click="showMessage">显示消息</pt-button>
    <div class="divider"></div>
    <pt-select v-model="selectVal"></pt-select>
    <div class="divider"></div>
    <pt-date-picker v-model="dateVal"></pt-date-picker>
    <div class="divider"></div>
    <pt-tabs v-model="activeName" @tab-click="handleTabChange">
      <pt-tab-pane label="离散数学" name="tab-one">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, minus similique! Iure tempore possimus iusto aliquid odit minima,
        laudantium illum quasi facere quisquam sapiente sint consequatur, cupiditate numquam repellendus quidem!
      </pt-tab-pane>
      <pt-tab-pane label="数据结构" name="tab-two">222</pt-tab-pane>
      <pt-tab-pane label="计算机组成" name="tab-three">333</pt-tab-pane>
    </pt-tabs>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  watch: {},
  data() {
    return {
      gender: '1',
      status: 'accepted',
      switch1: 'not_accepted',
      inputVal: '请输入内容',
      visible: false,
      selectVal: 10012,
      dateVal: '2020-08-08',
      // testDate: '2020-08-15'
      activeName: 'tab-one'
    }
  },
  methods: {
    handleClick(e) {
      // console.log('button clicked')
    },
    toggleDialog() {
      this.visible = !this.visible
    },
    dialogOpened() {
      // console.log('dialog opened')
    },
    dialogClosed() {
      // console.log('dialog closed')
    },
    // 显示消息
    showMessage() {
      const choice = ['info', 'warning', 'error', 'success']
      this.$message({ content: '这是一条消息', type: choice[Math.floor(Math.random() * 4)] })
    },
    handleTabChange() {}
  },
  created() {}
}
</script>

<style lang="scss">
.divider {
  margin-bottom: 20px;
}
#message {
  // position: fixed;
  // left: 50%;
  // transform: translateX(-50%);
  // top: 20px;
}
</style>
