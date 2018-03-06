import Vue from 'vue';
import App from './App';
import router from './router/index';
import store from './store/index';
import axios from 'axios';
Vue.prototype.$http = axios;

// 引入全部的mint组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);

// indicator loading 图
// import 'mint-ui/lib/style.css';
// import { Indicator } from 'mint-ui';
// Vue.$indicator = Vue.prototype.$indicator = Indicator;

// 引入公共文件
import '../static/css/reset.css';
import '../static/js/adaptational.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
});