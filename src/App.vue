<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container class="py-0">
          <v-row>
            <v-col cols="12" xl="8" offset-xl="2" offset="0" class="py-0">
              <div class="calc-header-wrapper">
                <h2 class="calc-header">Калькулятор услуг</h2>
                <p class="calc-descr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                  volutpat nunc donec diam tempus ornare praesent. Quis
                  tincidunt posuere quam ac. Consectetur hendrerit at
                  ullamcorper ullamcorper amet aenean sed accumsan quis.
                  Fermentum ultricies augue urna, magnis commodo, orci. In ac
                  pellentesque diam elementum nunc. Sed diam diam suscipit vitae
                  aliquet tincidunt arcu morbi sociis. Nullam bibendum euismod
                  venenatis dignissim scelerisque amet malesuada viverra.
                  Dignissim velit sed gravida aliquam etiam scelerisque in quis.
                  Facilisi maecenas lorem curabitur egestas ut malesuada
                  vulputate scelerisque blandit. Cursus enim, et vel amet, enim
                  nec.
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="8" offset-xl="1" offset="0">
              <div class="calc-panes">
                <step />
                <step-pane :inputs="sites" v-if="progress === 1">
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Вам нужно:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
                <step-pane :inputs="cms" v-if="progress === 2">
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Выберите CMS:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
                <step-pane :inputs="designes" v-if="progress === 3">
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Вам нужен дизайн:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
                <step-pane
                  :inputs="params"
                  v-if="progress === 4 && siteType === 'landing'"
                >
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Дополнительные параметры:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
                <step-pane
                  :checkbox="functions"
                  v-if="progress === 4 && siteType !== 'landing'"
                >
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Функционал:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
                <step-pane
                  :inputs="params"
                  v-if="progress === 5 && siteType !== 'landing'"
                >
                  <template v-slot>
                    <p class="calc-step-pane-header">
                      Дополнительные параметры:
                    </p>
                    <p class="calc-descr">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      volutpat nunc donec diam tempus ornare praesent. Quis
                      tincidunt posuere quam ac. Consectetur hendrerit at
                      ullamcorper ullamcorper amet aenean sed accumsan quis.
                      Fermentum ultricies augue urna, magnis commodo, orci. In
                      ac pellentesque diam elementum nunc. Sed diam diam
                      suscipit vitae aliquet tincidunt arcu morbi sociis. Nullam
                      bibendum euismod venenatis dignissim scelerisque amet
                      malesuada viverra. Dignissim velit sed gravida aliquam
                      etiam scelerisque in quis.
                    </p>
                  </template>
                </step-pane>
              </div>
            </v-col>
            <v-col cols="12" lg="4" xl="3">
              <smeta />
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import step from "./components/step";
import stepPane from "./components/stepPane";
import smeta from "./components/smeta";
import { mapState } from "vuex";

export default {
  label: "App",
  components: {
    step,
    stepPane,
    smeta
  },
  computed: {
    ...mapState([
      "progress",
      "steps",
      "siteType",
      "basePrice",
      "totalPrice",
      "sitePrice",
      "cmsPrice",
      "designPrice",
      "sites",
      "cms",
      "designes",
      "params",
      "functions"
    ])
  }
};
</script>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

@font-face {
  font-family: "Avenir";
  src: url("~@/assets/fonts/AvenirNext.eot");
  src: url("~@/assets/fonts/AvenirNext.eot?#iefix") format("embedded-opentype"),
    url("~@/assets/fonts/AvenirNext.woff") format("woff"),
    url("~@/assets/fonts/AvenirNext.ttf") format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "AvenirBold";
  src: url("~@/assets/fonts/AvenirNextBold.eot");
  src: url("~@/assets/fonts/AvenirNextBold.eot?#iefix")
      format("embedded-opentype"),
    url("~@/assets/fonts/AvenirNextBold.woff") format("woff"),
    url("~@/assets/fonts/AvenirNextBold.ttf") format("truetype");
  font-weight: bold;
  font-style: normal;
}

#app {
  font-family: Avenir, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.calc {
  &-header {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 120%;

    @media #{map-get($display-breakpoints, 'md-and-down')} {
      font-size: 45px;
    }
  }

  &-descr {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 165%;
  }
}
</style>
