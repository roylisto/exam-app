import Vue from 'vue';
import App from './containers/App.vue';
import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd';
import store from './store';

Vue.component(Button.name, Button);

Vue.config.productionTip = false;

new Vue({
  store,
  el: '#root',
  render: h => h(App),
});