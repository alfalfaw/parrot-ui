<template>
  <div class="pt-upload">
    <div class="pt-upload__input">
      <input
        class="pt-upload__inner"
        readonly
        :class="{ 'is-disabled': disabled }"
        :placeholder="placeholder"
        :value="model"
        type="text"
        :disabled="disabled"
      />
      <input class="pt-upload__original" type="file" @change="fileUpload" ref="fileInput" />
    </div>
    <span class="pt-upload__suffix" v-if="showSuffix">
      <i v-if="model && clearable" class="iconfont icon-close" @click="clear"></i>
      <i v-else class="iconfont icon-03" @click="chooseFile"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'PtUpload',
  props: {
    showSuffix: {
      type: Boolean,
      default: true
    },
    action: {
      type: String,
      default: 'http://localhost:5000/upload'
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
    }
  },
  data() {
    return {
      model: ''
    }
  },
  methods: {
    fileUpload(e) {
      const formData = new FormData()
      formData.append('file', e.target.files[0])
      fetch(this.action, {
        method: 'POST',
        body: formData
      })
        .then(response => response.json)
        .then(result => {
          // console.log(e.target.files[0])
          this.model = e.target.files[0].name
          console.log('Success', result)
        })
        .catch(error => {
          console.error('Error:', error)
        })
    },
    clear() {
      this.$refs.fileInput.value = null
      this.model = ''
    },
    chooseFile() {
      this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
    }
  }
}
</script>

<style lang="scss" scoped>
.pt-upload {
  font-size: 14px;
  display: inline-block;
  position: relative;
  border: 1px solid #ecf0f3;
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
  .pt-upload__input {
    position: relative;

    .pt-upload__original {
      opacity: 0;
      position: absolute;
      left: 0;
      width: 100%;
      top: 0;
      bottom: 0;
    }
    .pt-upload__inner {
      cursor: pointer;
      -webkit-appearance: none;
      border-radius: 4px;

      border: none;
      box-sizing: border-box;
      color: #606266;
      font-size: inherit;
      height: 35px;
      line-height: 35px;
      outline: none;
      padding: 0 10px;
      padding-right: 25px;
      width: 100%;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

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
  }
  .pt-upload__suffix {
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
