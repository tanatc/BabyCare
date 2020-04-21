import Vue from 'vue'
import App from './App'
import axios from 'axios'

//全局注册
/*Vue.prototype.$axios = axios*/


new Vue({
	el:'#app',
	template: '<App/>',
  	components: { App }
});
