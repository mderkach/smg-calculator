<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container class="py-0">
          <v-row>
            <v-col cols="12" xl="10" offset-xl="1" offset="0" class="py-0">
              <div class="calc-header-wrapper">
                <h1 class="calc-header">
                  Калькулятор услуг
                </h1>
                <p v-show="progress === 1" class="calc-descr">
                  Калькулятор позволяет выяснить стоимость разработки сайта, не
                  обращаясь для этого к нашему менеджеру: 5 несложных шагов и вы
                  сможете узнать стоимость разработки своего веб-ресурса. Ваш
                  сайт будут создавать разработчики Soft Media Group –
                  программисты, дизанеры и верстальщики с опытом от 7 лет. Это
                  значит, что идеально будет работать абсолютно любой
                  веб-ресурс: и состоящий из одной страницы лендинг, и
                  полноценный портал. Каждый шаг снабжен подробной инструкцией –
                  мы поможем вам определиться с набором функций, который вам
                  нужен и отказаться от лишних трат!
                </p>
              </div>
            </v-col>
            <v-col cols="12" lg="8" offset-xl="1" offset="0">
              <div class="calc-panes">
                <step />
                <step-pane :inputs="sites" v-show="progress === 1">
                  <template v-slot>
                    <p class="calc-descr">
                      Определитесь с типом сайта. Сильнее всего стоимость
                      интернет-ресурса зависит именно от данного выбора.
                    </p>
                  </template>
                  <template v-slot:bottom>
                    <p class="calc-step-pane-header">Вам нужно:</p>
                    <ul>
                      <li>
                        <strong>Лендинг</strong> — одностраничный сайт. Такой
                        сайт идеально подойдет для продвижения услуг или
                        представления 1 товара. На таких сайтах используют
                        мотивирующие формы, много фото товара или выполненных
                        работ, отзывы о работе с вами.
                      </li>
                      <li>
                        <strong>Сайт-визитка</strong> — уже чуть более сложный
                        ресурс, который может рассказывать о вас или вашеё
                        компании, содержать портфолио, и небольшой список услуг
                        или товаров.
                      </li>
                      <li>
                        <strong>Сайт-витрина</strong> — каталог выпускаемой вами
                        продукции или предлагаемых услуг. Пользователь сможет
                        искать необходимый товар через фильтры и другие удобные
                        функции, но не сможет совершить покупку – нужно будет
                        позвонить в офис или посетить офлайн магазин для
                        закрытия сделки.
                      </li>
                      <li>
                        <strong>Интернет-магазин</strong> — нужен тем, кто
                        собирается не только рассказывать о товарах, но ещё и
                        продавать их через сайт. Подключаются платежные системы,
                        настраиваются фильтры и подключается большой список
                        дополнительных опций – чтобы пользователю было удобно
                        ориентироваться на сайте с большим количеством страниц
                        или товаров
                      </li>
                    </ul>
                  </template>
                </step-pane>
                <div v-show="siteType === 'landing'">
                  <step-pane :inputs="filterCms" v-show="progress === 2">
                    <template v-slot>
                      <p class="calc-step-pane-header">Выберите CMS:</p>
                      <p class="calc-descr">
                        CMS - система управления содержимым сайта. Именно «CMS»
                        позволяет в дальнейшем упростить добавление новых
                        материалов и редактирование старых. Системы могут быть
                        как платными, так и бесплатными. Выбирать её следует
                        исходя из задач, которые будет решать сайт. Например,
                        нет смысла использовать 1С-Bitrix, если веб-ресурс будет
                        представлять собой обычный лендинг. Но зато эта CMS
                        отлично подходит для создания на её базе
                        интернет-магазина.
                      </p>
                    </template>
                    <template v-slot:bottom>
                      <ul>
                        <li>
                          <strong>Бесплатные CMS:</strong>
                          <b>
                            <i>WordPress</i>
                          </b>
                          и
                          <b> <i>Joomla</i> </b>. На их основе делают
                          <b>одностраничники, блоги, сайты-витрины</b> и даже
                          <b>интернет-магазины</b>. Последние, правда, обычно
                          получаются с некоторым ограничением функционала.
                          <b>Drupal или opencart.</b>
                        </li>
                        <li>
                          <strong>Платные CMS:</strong>
                          <b> <i>1С-Bitrix, NetCat, UMI.CMS</i> </b>. На Bitrix
                          создаются
                          <b>
                            информационные порталы, интернет-магазины,
                            корпоративные веб-ресурсы
                          </b>
                          и даже социальные сети. Эта CMS способна похвастать не
                          только широким функционалом, но и полноценной
                          интеграцией с другими программными продуктами 1С.
                          Гораздо меньшую популярность имеют NetCat, UMI.CMS.
                        </li>
                      </ul>
                    </template>
                  </step-pane>
                  <step-pane :inputs="filterDesignes" v-show="progress === 3">
                    <template v-slot>
                      <p class="calc-step-pane-header">Вам нужен дизайн:</p>
                      <p class="calc-descr">
                        На этом шаге нужно определиться – подойдет ли вам
                        шаблонный дизайн или его нужно разработать с 0. Если вам
                        необходимо сэкономить – стоит выбрать популярную CMS с
                        множеством бесплатных и платных шаблонов – их сейчас
                        разработано множество под любую тематику и вкус.
                      </p>
                      <p class="calc-descr">
                        Если же нужен сайт с уникальным дизайном в Soft Media
                        Group накоплен большой опыт дизайнерских решений для
                        сайтов в различных тематиках. Мы всегда уделяем внимание
                        юзабилити, детальной проработке всех аспектов макета,
                        фокусируемся на целевом действии, чтобы дизайн был не
                        просто красивым, но и функциональным, а сайт приносил
                        прибыль.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane :inputs="filterParams" v-show="progress === 4">
                    <template v-slot>
                      <p class="calc-step-pane-header">
                        Дополнительные параметры:
                      </p>
                      <p class="calc-descr">
                        В зависимости от ваших пожеланий, мы можем наделить сайт
                        дополнительным функционалом. Например, веб-ресурс может
                        получить:
                      </p>
                      <ul>
                        <li>
                          <strong>Интеграцию с 1С</strong> — не помешает в том
                          случае, если вы уже активно пользуетесь программами
                          этой компании;
                        </li>
                        <li>
                          <strong>Интеграцию с Яндекс.Маркет</strong> — очень
                          важно для интернет-магазина, который планирует
                          размещение своих товаров в Яндекс.Маркет;
                        </li>
                        <li>
                          <strong>Выгрузку в Google Merchant</strong> — также
                          этот сервис известен под названием
                          <i>Google Shopping</i> – аналог
                          <strong>Яндекс.Маркет</strong>. так же необходим
                          магазинам, планирующим продавать свои товары через
                          данную площадку;
                        </li>
                        <li>
                          <strong>Калькулятор услуг или товаров</strong> — также
                          этот сервис известен под названием Google Shopping –
                          аналог Яндекс.Маркет. так же необходим магазинам,
                          планирующим продавать свои товары через данную
                          площадку;
                        </li>
                        <li>
                          <strong>Базовое подключение к «Битрикс-24»</strong> —
                          вам станет доступен комплект полезных инструментов для
                          ведения бизнеса – отслеживание заявок, аналитика
                          продаж, коллтрекинг, внутренняя система управления
                          проектами и задачами;
                        </li>
                        <li>
                          <strong>Размещение сайта на хостинге </strong> — эта
                          услуга позволяет вам на выходе получить полноценный
                          сайт, доступный для всех интернет-пользователей.
                        </li>
                      </ul>
                    </template>
                  </step-pane>
                </div>
                <div v-show="siteType !== 'landing'">
                  <step-pane :inputs="pages" v-show="progress === 2">
                    <template v-slot>
                      <p class="calc-step-pane-header">
                        Выберите кол-во страниц:
                      </p>
                    </template>
                  </step-pane>
                  <step-pane :inputs="filterCms" v-show="progress === 3">
                    <template v-slot>
                      <p class="calc-step-pane-header">Выберите CMS:</p>
                      <p class="calc-descr">
                        CMS - система управления содержимым сайта. Именно «CMS»
                        позволяет в дальнейшем упростить добавление новых
                        материалов и редактирование старых. Системы могут быть
                        как платными, так и бесплатными. Выбирать её следует
                        исходя из задач, которые будет решать сайт. Например,
                        нет смысла использовать 1С-Bitrix, если веб-ресурс будет
                        представлять собой обычный лендинг. Но зато эта CMS
                        отлично подходит для создания на её базе
                        интернет-магазина.
                      </p>
                    </template>
                    <template v-slot:bottom>
                      <ul>
                        <li>
                          <strong>Бесплатные CMS:</strong>
                          <b>
                            <i>WordPress</i>
                          </b>
                          и
                          <b> <i>Joomla</i> </b>. На их основе делают
                          <b>одностраничники, блоги, сайты-витрины</b> и даже
                          <b>интернет-магазины</b>. Последние, правда, обычно
                          получаются с некоторым ограничением функционала.
                          <b>Drupal или opencart.</b>
                        </li>
                        <li>
                          <strong>Платные CMS:</strong>
                          <b> <i>1С-Bitrix, NetCat, UMI.CMS</i> </b>. На Bitrix
                          создаются
                          <b>
                            информационные порталы, интернет-магазины,
                            корпоративные веб-ресурсы
                          </b>
                          и даже социальные сети. Эта CMS способна похвастать не
                          только широким функционалом, но и полноценной
                          интеграцией с другими программными продуктами 1С.
                          Гораздо меньшую популярность имеют NetCat, UMI.CMS.
                        </li>
                      </ul>
                    </template>
                  </step-pane>
                  <step-pane :inputs="filterDesignes" v-show="progress === 4">
                    <template v-slot>
                      <p class="calc-step-pane-header">Вам нужен дизайн:</p>
                      <p class="calc-descr">
                        На этом шаге нужно определиться – подойдет ли вам
                        шаблонный дизайн или его нужно разработать с 0. Если вам
                        необходимо сэкономить – стоит выбрать популярную CMS с
                        множеством бесплатных и платных шаблонов – их сейчас
                        разработано множество под любую тематику и вкус.
                      </p>
                      <p class="calc-descr">
                        Если же нужен сайт с уникальным дизайном в Soft Media
                        Group накоплен большой опыт дизайнерских решений для
                        сайтов в различных тематиках. Мы всегда уделяем внимание
                        юзабилити, детальной проработке всех аспектов макета,
                        фокусируемся на целевом действии, чтобы дизайн был не
                        просто красивым, но и функциональным, а сайт приносил
                        прибыль.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane
                    :checkbox="functionsVisit"
                    v-show="progress === 5 && siteType === 'visit'"
                  >
                    <template v-slot>
                      <p class="calc-step-pane-header">Функционал:</p>
                      <p class="calc-descr">
                        Любой современный сайт, основанный на CMS, состоит из
                        модулей. Наш калькулятор позволяет выбирая те или иные
                        модули оценить конечную стоимость проекта. Быть может,
                        вы сами в состоянии установить модуль, прописывающий
                        количество элементов на странице. Тогда почему бы не
                        сэкономить определенную денежную сумму?
                      </p>
                      <p class="calc-descr">
                        На этом шаге вы уже знаете стоимость создания нужного
                        вам сайта. Теперь вы можете прикинуть, готовы ли вы
                        потратить такую сумму. Если необходимо чуть-чуть её
                        понизить, то просто откажитесь от тех модулей, которые
                        или не требуются, или вы в дальнейшем установите
                        самостоятельно.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane
                    :checkbox="functionsShowcase"
                    v-show="progress === 5 && siteType === 'showcase'"
                  >
                    <template v-slot>
                      <p class="calc-step-pane-header">Функционал:</p>
                      <p class="calc-descr">
                        Любой современный сайт, основанный на CMS, состоит из
                        модулей. Наш калькулятор позволяет выбирая те или иные
                        модули оценить конечную стоимость проекта. Быть может,
                        вы сами в состоянии установить модуль, прописывающий
                        количество элементов на странице. Тогда почему бы не
                        сэкономить определенную денежную сумму?
                      </p>
                      <p class="calc-descr">
                        На этом шаге вы уже знаете стоимость создания нужного
                        вам сайта. Теперь вы можете прикинуть, готовы ли вы
                        потратить такую сумму. Если необходимо чуть-чуть её
                        понизить, то просто откажитесь от тех модулей, которые
                        или не требуются, или вы в дальнейшем установите
                        самостоятельно.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane
                    :checkbox="functionsStore"
                    v-show="progress === 5 && siteType === 'store'"
                  >
                    <template v-slot>
                      <p class="calc-step-pane-header">Функционал:</p>
                      <p class="calc-descr">
                        Любой современный сайт, основанный на CMS, состоит из
                        модулей. Наш калькулятор позволяет выбирая те или иные
                        модули оценить конечную стоимость проекта. Быть может,
                        вы сами в состоянии установить модуль, прописывающий
                        количество элементов на странице. Тогда почему бы не
                        сэкономить определенную денежную сумму?
                      </p>
                      <p class="calc-descr">
                        На этом шаге вы уже знаете стоимость создания нужного
                        вам сайта. Теперь вы можете прикинуть, готовы ли вы
                        потратить такую сумму. Если необходимо чуть-чуть её
                        понизить, то просто откажитесь от тех модулей, которые
                        или не требуются, или вы в дальнейшем установите
                        самостоятельно.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane
                    :checkbox="functions"
                    v-show="
                      progress === 5 &&
                        siteType !== 'visit' &&
                        siteType !== 'store' &&
                        siteType !== 'showcase'
                    "
                  >
                    <template v-slot>
                      <p class="calc-step-pane-header">Функционал:</p>
                      <p class="calc-descr">
                        Любой современный сайт, основанный на CMS, состоит из
                        модулей. Наш калькулятор позволяет выбирая те или иные
                        модули оценить конечную стоимость проекта. Быть может,
                        вы сами в состоянии установить модуль, прописывающий
                        количество элементов на странице. Тогда почему бы не
                        сэкономить определенную денежную сумму?
                      </p>
                      <p class="calc-descr">
                        На этом шаге вы уже знаете стоимость создания нужного
                        вам сайта. Теперь вы можете прикинуть, готовы ли вы
                        потратить такую сумму. Если необходимо чуть-чуть её
                        понизить, то просто откажитесь от тех модулей, которые
                        или не требуются, или вы в дальнейшем установите
                        самостоятельно.
                      </p>
                    </template>
                  </step-pane>
                  <step-pane :inputs="filterParams" v-show="progress === 6">
                    <template v-slot>
                      <p class="calc-step-pane-header">
                        Дополнительные параметры:
                      </p>
                    </template>
                    <template v-slot:bottom>
                      <p class="calc-descr">
                        В зависимости от ваших пожеланий, мы можем наделить сайт
                        дополнительным функционалом. Например, веб-ресурс может
                        получить:
                      </p>
                      <ul>
                        <li>
                          <strong>Интеграцию с 1С</strong> — не помешает в том
                          случае, если вы уже активно пользуетесь программами
                          этой компании;
                        </li>
                        <li>
                          <strong>Интеграцию с Яндекс.Маркет</strong> — очень
                          важно для интернет-магазина, который планирует
                          размещение своих товаров в Яндекс.Маркет;
                        </li>
                        <li>
                          <strong>Выгрузку в Google Merchant</strong> — также
                          этот сервис известен под названием
                          <i>Google Shopping</i> – аналог
                          <strong>Яндекс.Маркет</strong>. так же необходим
                          магазинам, планирующим продавать свои товары через
                          данную площадку;
                        </li>
                        <li>
                          <strong>Калькулятор услуг или товаров</strong> — также
                          этот сервис известен под названием Google Shopping –
                          аналог Яндекс.Маркет. так же необходим магазинам,
                          планирующим продавать свои товары через данную
                          площадку;
                        </li>
                        <li>
                          <strong>Базовое подключение к «Битрикс-24»</strong> —
                          вам станет доступен комплект полезных инструментов для
                          ведения бизнеса – отслеживание заявок, аналитика
                          продаж, коллтрекинг, внутренняя система управления
                          проектами и задачами;
                        </li>
                        <li>
                          <strong>Размещение сайта на хостинге </strong> — эта
                          услуга позволяет вам на выходе получить полноценный
                          сайт, доступный для всех интернет-пользователей.
                        </li>
                      </ul>
                    </template>
                  </step-pane>
                </div>
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
  data: () => ({
    filteredCms: [],
    filteredDesignes: [],
    filteredParams: []
  }),
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
      "pages",
      "functions",
      "functionsVisit",
      "functionsShowcase",
      "functionsStore"
    ]),
    filterCms() {
      while (this.filteredCms.length) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.filteredCms.pop();
      }
      this.cms.forEach(item => {
        if (this.siteType === "landing") {
          if (item.type === "bitrix" || item.type === "other") {
            item.price = 30000;
          }
        }
        if (this.siteType === "visit" || this.siteType === "services") {
          if (item.type === "bitrix" || item.type === "other") {
            item.price = 35000;
          }
        }
        if (this.siteType === "showcase") {
          if (item.type === "bitrix" || item.type === "other") {
            item.price = 40000;
          }
        }
        if (this.siteType === "store" || this.siteType === "enterprise") {
          if (item.type === "bitrix" || item.type === "other") {
            item.price = 60000;
          }
        }
        if (this.siteType === "store") {
          if (item.type === "bitrix" || item.type === "other") {
            item.price = 60000;
          }
        }
        if (this.siteType !== "store") {
          if (item.type !== "magento" && item.type !== "opencart") {
            this.filteredCms.push(item);
          }
        } else {
          this.filteredCms.push(item);
        }
      });
      return this.filteredCms;
    },
    filterDesignes() {
      while (this.filteredDesignes.length) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.filteredDesignes.pop();
      }
      this.designes.forEach(item => {
        if (this.siteType === "landing") {
          if (item.type === "individual") {
            item.price = 30000;
          }
        }
        if (this.siteType === "visit" || this.siteType === "services") {
          if (item.type === "individual") {
            item.price = 35000;
          }
        }
        if (this.siteType === "showcase") {
          if (item.type === "individual") {
            item.price = 40000;
          }
        }
        if (this.siteType === "store" || this.siteType === "enterprise") {
          if (item.type === "individual") {
            item.price = 60000;
          }
        }
        this.filteredDesignes.push(item);
      });
      return this.filteredDesignes;
    },
    filterParams() {
      while (this.filteredParams.length) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.filteredParams.pop();
      }
      this.params.forEach(item => {
        if (this.siteType === "landing") {
          if (item.type !== "onec" && item.type !== "yandexmarket") {
            this.filteredParams.push(item);
          } else {
            this.filteredParams.push(item);
          }
        } else {
          this.filteredParams.push(item);
        }
      });
      return this.filteredParams;
    }
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

@font-face {
  font-family: "Roboto";
  src: url("~@/assets/fonts/Roboto.eot");
  src: url("~@/assets/fonts/Roboto.eot?#iefix") format("embedded-opentype"),
    url("~@/assets/fonts/Roboto.woff") format("woff"),
    url("~@/assets/fonts/Roboto.ttf") format("truetype");
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
    display: block;
    margin-bottom: 20px;
    font-style: normal;
    font-weight: bold;
    font-size: 72px;
    line-height: 120%;
    color: #000 !important;
    text-decoration: none;

    &:hover {
      cursor: pointer;
      color: #000;
    }

    @media #{map-get($display-breakpoints, 'md-and-down')} {
      font-size: 45px;
    }
  }

  &-descr {
    margin-bottom: 20px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 165%;
  }
}

li {
  font-size: 14px;
  margin-bottom: 16px;
}
</style>
