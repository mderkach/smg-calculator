// https://vuex.vuejs.org/en/getters.html

export default {
  progress: state => {
    return state.progress;
  },
  steps: state => {
    return state.steps;
  },
  totalPrice: state => {
    return state.totalPrice;
  },
  sitePrice: state => {
    return state.sitePrice;
  },
  paramsPrice: state => {
    return state.paramsPrice;
  },
  functionsPrice: state => {
    return state.functionsPrice;
  },
  cmsPrice: state => {
    return state.cmsPrice;
  },
  designPrice: state => {
    return state.designPrice;
  },
  pagesPrice: state => {
    return state.pagesPrice;
  },
  sites: state => {
    return state.sites;
  },
  siteType: state => {
    return state.siteType;
  },
  cms: state => {
    return state.cms;
  },
  designes: state => {
    return state.designes;
  },
  params: state => {
    return state.params;
  },
  functions: state => {
    return state.functions;
  },
  selected_site_label: state => {
    return state.selected_site_label;
  },
  selected_cms_label: state => {
    return state.selected_cms_label;
  },
  selected_pages_label: state => {
    return state.selected_pages_label;
  },
  selected_design_label: state => {
    return state.selected_design_label;
  },
  modules: state => {
    return state.modules;
  },
  parameters: state => {
    return state.parameters;
  }
};
