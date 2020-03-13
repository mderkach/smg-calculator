<template>
  <div class="calc-smeta-outer">
    <div class="calc-smeta-wrapper">
      <div class="calc-smeta-header-wrapper">
        <p class="calc-smeta-header my-0">
          Смета на разработку
        </p>
      </div>
      <div class="calc-smeta-body">
        <div class="calc-smeta-row" :class="progress >= 1 ? 'active' : ''">
          <p class="calc-smeta-descr mb-3">Проектирование</p>
          <p class="calc-smeta-price mb-3">{{ sitePrice }} <span>₽</span></p>
        </div>
        <div class="calc-smeta-row" :class="progress >= 2 ? 'active' : ''">
          <p class="calc-smeta-descr mb-3">Система управления сайтом</p>
          <p class="calc-smeta-price mb-3">{{ cmsPrice }} <span>₽</span></p>
        </div>
        <div class="calc-smeta-row" :class="progress >= 3 ? 'active' : ''">
          <p class="calc-smeta-descr mb-3">Дизайн и верстка</p>
          <p class="calc-smeta-price mb-3">{{ designPrice }} <span>₽</span></p>
        </div>
        <div
          class="calc-smeta-row"
          :class="progress >= 4 && siteType !== 'landing' ? 'active' : ''"
        >
          <p class="calc-smeta-descr mb-3">Функционал</p>
          <p class="calc-smeta-price mb-3">
            {{ functionsPrice }}
            <span>₽</span>
          </p>
        </div>
        <div
          class="calc-smeta-row"
          :class="progress >= 4 && siteType === 'landing' ? 'active' : ''"
        >
          <p class="calc-smeta-descr mb-3">
            Дополнительные опции
          </p>
          <p class="calc-smeta-price mb-3">
            {{ paramsPrice }}
            <span>₽</span>
          </p>
        </div>
        <div class="calc-smeta-total-wrapper">
          <p class="calc-smeta-total-descr my-0">
            Итого <br />
            стоимость:
          </p>
          <p class="calc-smeta-total my-0">{{ calculate }} <span>₽</span></p>
        </div>
        <button class="calc-smeta-reset" type="reset">Сбросить</button>
        <form action="#" class="calc-smeta-form" @submit.prevent="submit">
          <h4 class="calc-smeta-form-header">Ваши данные</h4>
          <input
            class="calc-smeta-input"
            type="text"
            name="name"
            v-model.trim="$v.name.$model"
            id="name"
            placeholder="Ваше имя"
            :class="{ '--error': $v.name.$error }"
            @blur="$v.name.$touch()"
          />
          <input
            class="calc-smeta-input"
            type="email"
            name="email"
            id="email"
            placeholder="Ваш email"
            v-model.trim="$v.email.$model"
            :class="{ '--error': $v.email.$error }"
            @blur="$v.email.$touch()"
          />
          <input
            class="calc-smeta-input"
            type="text"
            name="phone"
            id="phone"
            v-model.trim="$v.phone.$model"
            v-mask="'+7(999)999-99-99'"
            placeholder="Ваш телефон"
            :class="{ '--error': $v.phone.$error }"
            @blur="$v.phone.$touch()"
          />
          <p class="calc-smeta-agreement">
            Нажав на кнопку, Вы даете согласие на обработку Персональных данных
          </p>
          <input
            type="submit"
            class="calc-smeta-submit"
            :class="{
              active:
                (progress === 4 && siteType === 'landing') || progress === 5
            }"
          />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import { required } from "vuelidate/lib/validators";

export default {
  name: "smeta",
  data: () => ({
    name: null,
    phone: null,
    email: null,
    submitStatus: null
  }),
  validations: {
    name: {
      required
    },
    email: {
      required
    },
    phone: {
      required
    }
  },
  computed: {
    ...mapState([
      "basePrice",
      "totalPrice",
      "sitePrice",
      "siteType",
      "cmsPrice",
      "designPrice",
      "paramsPrice",
      "functionsPrice"
    ]),
    ...mapGetters(["progress"]),
    calculate() {
      return (
        this.basePrice +
        this.sitePrice +
        this.cmsPrice +
        this.designPrice +
        this.paramsPrice +
        this.functionsPrice
      );
    }
  },
  methods: {
    submit() {
      // console.log("submit!");
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          this.submitStatus = "OK";
        }, 500);
      }
    }
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

span {
  font-family: Roboto;
}

.calc {
  &-smeta {
    &-outer {
      position: sticky;
      top: 200px;
      overflow: hidden;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        position: relative;
        top: unset;
      }
    }

    &-wrapper {
      margin: 0 auto;
    }

    &-header {
      font-style: normal;
      font-weight: normal;
      font-size: 20px;
      line-height: 14px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      transform: skew(20deg) translateX(-3%);

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        transform: skew(0deg) translateX(0%);
      }

      &-wrapper {
        padding: 23px 0;
        background: #35659a;
        transform: skew(-20deg) translateX(3%);

        @media #{map-get($display-breakpoints, 'md-and-down')} {
          transform: skew(0deg) translateX(0%);
        }
      }
    }

    &-body {
      margin-left: 30px;
      padding: 30px 25px 25px;
      background: #f2f2f2;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        margin-left: 0;
      }
    }

    &-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 18px;
      color: #e0e0e0;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-wrap: wrap;
      }

      &.active {
        .calc-smeta-descr {
          color: #000;
        }

        .calc-smeta-price {
          color: #35659a;

          span {
            font-weight: bold;
          }
        }
      }
    }

    &-descr {
      font-family: Avenir;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-basis: 100%;
      }
    }

    &-price {
      font-family: AvenirBold;
      font-size: 18px;
      line-height: 22px;

      @media #{map-get($display-breakpoints, 'md-and-down')} {
        flex-basis: 100%;
      }
    }

    &-total {
      font-family: AvenirBold;
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 165%;
      color: #ffffff;

      &-wrapper {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin: 0 -25px;
        padding: 8px 25px;
        background: #35659a;

        @media #{map-get($display-breakpoints, 'md-and-down')} {
          flex-wrap: wrap;
        }
      }

      &-descr {
        width: 100%;
        max-width: 144px;
        margin-right: 5px;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 100%;
        color: #ffffff;
      }
    }

    &-reset {
      display: block;
      margin: 25px auto 10px;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 13px;
      text-align: center;
      text-transform: uppercase;
      color: #35659a;
    }

    &-form {
      &-header {
        margin: 10px auto 15px;
        font-family: AvenirBold;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 165%;
        text-align: center;
        text-transform: uppercase;
        color: #35659a;
      }
    }

    &-input {
      width: 100%;
      margin: 0 0 10px;
      padding: 13px 20px 10px;
      background: #fff;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #000;
      outline: none;
      border: 1px solid transparent;

      &::placeholder {
        color: #bdbdbd;
      }

      &:focus {
        outline: none;
      }

      &.--error {
        border: 1px solid red;
      }
    }

    &-agreement {
      margin: 0 15px 16px;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      color: #333333;
    }

    &-submit {
      display: block;
      width: 100%;
      max-width: 210px;
      margin: 0 auto;
      padding: 16px 50px;
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
      pointer-events: none;

      &:hover {
        cursor: pointer;
      }

      &.active {
        border: 2px solid #f42d57;
        background: #f42d57;
        color: #ffffff;
        pointer-events: all;
      }
    }
  }
}
</style>
