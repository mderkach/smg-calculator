// https://vuex.vuejs.org/en/mutations.html

export default {
  set_selected_design: (state, payload) => {
    state.selected_design = payload;
  },
  set_designPrice: (state, payload) => {
    state.designPrice = payload;
  }
};
