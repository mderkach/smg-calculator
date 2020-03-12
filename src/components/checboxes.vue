<template>
  <div class="calc-checboxes-wrapper">
    <div class="calc-checboxes" v-for="(item, index) in checkbox" :key="index">
      <h5 class="calc-checboxes-header">{{ item.name }}</h5>
      <div class="calc-checkboxes-list">
        <div class="calc-checkboxes-wrapper">
          <label
            class="calc-checkboxes-item"
            v-for="(item, index) in item.items"
            :key="index"
            :for="item.type"
            @click.prevent="
              calcCheckbox(item);
              $event.target.classList.toggle('active');
            "
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
        </div>
      </div>
    </div>
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
  methods: {
    ...mapMutations(["set_functionsPrice", "updateTotalPrice"]),
    calcCheckbox(input) {
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

.calc {
  &-checkboxes {
    &-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
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

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-basis: 100%;
        flex-wrap: wrap;
        justify-content: center;
      }

      &-descr {
        flex-basis: 60%;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 125%;
        color: #282828;

        @media #{map-get($display-breakpoints, 'md-and-down')} {
          flex-basis: 80%;
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

        @media #{map-get($display-breakpoints, 'sm-and-down')} {
          margin-top: 10px !important;
          margin-left: 0;
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
        box-shadow: 0px 4px 25px rgba(61, 150, 249, 0.35);

        & > .calc-checkboxes-item-checkbox {
          background: #f42d57;
        }
      }
    }
  }
}
</style>
