// https://vuex.vuejs.org/en/getters.html

export default {
  progress: state => {
    return state.progress;
  },
  steps: state => {
    return state.steps;
  },
  basePrice: state => {
    return state.basePrice;
  },
  totalPrice: state => {
    return state.totalPrice;
  },
  sitePrice: state => {
    return state.sitePrice;
  },
  cmsPrice: state => {
    return state.cmsPrice;
  },
  designPrice: state => {
    return state.designPrice;
  },
  sites: state => {
    return state.sites;
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
  }
};
