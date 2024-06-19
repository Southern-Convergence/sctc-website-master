<template>
  <div
    id="CarouselContainer"
    :class="{ baseCarouselContainer: disabled, closeCarousel: !disabled }"
    class="networkBG w-full h-full"
  >
    <v-btn @click="emits('toggleDisabled')" variant="elevated" icon="mdi-chevron-down" class="return-btn" />
    <v-carousel hide-delimiter-background hide-delimiters touch.boolean="true" height="100%" color="#ff7b02">
      <template v-slot:prev="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-chevron-left"> </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-chevron-right"> </v-btn>
      </template>
      <v-carousel-item v-for="item in carousel">
        <template v-if="item.tag === 'Partners'">
          <div class="md:mx-24 d-flex align-center justify-center w-75 mx-auto h-100 border-xl">
            <div class="text-center md:p-12 m-auto">
              <p class="font-Poppins text-xl md:text-5xl m-6 font-bold text-[#ff7b02]">
                {{ item.title }}
              </p>
              <p class="font-Overpass text-gray-500 text-sm font-semibold md:text-xl">{{ item.text }}</p>
              <div class="d-flex flex-column justify-space-center align-center mt-8">
                <template v-for="(image, index) in item.images" :key="index">
                  <v-img
                    :lazy-src="`/static/images/${image}`"
                    :src="`/static/images/${image}`"
                    class="partner-logo mx-auto my-2 mx-md-2 zoom-on-hover scale-75 cursor-pointer"
                    @click="redirectToLink(item.links[index])"
                  ></v-img>
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <v-container class="w-75 h-100 d-flex justify-center align-center border-xl">
            <v-card class="mx-auto mb-20" max-width="1200" flat color="transparent">
              <div class="p-1 md:p-12">
                <v-row justify="center" align="center">
                  <v-col col="12" md="10" class="">
                    <p class="font-Poppins text-xl md:text-5xl mb-6 font-weight-bold text-[#ff7b02]">
                      <v-icon class="pa-1 pa-md-3">
                        <v-img :lazy-src="`/static/images/${item.image}`" :src="`/static/images/${item.image}`"></v-img>
                      </v-icon>
                      {{ item.title }}
                    </p>
                    <p class="font-Overpass text-gray-500 text-xs font-weight-medium md:text-lg">
                      {{ item.text }}
                    </p>
                    <v-btn
                      color="orange"
                      density="comfortable"
                      variant="flat"
                      :to="item.link"
                      class="mt-4 responsive-btn"
                    >
                      Learn More
                      <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-card>
          </v-container>
        </template>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const emits = defineEmits(['toggleDisabled']);
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
<style>
.partner-logo {
  width: 50%; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
}
@media (max-width: 768px) {
  .partner-logo {
    width: 50%;
  }
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
  transform: scale(0.7);
  transition: transform 0.3s ease;
}

.return-btn {
  position: absolute;
  top: -25px;
  left: 10%;
  bottom: 0%;
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: white !important;
  color: #ff7b02 !important;
  border: 3px #ff7b02 solid !important;
  z-index: 2;
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
