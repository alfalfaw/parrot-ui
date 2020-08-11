import Vue from 'vue'
import PtMessage from './message'

const PM = Vue.extend(PtMessage)
PtMessage.install = function(config) {
  let options = {
    type: 'info',
    content: ''
  }
  if (typeof config === 'string' || typeof config === 'number') {
    options = {
      content: config,
      type: 'info'
    }
  } else if (typeof config === 'object') {
    Object.assign(options, config)
  }
  const instance = new PM({
    data: options
  }).$mount()
  const message = document.getElementById('message')
  message.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
}

export default PtMessage
