// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import '@/assets/css/reset.css' //global reset.css
import '@/assets/css/common.less'

Vue.config.productionTip = false

//全局方法
Vue.prototype.download = function (){
  window.location.href="https://web.3fgj.com/sharePage/download1.html";
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
