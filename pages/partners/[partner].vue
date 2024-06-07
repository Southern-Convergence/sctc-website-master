<template>
  <div class="h-full w-full body-div">
    <v-img
      :src="`/static/images/${cover}`"
      class="header invert p-1 scale-75 aspect-auto md:w-3/5"
      style="margin: 0px auto"
      alt="Partner logo"
    />
    <!-- menu for mobile view -->
    <div class="hidden-md-and-up p-1 absolute top-0.5">
      <v-menu width="80%" transition="slide-y-transition" class="font-Poppins" location="center">
        <template v-slot:activator="{ props }">
          <v-btn icon v-bind="props" variant="tonal">
            <v-icon class="text-white">mdi-menu-right</v-icon>
          </v-btn>
        </template>
        <v-list style="" width="">
          <v-list-item>
            <v-tabs
              v-model="tab"
              grow
              slider-color="#ff7b02"
              mandatory="force"
              class="font-Roboto"
              density="compact"
              :mobile="true"
              direction="vertical"
            >
              <v-tab
                text="Description"
                value="description"
                :class="tab === 'description' ? 'text-[#ff7b02]' : 'bg-white'"
                style="font-size: 10px"
              ></v-tab>
              <v-tab
                text="Products"
                value="products"
                :class="tab === 'products' ? 'text-[#ff7b02]' : 'bg-white'"
                style="font-size: 10px"
              ></v-tab>
            </v-tabs>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
    <div class="h-full w-12/12 bg-white networkBG">
      <!-- the content reaching the bottom of the page is intentional -->
      <div class="w-12/12 h-full d-flex flex-row slide-animation" style="margin: 0px auto">
        <!-- web view -->
        <v-row class="p-1 md:p-10">
          <v-col cols="2" class="hidden-sm-and-down">
            <v-tabs
              v-model="tab"
              grow
              slider-color="#ff7b02"
              mandatory="force"
              class="font-Roboto"
              :mobile="false"
              direction="vertical"
            >
              <v-tab
                text="Description"
                value="description"
                :class="tab === 'description' ? ['text-[#ff7b02]', 'activeTab'] : 'bg-white'"
                style="font-size: 12px"
              ></v-tab>
              <v-tab
                text="Products"
                value="products"
                :class="tab === 'products' ? ['text-[#ff7b02]', 'activeTab'] : 'bg-white'"
                style="font-size: 12px"
              ></v-tab>
            </v-tabs>
          </v-col>
          <v-col>
            <v-window v-model="tab" direction="vertical" class="">
              <v-window-item value="description">
                <div
                  class="w-11/12 p-3 md:p-8t text-gray-800"
                  style="margin: 0px auto; background-color: rgba(255, 255, 255, 0.5); padding-top: 1rem"
                >
                  <h1
                    class="font-black font-Roboto text-center text-xl md:text-xl xl:text-2xl 2xl:text-4xl custom-underline"
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
                    class="mb-4 md:mb-8 text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins text-justify"
                    v-for="desc in description"
                  >
                    {{ desc }}
                  </p>
                  <nuxt-link to="/contact">
                    <v-btn variant="text" style="padding: 0px">
                      <span class="text-[#ff7b02]">Contact Us To Learn More</span>
                      <v-icon right class="ml-2 text-[#ff7b02]">mdi-arrow-right</v-icon>
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
                      <v-card-text
                        class="text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins font-weight-light"
                        style="padding: 25px 5px"
                      >
                        <!-- md:text-xs 2xl:text-base -->
                        {{ product.text }}
                      </v-card-text>
                    </v-card>
                  </div>

                  <!-- PRODUCTS MOBILE VIEW -->
                  <div class="grid hidden-md-and-up">
                    <!-- copying what's in the current website -->
                    <v-carousel cycle hide-delimiters touch show-arrows="hover" progress="#ff7b02">
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
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { partnersData } from '../../data/partners-data.ts';

const route = useRoute();
const partnerDetails = ref({});
const name = ref('');
const cover = ref('');
const background = ref('');
const tagline = ref('');
const description = ref([]);
const products = ref([]);

let tab = ref('');

console.log(name.value);

onMounted(() => {
  partnerDetails.value = partnersData.find((partner) => partner.link === route.params.partner);
  if (partnerDetails.value) {
    cover.value = partnerDetails.value.cover;
    name.value = partnerDetails.value.name;
    background.value = partnerDetails.value.background;
    tagline.value = partnerDetails.value.tagline;
    description.value = partnerDetails.value.description;
    products.value = partnerDetails.value.products;;
    useHead({
      title: name.value,
    });
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
});

const getColsCount = () => {
  let classCols = 'md:grid-cols-'.concat(products.value.length);
  return classCols;
};
</script>

<style scoped>
.body-div {
  position: relative;
  width: 100%;
  height: 100%;
  color: white;
  overflow: hidden; /* Ensure the video doesn't overflow the container */
  background: #ff6001;
  background: linear-gradient(139deg, rgba(50, 50, 50, 0.3) 0%, rgba(0, 0, 0, 0.3) 100%),
    radial-gradient(at left top, #ff6001, #ffd001);
}

.video-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0; /* Position the video behind other content */
}

.gradient {
  background-image: linear-gradient(0deg, rgb(208, 122, 254) 0%, rgb(69, 0, 104) 100%);
}

.header {
  animation: emphasis 0.8s ease;
}

.activeTab {
  background-color: #ff7b0224;
  color: #ff7b02;
}

.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff7b02;
}

.networkBG {
  background-image: url(/assets/images/networkbg-transparent2.png);
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

@keyframes emphasis {
  0% {
    transform: scale(0.75); /* Adjust the scale factor as needed */
  }
  50% {
    transform: scale(0.85); /* Adjust the scale factor as needed */
  }
  100% {
    transform: scale(0.75); /* Adjust the scale factor as needed */
  }
}
</style>
