// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueProgressBar from 'vue-progressbar'

Vue.config.productionTip = false

Vue.use(VueProgressBar, {
  color: '#F58676',
  failedColor: 'red',
  height: '3px'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App,
    VueProgressBar
  },
  template: '<App/>'
})
