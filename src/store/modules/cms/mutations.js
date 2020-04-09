// https://vuex.vuejs.org/en/mutations.html

export default {
  set_selected_cms: (state, payload) => {
    state.selected_cms = payload;
  },
  set_cmsPrice: (state, payload) => {
    state.cmsPrice = payload;
  }
};
