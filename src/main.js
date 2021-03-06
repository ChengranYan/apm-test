import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from '@sentry/browser'
import { version } from '@/../package.json'

Vue.config.productionTip = false
Sentry.init({
  release: version + '@stage',
  dsn: 'https://b36419211dc245ffa2281c68a32d8760@sentry.io/1370707',
  integrations: [new Sentry.Integrations.Vue({ Vue })]
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
