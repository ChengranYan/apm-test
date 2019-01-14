import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from '@sentry/browser'

Vue.config.productionTip = false

Sentry.init({
  dsn: 'https://e3f628257c9b41bab2f1a5949c2ea8f7@sentry.io/1370699',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
