<template>
  <div
    id="CarouselContainer"
    :class="{ baseCarouselContainer: disabled, closeCarousel: !disabled }"
    class="networkBG w-full h-full"
  >
    <div class="h-4/5">
      <v-carousel
        v-model="model"
        hide-delimiter-background
        hide-delimiters
        progress="#ff7b02"
        :show-arrows="false"
        class="h-100"
      >
        <v-carousel-item v-for="(item, i) in carousel" :key="item" :value="i">
          <v-sheet color="rgba(255, 0, 0, 0.0)" class="h-full">
            <div class="d-flex fill-height justify-center align-center">
              <!-- Services -->
              <template v-if="item.tag === 'Services'">
                <div class="w-100 px-10 mt-8 h-100 d-flex justify-center align-center">
                  <v-card class="mx-auto" max-width="1200" flat color="transparent">
                    <div class="p-1 md:p-12">
                      <v-row justify="center" align="end">
                        <v-col col="12" md="12" class="">
                          <p class="font-Poppins text-xl md:text-5xl mb-6 font-weight-bold text-[#ff7b02]">
                            <v-icon class="pa-1 pa-md-3">
                              <v-img
                                :lazy-src="`/static/images/${item.image}`"
                                :src="`/static/images/${item.image}`"
                              ></v-img>
                            </v-icon>
                            {{ item.title }}
                          </p>
                          <p class="font-Overpass text-gray-500 text-xs font-weight-medium md:text-lg text-justify">
                            {{ item.text }}
                          </p>
                          <v-btn color="orange" variant="flat" :to="item.link" class="mt-4 responsive-btn">
                            Learn More
                            <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                          </v-btn>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card>
                </div>
              </template>

              <!-- Partners -->
              <template v-if="item.tag === 'Partners'">
                <div class="w-100 px-10 mt-12 h-100 d-flex justify-center align-center">
                  <v-card class="mx-auto" max-width="1200" flat color="transparent">
                    <div class="p-1 md:p-12">
                      <v-row justify="center" align="center">
                        <v-col col="12" md="12" class="d-flex flex-column justify-space-center align-center">
                          <p class="font-Poppins text-xl md:text-5xl mb-6 font-weight-bold text-[#ff7b02]">
                            {{ item.title }}
                          </p>
                          <p class="font-Overpass text-gray-500 text-xs font-weight-medium md:text-lg text-center">
                            {{ item.text }}
                          </p>
                          <v-divider class="border-opacity-50 w-75 my-4" />
                          <div class="flex flex-column flex-md-row w-100 w-md-75">
                            <v-img
                              v-for="(image, index) in item.images"
                              :key="image"
                              :lazy-src="`/static/images/${image}`"
                              :src="`/static/images/${image}`"
                              class="partner-logo mx-auto my-2 mx-md-2 zoom-on-hover cursor-pointer"
                              @click="redirectToLink(item.links[index])"
                            >
                            </v-img>
                          </div>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card>
                </div>
              </template>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
    <div class="h-1/5 flex justify-end align-start pr-5 w-100">
      <div class="flex justify-around align-center w-3/6 md:w-1/6">
        <v-btn icon="mdi-chevron-left" class="carousel-arrow" @click="model = Math.max(model - 1, 0)" />
        <v-btn class="carousel-arrow" @click="emits('toggleDisabled')" icon="mdi-chevron-down" />
        <v-btn
          icon="mdi-chevron-right"
          class="carousel-arrow"
          @click="model = Math.min(model + 1, carousel.length - 1)"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const emits = defineEmits(['toggleDisabled']);
const model = ref(0);
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  carousel: {
    type: Array,
    default: () => [],
  },
});

const router = useRouter();

const redirectToLink = (link) => {
  router.push(link);
};
</script>
<style scoped>
.partner-logo {
  width: 50%; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
}
@media (max-width: 768px) {
  .partner-logo {
    width: 50%;
  }
}

.carousel-arrow {
  background-color: white !important;
  color: #ff7b02 !important;
}

.baseCarouselContainer {
  display: block;
  background: radial-gradient(80% 20% at 50% -5%, #ffcd9388 40%, rgba(255, 255, 255, 0.127) 100%);
  background-color: white;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 75%;
  color: black;
  animation: carouselOpen 0.8s ease;
}

.carouselBtn {
  background-color: white !important;
  color: #ff7b02 !important;
}

.closeCarousel {
  display: none;
}

.networkBG {
  background-image: url(/assets/images/networkbg-transparent.png);
  background-size: cover;
}

.zoom-on-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}

@keyframes carouselOpen {
  from {
    height: 0%;
  }

  to {
    height: 75%;
  }
}
</style>
