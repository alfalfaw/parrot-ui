<template>
  <div class="pt-upload" :class="{ 'is-value': model, 'is-avater': $slots.default }">
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
      <slot></slot>
    </div>
    <span class="pt-upload__suffix" v-if="showSuffix">
      <i v-if="model && clearable && !$slots.default" class="iconfont icon-close" @click="clear"></i>
      <i v-else-if="$slots.default && !model" class="iconfont icon-Plus" @click="chooseFile"></i>
      <i v-else-if="!$slots.default" class="iconfont icon-03" @click="chooseFile"></i>
      <span class="mask" v-else>
        <i class="iconfont icon-delete" @click="clear"></i>
      </span>
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
      required: true
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
    headers: {
      type: Object,
      default() {
        return {}
      }
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

      if (this.$slots.default) {
        // 验证图片类型和大小
        // if (!['image/jpeg', 'image/gif', 'image/png', 'image/svg+xml'].includes(file.type)) {
        //   console.log('Only images are allowed.')
        //   return
        // }

        // // check file size (< 2MB)
        // if (file.size > 2 * 1024 * 1024) {
        //   console.log('File must be less than 2MB.')
        //   return
        // }

        // 上传图片
        const imageUrl = URL.createObjectURL(e.target.files[0])
        // console.log('打印插槽中的img')
        this.$slots.default[0].elm.src = imageUrl
      }

      fetch(this.action, {
        method: 'POST',
        body: formData,
        headers: this.headers
      })
        .then(response => response.json())
        .then(result => {
          this.model = e.target.files[0].name
          this.$emit('on-success', result)
        })
        .catch(error => {
          this.$emit('on-error', error)
          // console.error('Error:', error)
        })
    },

    clear() {
      this.$refs.fileInput.value = null
      this.model = ''
      if (this.$slots.default) {
        this.$slots.default[0].elm.src = null
      }
    },
    chooseFile() {
      this.$refs.fileInput.dispatchEvent(new MouseEvent('click'))
    }
  },
  mounted() {}
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
  // 上传头像
  &.is-avater {
    height: 180px;
    border: 1px dashed #ecf0f3;
    &.is-value {
      border: 1px dashed #95afc0;
    }
    &:hover {
      border: 1px dashed #95afc0;
    }

    .pt-upload__input {
      height: 100%;
      width: 100%;
      padding: 5px;
      box-sizing: border-box;

      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
      .pt-upload__inner {
        display: none;
      }
    }
    .pt-upload__suffix {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      .icon-Plus {
        font-size: 22px;
      }
      .mask {
        display: inline-block;
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;

        .icon-delete {
          font-size: 22px;
          color: transparent;
          position: relative;
          z-index: 2;
        }
        &::after {
          position: absolute;
          content: '';
          height: 100%;
          width: 100%;
          background: transparent;
          transition: 0.65s;
        }
        &:hover::after {
          background: rgba(0, 0, 0, 0.3);
        }
        &:hover .icon-delete {
          color: rgba(255, 255, 255, 0.8);
          &:hover {
            color: #ecf0f3;
          }
        }
      }
    }
  }
}
</style>
