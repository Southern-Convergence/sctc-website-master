<template>
  <div id="CarouselContainer" :class="{ baseCarouselContainer: disabled, closeCarousel: !disabled }">
    <v-carousel
      hide-delimiter-background
      delimiter-icon="mdi-circle"
      touch.boolean="true"
      height="100%"
      color="#ff7b02"
    >
      <template v-slot:prev="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-arrow-left"> </v-btn>
      </template>
      <template v-slot:next="{ props }">
        <v-btn class="carouselBtn" variant="flat" @click="props.onClick" icon="mdi-arrow-right"> </v-btn>
      </template>
      <v-carousel-item v-for="item in carousel">
        <template v-if="item.tag === 'Partners'">
          <div
            class="md:mx-24 d-flex align-center justify-center"
            style="width: 75%; margin-left: auto !important; margin-right: auto !important; height: 100%"
          >
            <div class="text-center p-12 m-auto">
              <p class="font-Poppins text-xl md:text-4xl m-6">
                {{ item.title }}
              </p>
              <p class="font-Overpass text-gray-500 text-sm font-semibold md:text-xl">{{ item.text }}</p>
              <div class="d-flex flex-column flex-md-row justify-center mt-8">
                <template v-for="(image, index) in item.images" :key="index">
                  <v-img
                    :src="`/static/images/${image}`"
                    class="partner-logo mx-auto my-2 mx-md-2 zoom-on-hover cursor-pointer"
                    loading="lazy"
                    @click="redirectToLink(item.links[index])"
                  ></v-img>
                </template>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="md:mx-24 d-flex align-center justify-center"
            style="width: 75%; margin-left: auto !important; margin-right: auto !important; height: 100%"
          >
            <v-row align="center" justify="center">
              <v-col cols="12" md="8">
                <div class="text-left p-12 m-auto">
                  <p class="font-Poppins text-xl md:text-4xl my-6">
                    {{ item.title }}
                  </p>
                  <p class="font-Overpass text-gray-500 text-sm font-semibold md:text-xl">
                    {{ item.text }}
                    <br /><br />
                    <nuxt-link :to="item.link">
                      <v-btn color="orange" dark variant="text">
                        Learn More
                        <v-icon right class="ml-2">mdi-arrow-right</v-icon>
                      </v-btn>
                    </nuxt-link>
                  </p>
                </div>
              </v-col>
              <v-col cols="12" md="4" class="d-flex" align-self="stretch">
                <v-img class="hidden-sm-and-down" :src="`/static/images/${item.image}`"></v-img>
              </v-col>
            </v-row>
          </div>
        </template>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
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
  width: 100%; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
}
@media (min-width: 768px) {
  .partner-logo {
    width: 50%;
  }
}
.baseCarouselContainer {
  display: block;
  background:
    radial-gradient(80% 20% at 50% -5%, #ffcd9388 40%, rgba(255, 255, 255, 0.127) 100%),
    url(/assets/images/networkbg.png) no-repeat fixed;
  background-color: white;
  position: absolute;
  bottom: 0%;
  width: 100%;
  height: 70%;
  color: black;
  animation: carouselOpen 0.5s ease;
}

.carouselBtn {
  background-color: white !important;
  color: #ff7b02 !important;
}

.closeCarousel {
  display: none;
}

.zoom-on-hover:hover {
  transform: scale(1.1); /* Adjust the scale factor as needed */
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

@keyframes carouselOpen {
  from {
    height: 0%;
  }

  to {
    height: 70%;
  }
}
</style>
