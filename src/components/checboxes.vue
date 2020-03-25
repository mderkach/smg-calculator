<template>
  <div class="calc-checkboxes-wrapper">
    <v-expansion-panels multiple accordion :value="opened">
      <v-expansion-panel
        class="calc-checkboxes-list"
        v-for="(item, index) in checkbox"
        :key="index"
      >
        <v-expansion-panel-header class="calc-checkboxes-header">
          {{ item.name }}
        </v-expansion-panel-header>
        <v-expansion-panel-content class="calc-checkboxes">
          <label
            class="calc-checkboxes-item"
            v-for="(item, index) in item.items"
            :key="index"
            :for="item.type"
            @click.prevent="calcCheckbox(item)"
          >
            <input
              class="calc-checkboxes-item-input"
              type="checkbox"
              :name="item.type"
              :id="item.type"
            />
            <div class="calc-checkboxes-item-checkbox"></div>
            <p class="calc-checkboxes-item-descr my-0">{{ item.label }}</p>
            <p class="calc-checkboxes-item-price my-0">
              + {{ item.price }} <span>₽</span>
            </p>
          </label>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "checkboxes",
  props: {
    checkbox: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    opened: [0]
  }),
  methods: {
    ...mapMutations(["set_functionsPrice", "updateTotalPrice"]),
    calcCheckbox(input) {
      document
        .querySelector("label[for=" + input.type + "]")
        .classList.toggle("active");
      let priceToUpdate = this.functionsPrice;
      input.checked = !input.checked;
      if (input.checked === true) {
        priceToUpdate += input.price;
        this.$store.commit("set_functionsPrice", priceToUpdate);
      } else {
        priceToUpdate -= input.price;
        this.$store.commit("set_functionsPrice", priceToUpdate);
      }
    }
  },
  computed: {
    ...mapState(["totalPrice", "functionsPrice"])
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.v-expansion-panel-content__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.calc {
  &-checkboxes {
    &-header {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 165%;
    }

    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin-bottom: 20px;
    }

    &-item {
      display: flex;
      justify-content: flex-start;
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 49%;
      margin-bottom: 16px;
      padding: 20px 25px;
      align-items: center;
      background: #ffffff;
      border: 1px solid #bdbdbd;
      box-sizing: border-box;
      border-radius: 5px;

      @media #{map-get($display-breakpoints, 'lg-and-down')} {
        padding: 10px;
      }

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-basis: 100%;
        flex-wrap: wrap;
        justify-content: center;
      }

      @media only screen and (max-width: 500px) {
        flex-direction: column;
      }

      &-descr {
        flex-basis: 60%;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 125%;
        color: #282828;

        @media #{map-get($display-breakpoints, 'lg-and-down')} {
          font-size: 16px;
        }

        @media #{map-get($display-breakpoints, 'md-and-down')} {
          flex-basis: 80%;
        }

        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          flex-basis: 70%;
        }

        @media only screen and (max-width: 500px) {
          flex-basis: unset;
        }
      }

      &-price {
        margin-left: auto;
        margin-right: 0;
        font-family: AvenirBold;
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #35659a;

        @media #{map-get($display-breakpoints, 'lg-and-down')} {
          font-size: 16px;
        }

        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          margin-top: 10px !important;
          margin-left: 0;
        }

        @media only screen and (max-width: 500px) {
          margin: 0 auto;
        }
      }

      &-input {
        border: 0;
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        height: 0;
      }

      &-checkbox {
        position: relative;
        width: 24px;
        height: 24px;
        margin-right: 20px;
        background: #3d96f9;

        @media #{map-get($display-breakpoints, 'lg-and-down')} {
          margin-right: 10px;
        }

        @media only screen and (max-width: 500px) {
          margin: 0 auto;
        }

        &::after {
          display: block;
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #fff;
          transform: translate(-50%, -50%);
        }
      }

      &:hover {
        cursor: pointer;
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.35);
      }

      &.active {
        border: 1px solid #35659a;
        box-sizing: border-box;
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.95);

        & > .calc-checkboxes-item-checkbox {
          background: #f42d57;
        }
      }
    }
  }
}
</style>
