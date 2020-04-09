// https://vuex.vuejs.org/en/getters.html

export default {
  sitePrice: state => {
    return state.sitePrice;
  },
  sites: state => {
    return state.sites;
  },
  siteType: state => {
    return state.siteType;
  }
};
