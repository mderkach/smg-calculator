import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Vuelidate from "vuelidate";
import axios from "axios";
import VueScrollTo from 'vue-scrollto';

const VueInputMask = require("vue-inputmask").default;

Vue.use(VueInputMask);
Vue.use(Vuelidate);
Vue.use(axios);
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
