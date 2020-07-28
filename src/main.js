import Vue from 'vue'
import 'normalize.css'
import router from '@/router/index'
import App from './App.vue'
import util from '@/lib/util'

Object.keys(util).map((key) => {
  Vue.prototype[key] = util[key];
})

// 引入h5组件库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/my-mintui.scss'
Vue.use(MintUI)

// 本地开发调试注入vConsole
import VConsole from 'vconsole';
new VConsole();

// const { hacks } = require('viewport-units-buggyfill');
// require('viewport-units-buggyfill').init({
//   hacks: hacks
// });

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
