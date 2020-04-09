// https://vuex.vuejs.org/en/mutations.html

export default {
  set_siteType: (state, payload) => {
    state.siteType = payload;
  },
  set_selected_site: (state, payload) => {
    state.selected_site = payload;
  },
  set_sitePrice: (state, payload) => {
    state.sitePrice = payload;
  }
};
