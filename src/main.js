import Vue from 'vue'
import App from './App.vue'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';
import './assets/main.css'

Vue.use(VueKatex, {
  globalOptions: {}
});

new Vue({
  render: (h) => h(App)
}).$mount('#app')
