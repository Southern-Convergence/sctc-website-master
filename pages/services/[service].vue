<template>
  <v-container class="service-page fill-height d-flex flex-column justify-center align-center pa-0">
    <div class="slide-animation">
      <!-- Carousel -->
      <v-carousel v-model="currentSlide" hide-delimiter-background hide-delimiters class="h-100">
        <!-- Slides -->
        <v-carousel-item v-for="(slide, index) in slides" :key="index">
          <section class="text-center pa-12" v-if="index === 0">
            <v-container class="w-100 pa-0 px-10">
              <v-row>
                <v-col>
                  <h1 class="text-h4 text-sm-h2 text-md-h1 font-weight-bold mb-4 custom-underline">
                    {{ slide.title }}
                  </h1>
                  <h2
                    class="text-h6 text-sm-h4 text-md-h3 font-weight-light italic ma-10"
                    :style="{ color: '#ff7b02' }"
                  >
                    "{{ slide.subtitle }}"
                  </h2>
                </v-col>
              </v-row>
            </v-container>
          </section>
          <section class="text-center pa-12" v-else-if="index === slides.length - 1">
            <v-container class="w-100 pa-0">
              <v-row class="d-flex justify-center align-center">
                <v-col cols="12" md="8" class="d-flex flex-column justify-center align-center text-section">
                  <h1 class="text-h3 text-sm-h2 text-md-h1 font-weight-bold mb-4">
                    How can we <span class="custom-underline"> make it happen </span> for you?
                  </h1>

                  <v-btn color="orange" density="comfortable" variant="flat" to="/contact" class="mt-4">
                    Contact Us
                    <v-icon right class="ml-2">mdi-email</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </section>
          <section class="text-center pa-4 pa-md-12" v-else>
            <v-container class="w-100 md:px-10">
              <v-row class="d-flex justify-center align-center">
                <v-col cols="12" md="7" class="d-flex flex-column justify-center text-section">
                  <div v-for="(paragraph, pIndex) in slide.body" :key="pIndex" class="paragraph text-start">
                    <p class="text-xs md:text-sm xl:text-md 2xl:text-lg mx-8 font-Poppins font-weight-light">
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
        </v-carousel-item>

        <!-- Custom Arrows -->
        <template v-slot:prev>
          <v-btn v-if="currentSlide > 0" icon class="carousel-arrow left" variant="flat" @click="currentSlide--">
            <v-icon size="large">mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next>
          <v-btn
            v-if="currentSlide < slides.length - 1"
            icon
            class="carousel-arrow right"
            variant="flat"
            @click="currentSlide++"
          >
            <v-icon size="large">mdi-chevron-right</v-icon>
          </v-btn>
        </template>
      </v-carousel>
    </div>
  </v-container>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { serviceItems } from '../../data/services-data';

const route = useRoute();
const serviceDetails = ref({});
const currentSlide = ref(0);

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

onMounted(() => {
  serviceDetails.value = serviceItems.find((service) => service.link === route.params.service);
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
  }
  useHead({
    title: slides.value[0].title,
  });
});
</script>

<style scoped>
.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff7b02;
}

.service-page {
  font-family: 'Poppins', sans-serif;
  position: relative;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  color: #ff7b02;
}

.carousel-arrow.left {
  left: 16px;
}

.carousel-arrow.right {
  right: 16px;
}

.progress-bar {
  width: 100%;
  position: absolute;
  top: 0;
}

.service-image {
  max-width: 100%;
  height: auto;
}

.paragraph {
  margin-bottom: 1rem;
  text-align: start;
}

.active-delimiter .v-icon {
  color: #ff7b02 !important;
}

.v-btn.primary {
  background-color: #ff7b02;
  color: #fff;
}
</style>
