<template>
  <div class="calc-step-pane">
    <slot></slot>
    <custom-input :items="inputs" v-if="inputs" />
    <checkboxes :checkbox="checkbox" v-if="checkbox" />
    <div class="calc-step-pane-row">
      <button
        class="calc-next"
        @click="decreaseProgress(progress)"
        :disabled="progress === 1"
      >
        Назад
      </button>
      <button
        class="calc-next"
        @click="increaseProgress(progress)"
        :disabled="siteType === 'landing' ? progress === 4 : progress === 6"
      >
        Далее
      </button>
    </div>
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
    ...mapMutations(["update_progress"]),
    increaseProgress(progress) {
      this.$store.commit("update_progress", ++progress);
      this.$store.commit("increase_step", progress);
    },
    decreaseProgress(progress) {
      this.$store.commit("update_progress", --progress);
      this.$store.commit("decrease_step", 1);
    }
  },
  computed: {
    ...mapState(["progress", "steps", "siteType"])
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
        margin: 20px 0 10px;
        font-style: normal;
        font-weight: bold;
        font-size: 28px;
        line-height: 40px;
        color: #000000;
      }

      &-row {
        display: flex;
        justify-content: center;

        @media #{map-get($display-breakpoints, 'md-and-down')} {
          flex-wrap: wrap;
        }
      }
    }
  }

  &-next {
    display: block;
    width: 100%;
    max-width: 210px;
    margin: 0 10px;
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

    @media #{map-get($display-breakpoints, 'md-and-down')} {
      margin-bottom: 5px;
    }
  }
}
</style>
