import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as Sentry from '@sentry/browser'

Vue.config.productionTip = false

Sentry.init({
  release: '2.0',
  dsn: 'https://55feca8d735d4f8d949359fab44c8cfb@sentry.io/1365248',
  integrations: [new Sentry.Integrations.Vue({
    Vue
  })]
})
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
