import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { mergeBeforeEachHook, VKeepAliveChain } from 'v-keep-alive-chain'

Vue.use(VKeepAliveChain)

router.beforeEach(mergeBeforeEachHook())

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
