import Vue from 'vue'
import App from './App.vue'
// import vueMsg from './plugins/index.js'
import dgtMessagr from 'dgt-message'
import 'dgt-message/lib/dgt-message.css';
Vue.config.productionTip = false
Vue.use(dgtMessagr)
// Vue.use(vueMsg)
new Vue({
  render: h => h(App),
}).$mount('#app')
