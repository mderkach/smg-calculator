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
        :class="{ active: index === bindActiveClass(input) }"
        @click.prevent="calcRadio(input, index)"
      >
        <input
          :id="input.type"
          :type="input.inputType"
          :value="input.price"
          :name="input.name"
        />
        <svg width="134" class="calc-icon" v-html="input.icon"></svg>
        <p class="calc-input-name">{{ input.label }}</p>
        <p class="calc-input-price">
          + {{ input.price }}
          <span>₽</span>
        </p>
      </label>
      <label
        v-else
        class="calc-input-label"
        :for="input.type"
        @click.prevent="calcCheckbox(input, $event)"
      >
        <input
          :id="input.type"
          :type="input.inputType"
          :value="input.price"
          :name="input.name"
        />
        <svg width="134" class="calc-icon" v-html="input.icon"></svg>
        <p class="calc-input-name">{{ input.label }}</p>
        <p class="calc-input-price">
          + {{ input.price }}
          <span>₽</span>
        </p>
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
  data: () => ({
    selectedParameters: [],
    selectedParametersLabel: []
  }),
  computed: {
    ...mapState([
      "totalPrice",
      "paramsPrice",
      "additionalsPrice",
      "selected_site",
      "selected_cms",
      "selected_design",
      "selected_pages",
      "parameters"
    ])
  },
  methods: {
    ...mapMutations([
      "set_siteType",
      "set_selected",
      "set_selected_site",
      "set_selected_cms",
      "set_selected_design",
      "set_selected_pages",
      "set_selected_site_label",
      "set_selected_cms_label",
      "set_selected_design_label",
      "set_selected_pages_label",
      "set_sitePrice",
      "set_cmsPrice",
      "set_designPrice",
      "set_paramsPrice",
      "set_sitePriceInt",
      "set_cmsPriceInt",
      "set_designPriceInt",
      "set_paramsPriceInt",
      "set_parameters",
      "set_parameters_label",
      "updateTotalPrice"
    ]),
    calcRadio(input, index) {
      this.$store.commit("set_selected_" + input.name, index);
      if (input.name === "site") {
        this.$store.commit("set_siteType", input.type);
        this.$store.commit("set_selected_site_label", input.label);
      }
      this.$store.commit("set_" + input.name + "Price", input.price);
      this.$store.commit("set_" + input.name + "PriceInt", input.price);
      this.$store.commit("set_selected_" + input.name + "_label", input.label);
      this.$store.commit("updateTotalPrice", input.price);
    },
    calcCheckbox(input, event) {
      let priceToUpdate = this.paramsPrice;
      let parameters = ` ${input.label}, стоимость: ${input.price}`;
      let label = input.label;

      if (event.target.classList.contains("calc-input-label")) {
        event.target.classList.toggle("active");
      } else {
        event.target.closest(".calc-input-label").classList.toggle("active");
      }
      input.checked = !input.checked;
      if (input.checked === true) {
        priceToUpdate += input.price;
        this.$store.commit("set_" + input.name + "Price", priceToUpdate);
        this.$store.commit("set_" + input.name + "PriceInt", priceToUpdate);
        this.selectedParameters.push(parameters);
        this.selectedParametersLabel.push(label);
      } else {
        priceToUpdate -= input.price;
        this.$store.commit("set_" + input.name + "Price", priceToUpdate);
        this.$store.commit("set_" + input.name + "PriceInt", priceToUpdate);
        this.selectedParameters.splice(
          this.selectedParameters.indexOf(parameters),
          1
        );
        this.selectedParametersLabel.splice(
          this.selectedParametersLabel.indexOf(label),
          1
        );
      }
      this.$store.commit("set_parameters", this.selectedParameters);
      this.$store.commit("set_parameters_label", this.selectedParametersLabel);
    },
    bindActiveClass(input) {
      let method = "selected_" + input.name;
      return this[method];
    }
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

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        margin-right: 13px;
      }
    }

    @media #{map-get($display-breakpoints, 'lg-and-down')} {
      width: 30%;
    }

    @media #{map-get($display-breakpoints, 'md-and-down')} {
      width: 31%;
    }

    @media #{map-get($display-breakpoints, 'sm-and-down')} {
      width: 100%;
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
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.95);
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

      span {
        font-family: "Roboto", sans-serif;
      }
    }
  }
}
</style>
