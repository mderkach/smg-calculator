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
  set_siteType: (state, payload) => {
    state.siteType = payload;
  },
  set_selected: (state, payload) => {
    state.selected = payload;
  },
  updateTotalPrice: (state, payload) => {
    state.totalPrice = payload;
  },
  set_sitePrice: (state, payload) => {
    state.sitePrice = payload;
  },
  set_cmsPrice: (state, payload) => {
    state.cmsPrice = payload;
  },
  set_designPrice: (state, payload) => {
    state.designPrice = payload;
  },
  set_paramsPrice: (state, payload) => {
    state.paramsPrice = payload;
  },
  set_functionsPrice: (state, payload) => {
    state.functionsPrice = payload;
  }
};
