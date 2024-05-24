<template>
  <div class="slide-animation h-full">
    <!-- the content reaching the bottom of the page is intentional -->
    <div class="w-11/12" style="margin: 0px auto">
      <v-tabs
        v-model="tab"
        grow
        hide-slider
        mandatory="force"
        color="grey-darken-2"
        class="font-Roboto"
        density="comfortable"
        :mobile="false"
      >
        <v-tab
          text="Description"
          value="description"
          class="rounded-t-xl w-1/2"
          :class="tab === 'description' ? 'bg-white' : getInactiveClass(route.name)"
          style="font-size: 12px"
        ></v-tab>
        <v-tab
          text="Products"
          value="products"
          class="rounded-t-xl w-1/2"
          :class="tab === 'products' ? 'bg-white' : getInactiveClass(route.name)"
          style="font-size: 12px"
        ></v-tab>
      </v-tabs>
    </div>

    <div class="networkBG w-11/12 bg-white h-full" style="margin: 0px auto">
      <v-window v-model="tab" direction="horizontal">
        <v-window-item value="description">
          <div
            class="p-5 md:p-20"
            style="margin: 0px auto; background-color: rgba(255, 255, 255, 0.5); padding-top: 2em"
          >
            <h1
              class="font-black font-Roboto text-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-purple-900"
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

            <p
              class="mb-8 text-xs md:text-sm lg:text-sm xl:text-sm 2xl:text-base font-Poppins"
              v-for="desc in description"
            >
              {{ desc }}
            </p>
          </div>
        </v-window-item>
        <v-window-item value="products">
          <div class="p-5 md:p-8" style="margin: 0px auto; padding-top: 1.5rem">
            <h1
              class="font-black font-Roboto text-center text-lg md:text-xl xl:text-2xl 2xl:text-4xl text-purple-900"
              :class="getTitleColor(route.name)"
            >
              Products
            </h1>
            <v-divider
              thickness="5"
              color="black"
              length="80"
              class="border-opacity-100 p-0"
              style="margin: 15px auto 30px auto"
            >
            </v-divider>

            <!-- PRODUCTS WEB VIEW -->
            <div class="grid hidden-sm-and-down" :class="`md:grid-cols-${props.products.length}`">
              <!-- copying what's in the current website -->
              <v-card flat class="mx-4 xl:mx-3" v-for="product in products">
                <v-img :src="`/static/images/${product.image}`"></v-img>
                <v-card-text class="font-Poppins" style="padding: 20px 0px">
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
                    <v-img :src="`/static/images/${product.image}`"></v-img>
                    <v-card-text class="text-xs font-Poppins" style="padding: 20px 0px">
                      {{ product.text }}
                    </v-card-text>
                  </v-card>
                </v-carousel-item>
              </v-carousel>
            </div>
          </div>
        </v-window-item>
      </v-window>
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

const getInactiveClass = (partner) => {
  let pageColor = '';
  switch (partner) {
    case 'DataStax':
      pageColor = 'inactiveDataStax';
      break;
    case 'fastly':
      pageColor = 'inactiveFastly';
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
</script>

<style scoped>
.inactiveDataStax {
  background-color: #e1bee724;
  border-top: 2px #e1bee7b1 solid;
  border-right: 2px #e1bee7b1 solid;
  border-left: 2px #e1bee7b1 solid;
  color: #e1bee7;
}

.inactiveFastly {
  background-color: #e7bebe24;
  border-top: 2px #e7bebeb1 solid;
  border-right: 2px #e7bebeb1 solid;
  border-left: 2px #e7bebeb1 solid;
  color: #e7bebe;
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
