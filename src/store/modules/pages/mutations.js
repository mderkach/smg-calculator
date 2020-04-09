// https://vuex.vuejs.org/en/mutations.html

export default {
  set_selected_pages: (state, payload) => {
    state.selected_pages = payload;
  },
  set_pagesPrice: (state, payload) => {
    state.pagesPrice = payload;
  }
};
