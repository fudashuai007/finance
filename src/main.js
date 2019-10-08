import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import { Button } from "element-ui";
import VueResource from 'vue-resource'
import './plugins/element.js'
Vue.use(Button);
Vue.use(VueResource);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
