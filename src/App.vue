<template>
  <div id="app">
    <pt-radio-group v-model="pet">
      <pt-radio label="1">Cat</pt-radio>
      <pt-radio label="0">Dog</pt-radio>
    </pt-radio-group>
    <div class="divider"></div>
    <pt-button round small @click="handleClick" icon="icon-pinglun">提交</pt-button>
    <div class="divider"></div>
    <pt-checkbox v-model="status" checked-value="accepted" unchecked-value="not_accepted" label="是否接受协议"></pt-checkbox>
    <div class="divider"></div>
    <pt-switch v-model="switch1" checked-value="accepted" unchecked-value="not_accepted"></pt-switch>
    <div class="divider"></div>
    <pt-input clearable v-model="inputVal" type="text"></pt-input>
    <div class="divider"></div>
    <pt-input showPassword clearable v-model="password" type="password"></pt-input>
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
    <div class="divider"></div>
    <pt-tag :color="tagColor" @close="tagClose" closeable>新标签</pt-tag>

    <div class="divider"></div>
    <pt-upload clearable placeholder="请选择文件" @on-success="uploadSuccess" @on-error="uploadError" :action="uploadUrl">
      <template>
        <img v-show="imageUrl" ref="image" :src="imageUrl" alt="" />
      </template>
    </pt-upload>

    <div class="divider"></div>
    <pt-pagination :total="total"></pt-pagination>

    <div class="divider"></div>
    <pt-card>
      <template>
        <img src="https://s1.ax1x.com/2020/07/18/U206qe.md.png" class="image" />
        <div style="padding: 12px;">
          <span>title1</span>
          <div class="bottom clearfix">
            <time class="time" style="font-size:12px">{{ currentDate }}</time>
            <br />
          </div>
        </div>
      </template>
    </pt-card>
    <div class="divider"></div>
    <pt-range v-model="rangeVal"></pt-range>
    <div class="divider"></div>
    <pt-avater :src="avaterUrl"></pt-avater>

    <div class="divider"></div>
    <div style="margin-left:100px;">
      <pt-tooltip>
        <pt-button icon="icon-pinglun" small></pt-button>
      </pt-tooltip>
    </div>

    <div class="divider"></div>
    <pt-badge :value="100" :max="99" is-dot>
      <pt-button medium>按钮</pt-button>
    </pt-badge>

    <div class="divider"></div>
    <pt-alert type="info" title="错误提示的文案"></pt-alert>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  watch: {},
  data() {
    return {
      pet: '1',
      status: 'accepted',
      switch1: 'not_accepted',
      inputVal: '请输入内容',
      password: '',
      visible: false,
      selectVal: 10012,
      dateVal: '2020-08-08',
      // testDate: '2020-08-15'
      activeName: 'tab-one',
      // 标签颜色
      tagColor: '#95afc0',
      imageUrl: '',
      uploadUrl: 'http://localhost:5000/upload',
      total: 1000,
      currentDate: '2020-08-28',
      rangeVal: '10',
      avaterUrl: 'https://s1.ax1x.com/2020/07/18/U206qe.md.png'
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
      this.$message({ content: 'This is a custom message', type: choice[Math.floor(Math.random() * 4)] })
    },
    handleTabChange() {},
    tagClose() {
      // alert('tag close')
    },
    uploadSuccess(data) {
      console.log('上传成功')
      console.log(data)
    },
    uploadError(error) {
      console.log('上传失败')
      console.log(error)
    }
  },
  created() {}
}
</script>

<style lang="scss">
.divider {
  margin-bottom: 20px;
}
</style>
