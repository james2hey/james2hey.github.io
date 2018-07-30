import Vue from 'vue'
import App from './App.vue'
import vueSmoothScroll from 'vue-smooth-scroll'


new Vue({
  el: '#app',
  render: h => h(App)
});
Vue.use(vueSmoothScroll);
