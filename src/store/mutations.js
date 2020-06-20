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
  set_selected_site: (state, payload) => {
    state.selected_site = payload;
  },
  set_selected_site_label: (state, payload) => {
    state.selected_site_label = payload;
  },
  set_selected_cms: (state, payload) => {
    state.selected_cms = payload;
  },
  set_selected_cms_label: (state, payload) => {
    state.selected_cms_label = payload;
  },
  set_selected_pages: (state, payload) => {
    state.selected_pages = payload;
  },
  set_selected_pages_label: (state, payload) => {
    state.selected_pages_label = payload;
  },
  set_selected_design: (state, payload) => {
    state.selected_design = payload;
  },
  set_selected_design_label: (state, payload) => {
    state.selected_design_label = payload;
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
  },
  set_pagesPrice: (state, payload) => {
    state.pagesPrice = payload;
  },
  set_sitePriceInt: (state, payload) => {
    state.sitePriceInt = payload;
  },
  set_cmsPriceInt: (state, payload) => {
    state.cmsPriceInt = payload;
  },
  set_designPriceInt: (state, payload) => {
    state.designPriceInt = payload;
  },
  set_paramsPriceInt: (state, payload) => {
    state.paramsPriceInt = payload;
  },
  set_functionsPriceInt: (state, payload) => {
    state.functionsPriceInt = payload;
  },
  set_pagesPriceInt: (state, payload) => {
    state.pagesPriceInt = payload;
  },
  set_modules: (state, payload) => {
    state.modules = payload;
  },
  set_parameters: (state, payload) => {
    state.parameters = payload;
  },
  set_parameters_label: (state, payload) => {
    state.parameters_label = payload;
  }
};
