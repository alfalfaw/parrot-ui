import Vue from 'vue'
import App from './App.vue'
import PtRadio from './components/radio'
import PtRadioGroup from './components/radio-group'
Vue.config.productionTip = false

Vue.component(PtRadio.name, PtRadio)
Vue.component(PtRadioGroup.name, PtRadioGroup)
new Vue({
  render: h => h(App)
}).$mount('#app')
