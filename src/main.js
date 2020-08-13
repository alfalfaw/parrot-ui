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
import PtSelect from './components/select'
import PtDatePicker from './components/datePicker'
import PtTabPane from './components/pane'
import PtTabs from './components/tabs'
Vue.prototype.$message = PtMessage.install

Vue.config.productionTip = false

Vue.component(PtRadio.name, PtRadio)
Vue.component(PtRadioGroup.name, PtRadioGroup)
Vue.component(PtButton.name, PtButton)
Vue.component(PtCheckbox.name, PtCheckbox)
Vue.component(PtSwitch.name, PtSwitch)
Vue.component(PtInput.name, PtInput)
Vue.component(PtDialog.name, PtDialog)
Vue.component(PtSelect.name, PtSelect)
Vue.component(PtDatePicker.name, PtDatePicker)
Vue.component(PtTabPane.name, PtTabPane)
Vue.component(PtTabs.name, PtTabs)

new Vue({
  render: h => h(App)
}).$mount('#app')
