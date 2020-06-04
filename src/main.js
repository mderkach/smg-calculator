import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "./store";
import Vuelidate from "vuelidate";
import axios from "axios";
const VueInputMask = require("vue-inputmask").default;

Vue.use(VueInputMask);
Vue.use(Vuelidate);
Vue.use(axios);
Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  render: h => h(App)
}).$mount("#app");
