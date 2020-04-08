// https://vuex.vuejs.org/en/actions.html
import Axios from "axios";

export default {
  fetch: async context => {
    let { data } = await Axios.get("http://localhost:3030/data");
    console.log(data);
    context.commit("set_data", data);
  }
};
