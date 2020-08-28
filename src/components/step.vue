<template>
  <div class="calc-step-wrapper">
    <div
      class="calc-step"
      v-for="(item, index) in steps"
      :key="index"
      :class="index === steps.length - 1 ? 'active' : ''"
      @click="changeProgress(index + 1)"
      v-scroll-to="'.calc-header-wrapper'"
    >
      <p class="calc-step-descr my-0">Шаг {{ item }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "step",
  methods: {
    ...mapMutations(["decrease_step", "update_progress"]),
    changeProgress(index) {
      const reduce = this.progress - index;
      if (index < this.progress && this.steps.length > 1) {
        this.$store.commit("decrease_step", reduce);
        this.$store.commit("update_progress", index);
      }
    }
  },
  computed: {
    ...mapState(["progress", "steps"])
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.calc {
  &-step {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 60px;
    margin-right: 5px;
    background: #3d96f9;
    transform: skew(-20deg);

    @media #{map-get($display-breakpoints, 'lg-and-down')} {
      width: 140px;
      margin-bottom: 10px;
    }

    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 100px;
      height: 45px;
    }

    &:hover {
      cursor: pointer;
    }

    &.active {
      background: #f42d57;
    }

    &-wrapper {
      display: flex;
      justify-content: flex-start;
      align-items: center;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-wrap: wrap;
      }
    }

    &-descr {
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #fff;
      transform: skew(20deg);

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        font-size: 16px;
        line-height: 16px;
      }
    }
  }
}
</style>
