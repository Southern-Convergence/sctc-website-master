<template>
  <div
    id="CarouselContainer"
    :class="{ baseCarouselContainer: disabled, closeCarousel: !disabled }"
    class="networkBG w-full h-full"
  >
    <v-btn @click="emits('toggleDisabled')" variant="flat" icon="mdi-arrow-down" class="return-btn"> </v-btn>
    <v-carousel hide-delimiter-background hide-delimiters touch.boolean="true" height="100%" color="#ff7b02">
      <template v-slot:prev="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-arrow-left"> </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-arrow-right"> </v-btn>
      </template>
      <v-carousel-item v-for="item in carousel">
        <template v-if="item.tag === 'Partners'">
          <div class="md:mx-24 d-flex align-center justify-center w-75 mx-auto h-75">
            <div class="text-center md:p-12 m-auto">
              <p class="font-Poppins text-xl md:text-5xl m-6 font-bold text-[#ff7b02]">
                {{ item.title }}
              </p>
              <p class="font-Overpass text-gray-500 text-sm font-semibold md:text-xl">{{ item.text }}</p>
              <div class="d-flex flex-column flex-md-row justify-center align-center mt-8">
                <template v-for="(image, index) in item.images" :key="index">
                  <v-img
                    :lazy-src="`/static/images/${image}`"
                    :src="`/static/images/${image}`"
                    class="partner-logo mx-auto my-2 mx-md-2 zoom-on-hover scale-75 md:scale-50 cursor-pointer"
                    @click="redirectToLink(item.links[index])"
                  ></v-img>
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <v-container class="pa-4">
            <v-card class="mx-auto" max-width="1200" flat color="transparent">
              <v-row align="center" justify="center">
                <v-col cols="12" md="8">
                  <div class="text-left p-4 md:p-12">
                    <p class="font-Poppins text-xl md:text-5xl my-6 font-weight-bold text-[#ff7b02]">
                      {{ item.title }}
                    </p>
                    <p class="font-Overpass text-gray-500 text-xs font-weight-medium md:text-lg">
                      {{ item.text }}
                    </p>
                    <v-btn color="orange" density="comfortable" variant="flat" :to="item.link" class="mt-4">
                      Learn More
                      <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                    </v-btn>
                  </div>
                </v-col>
                <v-col cols="12" md="4" class="d-flex">
                  <v-img
                    class="hidden-sm-and-down"
                    :lazy-src="`/static/images/${item.image}`"
                    :src="`/static/images/${item.image}`"
                    contain
                    height="400"
                  ></v-img>
                </v-col>
              </v-row>
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
  width: 50px;
  height: 50px;
  text-align: center;
  background-color: #ff6b02 !important;
  color: white !important;
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
