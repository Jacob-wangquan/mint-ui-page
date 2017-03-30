import Vue from 'vue';
import App from './App.vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Header } from 'mint-ui';

Vue.use(Mint)
Vue.component(Header.name, Header);

new Vue({
  el: '#app',
  render: h => h(App)
})
