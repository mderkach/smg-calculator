<template>
  <div class="calc-input-wrapper">
    <div
      v-for="(input, index) in items"
      :key="index"
      class="calc-input"
      :class="input.inputType === 'radio' ? '' : '--checkbox'"
    >
      <label
        v-if="input.inputType === 'radio'"
        class="calc-input-label"
        :for="input.type"
        @click.prevent="calcRadio(input, index)"
        :class="{ active: selected == index }"
      >
        <input
          :type="input.inputType"
          :value="input.price"
          :name="input.name"
          :id="input.type"
        />
        <svg width="134" class="calc-icon" v-html="input.icon"></svg>
        <p class="calc-input-name">{{ input.label }}</p>
        <p class="calc-input-price">+ {{ input.price }} ₽</p>
      </label>
      <label
        v-else
        class="calc-input-label"
        :for="input.type"
        @click.prevent="
          calcCheckbox(input);
          $event.target.classList.toggle('active');
        "
      >
        <input
          :type="input.inputType"
          :value="input.price"
          :name="input.name"
          :id="input.type"
        />
        <svg width="134" class="calc-icon" v-html="input.icon"></svg>
        <p class="calc-input-name">{{ input.label }}</p>
        <p class="calc-input-price">+ {{ input.price }} ₽</p>
      </label>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "customInput",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapMutations([
      "set_siteType",
      "set_selected",
      "set_sitePrice",
      "set_cmsPrice",
      "set_designPrice",
      "set_paramsPrice",
      "updateTotalPrice"
    ]),
    calcRadio(input, index) {
      this.$store.commit("set_selected", index);
      if (input.name === "site") {
        this.$store.commit("set_siteType", input.type);
      }
      this.$store.commit("set_" + input.name + "Price", input.price);
      this.$store.commit("updateTotalPrice", input.price);
    },
    calcCheckbox(input) {
      let priceToUpdate = this.paramsPrice;
      input.checked = !input.checked;
      if (input.checked === true) {
        priceToUpdate += input.price;
        this.$store.commit("set_" + input.name + "Price", priceToUpdate);
      } else {
        priceToUpdate -= input.price;
        this.$store.commit("set_" + input.name + "Price", priceToUpdate);
      }
    }
  },
  computed: {
    ...mapState(["selected", "totalPrice", "paramsPrice", "additionalsPrice"])
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.calc {
  &-input {
    display: flex;
    flex-grow: 0;
    flex-shrink: 1;
    width: 32%;
    margin-right: 13px;
    margin-bottom: 13px;
    box-sizing: border-box;

    &:nth-last-child(1) {
      margin-right: 0;
    }

    &.--checkbox {
      flex-basis: calc(33.3333% - 13px) !important;

      &:nth-child(3n) {
        margin-right: 0;
      }
    }

    &-label {
      position: relative;
      display: flex;
      flex-basis: auto;
      flex-grow: 1;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 40px;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 5px;

      &:nth-last-child(1) {
        margin-right: 0;
      }

      &.active {
        border: 1px solid #35659a;
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.35);
        border-radius: 5px;
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.35);
      }

      input {
        border: 0;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
      }
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: 20px;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        justify-content: center;
      }
    }

    &-name {
      margin: 10px 0 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 125%;
      text-align: center;
      color: #282828;
    }

    &-price {
      margin: 0;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
      text-align: center;
      color: #35659a;
    }
  }
}
</style>
