// https://vuex.vuejs.org/en/mutations.html

export default {
  update_progress: (state, payload) => {
    state.progress = payload;
  },
  increase_step: (state, payload) => {
    state.steps.push(payload);
  },
  decrease_step: (state, payload) => {
    for (let i = 1; i <= payload; i++) {
      state.steps.pop();
    }
  },
  set_data: (state, payload) => {
    state.sites = payload.sites;
    state.cms = payload.cms;
    state.designes = payload.designes;
    state.pages = payload.pages;
    state.params = payload.params;
    state.functions = payload.functions;
  },
  updateTotalPrice: (state, payload) => {
    state.totalPrice = payload;
  }
};
