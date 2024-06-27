<template>
  <div class="h-full">
    <div class="h-4/5">
      <v-carousel
        v-model="currentSlide"
        hide-delimiter-background
        hide-delimiters
        progress="#ff7b02"
        :show-arrows="false"
        class="h-100"
      >
        <v-sheet class="h-full slide-animation">
          <v-carousel-item v-for="(slide, index) in slides" :key="slides" :value="index">
            <div class="d-flex fill-height justify-center align-center">
              <!-- Intro -->
              <section class="text-center ma-3" v-if="index === 0">
                <v-container>
                  <v-row class="d-flex justify-center align-center">
                    <v-col cols="12">
                      <p class="text-h3 text-sm-h2 text-md-h1 font-weight-bold underline decoration-[#ff7b02]">
                        {{ slide.title }}
                      </p>
                      <p class="text-h4 text-md-h3 font-weight-light italic ma-10" :style="{ color: '#ff7b02' }">
                        {{ slide.subtitle }}
                      </p>
                    </v-col>
                  </v-row>
                </v-container>
              </section>
              <!-- Contact -->
              <section class="text-center" v-else-if="index === slides.length - 1">
                <div class="w-100 pa-0">
                  <v-row class="d-flex justify-center align-center">
                    <v-col cols="8" class="d-flex flex-column justify-center align-center text-section">
                      <p class="text-h3 text-sm-h2 text-md-h1 font-weight-bold mb-4 underline decoration-[#ff7b02]">
                        How can we <span class="custom-underline"> make it happen </span> for you?
                      </p>
                      <v-btn color="orange" variant="flat" to="/contact" class="mt-10">
                        Contact Us
                        <v-icon right class="ml-2">mdi-email</v-icon>
                      </v-btn>
                    </v-col>
                  </v-row>
                </div>
              </section>
              <!-- Information -->
              <section class="flex justify-center align-center text-center pa-0 pa-md-12 h-100" v-else>
                <v-container>
                  <v-row class="d-flex justify-center align-center">
                    <v-col cols="12" md="7" class="d-flex flex-column justify-center text-section">
                      <div v-for="(paragraph, pIndex) in slide.body" :key="pIndex" class="paragraph text-start">
                        <br />
                        <p class="text-xs md:text-sm xl:text-md 2xl:text-lg/8 mx-8 font-Poppins font-weight-light">
                          {{ paragraph }}
                        </p>
                      </div>
                    </v-col>
                    <v-col cols="12" md="5" class="d-flex justify-center align-center image-section">
                      <v-img
                        :src="`/static/images/${slide.image}`"
                        alt="Service Image"
                        height="400"
                        class="service-image hidden-sm-and-down"
                      />
                    </v-col>
                  </v-row>
                </v-container>
              </section>
            </div>
          </v-carousel-item>
        </v-sheet>
      </v-carousel>
    </div>
    <div class="h-1/5 flex justify-end align-start pa-5 w-100">
      <div class="flex justify-around align-center w-3/6 md:w-1/6">
        <v-btn icon class="carousel-arrow" @click="currentSlide = Math.max(currentSlide - 1, 0)">
          <v-icon size="large">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn icon class="carousel-arrow" @click="currentSlide = Math.min(currentSlide + 1, slides.length - 1)">
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { serviceData } from '../../data/content/services.content';

const route = useRoute();
const serviceDetails = ref({});
const slides = ref([
  {
    title: '',
    subtitle: '',
    body: [],
    image: '',
  },
  {
    title: '',
    subtitle: '',
    body: [],
    image: '',
  },
  {
    title: '',
    subtitle: '',
    body: [],
    image: '',
  },
]);

const currentSlide = ref(0);

onMounted(() => {
  serviceDetails.value = serviceData.find((service) => service.link === route.params.service);
  if (serviceDetails.value) {
    slides.value[0] = {
      title: serviceDetails.value.title,
      subtitle: serviceDetails.value.subtitle,
      body: [],
      image: '',
    };
    slides.value[1] = {
      title: '',
      subtitle: '',
      body: serviceDetails.value.body,
      image: serviceDetails.value.img,
    };
    useHead({
      title: serviceDetails.value.title,
    });
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
});
</script>

<style>
.carousel-arrow {
  background-color: white !important;
  color: #ff7b02 !important;
  border: 3px solid !important;
}
</style>
