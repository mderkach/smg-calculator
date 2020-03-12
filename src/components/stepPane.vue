<template>
  <div class="calc-step-pane">
    <slot></slot>
    <custom-input :items="inputs" v-if="inputs" />
    <checkboxes :checkbox="checkbox" v-if="checkbox" />
    <button
      class="calc-next"
      @click="increaseProgress(progress)"
      :disabled="siteType === 'landing' ? progress === 4 : progress === 5"
    >
      Далее
    </button>
  </div>
</template>

<script>
import customInput from "./customInput";
import checkboxes from "./checboxes";
import { mapMutations, mapState } from "vuex";

export default {
  name: "stepPane",
  components: { customInput, checkboxes },
  props: {
    inputs: {
      type: Array,
      default: () => []
    },
    checkbox: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations(["update_progress", "set_selected"]),
    increaseProgress(progress) {
      this.$store.commit("update_progress", ++progress);
      this.$store.commit("increase_step", progress);
      this.$store.commit("set_selected", undefined);
    }
  },
  computed: {
    ...mapState(["progress", "steps", "selected", "siteType"])
  }
};
</script>

<style lang="scss">
.calc {
  &-step {
    &-pane {
      width: 100%;
      max-width: 1165px;

      &-header {
        margin: 40px 0 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 36px;
        line-height: 49px;
        color: #000000;
      }
    }
  }

  &-next {
    display: block;
    width: 100%;
    max-width: 210px;
    margin: 0 auto;
    padding: 16px 52px;
    background: #ffffff;
    border: 2px solid #35659a;
    box-sizing: border-box;
    border-radius: 48px;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 19px;
    text-align: center;
    color: #35659a;

    &:disabled {
      opacity: 0.5;
    }
  }
}
</style>
