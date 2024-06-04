<template>
  <div class="h-full">
    <!-- the content reaching the bottom of the page is intentional -->
    <div class="w-12/12 h-full d-flex flex-row slide-animation" style="margin: 0px auto">
      <!-- menu for mobile view -->
      <div class="hidden-md-and-up p-2">
        <v-menu
          width="100%"
          transition="slide-x-transition"
          class="font-Poppins"
          location="center"
          style="margin: 0px !important; padding: 0px !important"
        >
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props" variant="tonal">
              <v-icon :class="getTitleColor(route.name)">mdi-view-list</v-icon>
            </v-btn>
          </template>
          <v-list style="" width="">
            <v-list-item>
              <v-tabs
                v-model="tab"
                grow
                hide-slider
                mandatory="force"
                class="font-Roboto"
                density="compact"
                :mobile="false"
                direction="vertical"
              >
                <v-tab
                  text="Description"
                  value="description"
                  :class="tab === 'description' ? getActiveClass(route.name) : 'bg-white'"
                  style="font-size: 10px"
                ></v-tab>
                <v-tab
                  text="Products"
                  value="products"
                  :class="tab === 'products' ? getActiveClass(route.name) : 'bg-white'"
                  style="font-size: 10px"
                ></v-tab>
              </v-tabs>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <!-- web view -->
      <v-row class="p-1 md:p-10">
        <v-col cols="2" class="hidden-sm-and-down">
          <v-tabs
            v-model="tab"
            grow
            hide-slider
            mandatory="force"
            class="font-Roboto"
            density="compact"
            :mobile="false"
            direction="vertical"
          >
            <v-tab
              text="Description"
              value="description"
              :class="tab === 'description' ? getActiveClass(route.name) : 'bg-white'"
              style="font-size: 12px"
            ></v-tab>
            <v-tab
              text="Products"
              value="products"
              :class="tab === 'products' ? getActiveClass(route.name) : 'bg-white'"
              style="font-size: 12px"
            ></v-tab>
          </v-tabs>
        </v-col>
        <v-col>
          <v-window v-model="tab" direction="vertical" class="">
            <v-window-item value="description">
              <div
                class="w-11/12 p-5 md:p-8"
                style="margin: 0px auto; background-color: rgba(255, 255, 255, 0.5); padding-top: 1.5rem"
              >
                <h1
                  class="font-black font-Roboto text-center text-xl md:text-xl xl:text-2xl 2xl:text-4xl text-purple-900"
                  :class="getTitleColor(route.name)"
                >
                  {{ tagline }}
                </h1>
                <v-divider
                  thickness="5"
                  color="black"
                  length="80"
                  class="border-opacity-100 p-0"
                  style="margin: 10px auto 20px auto"
                >
                </v-divider>

                <p class="mb-4 md:mb-8 text-xs xl:text-sm 2xl:text-lg font-Poppins" v-for="desc in description">
                  {{ desc }}
                </p>
                <nuxt-link to="/contact">
                  <v-btn variant="text" style="padding: 0px">
                    <span :class="getTitleColor(route.name)">Contact Us To Learn More</span>
                    <v-icon right class="ml-2" :class="getTitleColor(route.name)">mdi-arrow-right</v-icon>
                  </v-btn>
                </nuxt-link>
              </div>
            </v-window-item>
            <v-window-item value="products">
              <div class="p-5 md:p-8" style="margin: 0px auto; padding-top: 1.5rem">
                <!-- PRODUCTS WEB VIEW -->
                <div class="grid hidden-sm-and-down" :class="getColsCount()">
                  <!-- copying what's in the current website -->
                  <v-card flat class="mx-4 xl:mx-3" v-for="product in products">
                    <v-img
                      :src="`/static/images/${product.image}`"
                      :lazy-src="`/static/images/${product.image}`"
                      class="floating-image"
                    ></v-img>
                    <v-card-text class="font-Poppins" style="padding: 25px 5px; font-size: 0.8em">
                      <!-- had to use basic css, tailwind text-xs wasn't working -->
                      <!-- md:text-xs 2xl:text-base -->
                      {{ product.text }}
                    </v-card-text>
                  </v-card>
                </div>

                <!-- PRODUCTS MOBILE VIEW -->
                <div class="grid hidden-md-and-up">
                  <!-- copying what's in the current website -->
                  <v-carousel cycle hide-delimiters touch show-arrows="hover" progress="grey-darken-1">
                    <v-carousel-item v-for="product in products">
                      <v-card flat class="mx-4 xl:mx-3">
                        <v-img
                          :src="`/static/images/${product.image}`"
                          :lazy-src="`/static/images/${product.image}`"
                          class="floating-image"
                        ></v-img>
                        <v-card-text class="text-xs font-Poppins" style="padding: 25px 0px">
                          {{ product.text }}
                        </v-card-text>
                      </v-card>
                    </v-carousel-item>
                  </v-carousel>
                </div>
              </div>
            </v-window-item>
          </v-window>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

let tab = ref('');

let props = defineProps({
  products: {
    type: Array,
    default: () => [],
  },
  description: {
    type: Array,
    default: () => [],
  },
  tagline: {
    type: String,
    default: '',
  },
});

const getActiveClass = (partner) => {
  let pageColor = '';
  switch (partner) {
    case 'DataStax':
      pageColor = 'activeDataStax';
      break;
    case 'fastly':
      pageColor = 'activeFastly';
      break;
  }
  return pageColor;
};

const getTitleColor = (partner) => {
  let titleColor = '';
  switch (partner) {
    case 'DataStax':
      titleColor = 'text-purple-900';
      break;
    case 'fastly':
      titleColor = 'text-red-900';
      break;
  }
  return titleColor;
};

const getColsCount = () => {
  let classCols = 'md:grid-cols-'.concat(props.products.length);
  return classCols;
};
</script>

<style scoped>
.activeDataStax {
  background-color: #e1bee724;
  border-top: 2px #e1bee7b1 solid;
  border-bottom: 2px #e1bee7b1 solid;
  color: #80488a;
}

.activeFastly {
  background-color: #e7bebe24;
  border-top: 2px #e7bebeb1 solid;
  border-bottom: 2px #e7bebeb1 solid;
  color: #8a4848;
}

.networkBG {
  background-image: url(/assets/images/networkbg-transparent2.png);
  background-size: auto 100%;
}

.content-animation {
  animation: opacity-change 0.8s ease;
}

@keyframes opacity-change {
  from {
    opacity: 0;
  }
  to {
    opacity: 100;
  }
}
</style>
