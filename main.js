import Vue from 'vue'
import App from './App'
import store from "./store"; //vuex

Vue.config.productionTip = false
Vue.prototype.$store = store;
App.mpType = 'app'

console.log(App,9)

const app = new Vue({
    ...App
})
app.$mount()
