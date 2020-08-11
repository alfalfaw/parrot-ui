import Vue from 'vue'
import App from './App.vue'
import PtRadio from './components/radio'
import PtRadioGroup from './components/radio-group'
import PtButton from './components/button'
import PtCheckbox from './components/checkbox'
import PtSwitch from './components/switch'
import PtInput from './components/input'
import PtDialog from './components/dialog'
import PtMessage from './components/message/index'
Vue.prototype.$message = PtMessage.install

Vue.config.productionTip = false

Vue.component(PtRadio.name, PtRadio)
Vue.component(PtRadioGroup.name, PtRadioGroup)
Vue.component(PtButton.name, PtButton)
Vue.component(PtCheckbox.name, PtCheckbox)
Vue.component(PtSwitch.name, PtSwitch)
Vue.component(PtInput.name, PtInput)
Vue.component(PtDialog.name, PtDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
