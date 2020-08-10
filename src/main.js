import Vue from 'vue'
import App from './App.vue'
import PtRadio from './components/radio'
import PtRadioGroup from './components/radio-group'
import PtButton from './components/button'
import PtCheckbox from './components/checkbox'
Vue.config.productionTip = false

Vue.component(PtRadio.name, PtRadio)
Vue.component(PtRadioGroup.name, PtRadioGroup)
Vue.component(PtButton.name, PtButton)
Vue.component(PtCheckbox.name, PtCheckbox)
new Vue({
  render: h => h(App)
}).$mount('#app')
