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
  paramsPrice: state => {
    return state.paramsPrice;
  },
  params: state => {
    return state.params;
  }
};
