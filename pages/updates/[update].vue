<template>
  <!-- back button -->
  <div class="flex items-center mx-4 my-6 slide-animation">
    <div @click="goToPrev" class="flex hover:text-[#ff7b02] cursor-pointer items-center">
      <v-icon size="26"> mdi-chevron-left </v-icon>
      <span class="font-Poppins font-medium text-sm md:text-base whitespace-normal">Back</span>
    </div>
  </div>

  <div class="slide-animation">
    <div class="flex mx-2">
      <!-- banner images for desktop view 
       no banner for mobile view-->
      <v-col cols="4" v-for="image in banner" class="hidden-sm-and-down mb-4" style="padding: 0px !important">
        <v-img cover :src="`/static/images/updates/${image}`" :aspect-ratio="50 / 18" />
      </v-col>
    </div>

    <div>
      <!-- container that contains the title and the subtitle (date and location) -->
      <div class="mt-0 mb-4 m-4 md:m-64">
        <!-- title -->
        <h1 class="font-Roboto font-semibold text-lg md:text-xl xl:text-2xl 2xl:text-4xl custom-underline mb-4">
          {{ title }}
        </h1>
        <!-- subtitle -->
        <div class="flex">
          <div v-for="info in subtitle" class="flex mr-6 text-xs md:text-sm">
            <v-icon class="mr-2 text-[#ff7b02]">{{ info.icon }}</v-icon>
            <p class="text-gray-500 font-Overpass">{{ info.content }}</p>
          </div>
        </div>
      </div>

      <!-- carousel for the content of the article -->
      <!-- this structure only works if the slides contain the following:
            slide 1 contains:
             - no title;
             - 1 paragraph short description 
             - 1 video
            
             slide 2 contains:
             - 1 title;
             - 2 paragraphs short description 
             - no video/visuals

            slide 3 contains:
             - 1 title;
             - 1 paragraph short description 
             - 1 visual

            slide 4 contains:
             - 2 title;
             - 2 paragraphs short description 
             - no video/visuals
            
      2 courses of action:
      - change the struture into a much more scaling structure
      - future articles must have the same data structure -->
      <v-carousel hide-delimiters :continuous="false" class="h-auto">
        <v-carousel-item v-for="(slide, index) in slides" :key="index" class="my-0 m-10 lg:m-64">
          <!-- 
            slide 1 contains:
            no title;
            1 paragraph short description 
            1 video
          -->
          <section v-if="index == 0" class="flex">
            <v-col class="">
              <!-- video display for mobile view -->
              <video controls autoplay muted class="display-visuals hidden-md-and-up mb-6">
                <source :src="`/static/images/updates/${slide.visual}`" type="video/mp4" />
              </video>
              <p
                v-for="paragraph in slide.description"
                class="text-[0.70em] md:text-sm xl:text-md 2xl:text-lg/8 mx-8 font-Poppins font-weight-light"
              >
                {{ paragraph }}
              </p>
            </v-col>
            <!-- video display for desktop view -->
            <v-col class="hidden-sm-and-down">
              <video controls autoplay muted class="display-visuals">
                <source :src="`/static/images/updates/${slide.visual}`" type="video/mp4" />
              </video>
            </v-col>
          </section>

          <!-- 
            slide 4 contains:
            2 title;
            2 paragraphs short description 
            no video/visuals
          -->
          <section v-else-if="index == 3" v-for="(title, x) in slide.title" :key="x" class="mb-6">
            <h3 class="font-Poppins font-medium text-sm md:text-base xl:text-lg 2xl:text-xl">
              {{ title }}
            </h3>
            <p class="text-[0.70em] md:text-sm xl:text-md 2xl:text-lg/8 my-2 mx-8 font-Poppins font-weight-light">
              {{ slide.description[x] }}
            </p>
          </section>

          <!-- 
            slide 2 contains:
            1 title;
            2 paragraphs short description 
            no video/visuals

            slide 3 contains:
            1 title;
            1 paragraph short description 
            1 visual
          -->
          <section v-else class="flex">
            <v-col>
              <v-img
                v-if="index == 2"
                cover
                :src="`/static/images/updates/${slide.visual}`"
                class="hidden-md-and-up display-visuals mb-6"
              />
              <h3
                v-for="title in slide.title"
                class="font-Poppins font-medium text-sm md:text-base xl:text-lg 2xl:text-xl"
              >
                {{ title }}
              </h3>
              <p
                v-for="paragraph in slide.description"
                class="text-[0.70em] md:text-sm xl:text-md 2xl:text-lg/8 my-2 mx-8 font-Poppins font-weight-light"
              >
                {{ paragraph }}
              </p>
            </v-col>
            <v-col v-if="index == 2" class="hidden-sm-and-down">
              <v-img v-if="index == 2" cover :src="`/static/images/updates/${slide.visual}`" class="display-visuals" />
            </v-col>
          </section>
        </v-carousel-item>

        <!-- Custom Arrows -->
        <template v-slot:prev="{ props }">
          <v-btn icon class="carousel-arrow left" variant="elevated" @click="props.onClick">
            <v-icon size="large">mdi-chevron-left</v-icon>
          </v-btn>
        </template>
        <template v-slot:next="{ props }">
          <v-btn icon class="carousel-arrow right" variant="elevated" @click="props.onClick">
            <v-icon size="large">mdi-chevron-right</v-icon>
          </v-btn>
        </template>
      </v-carousel>
    </div>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { updatesData } from '../../../data/content/updates/updates.content.ts';
import { updatesGallery } from '../../../data/content/updates/updates.gallery.ts';

const router = useRouter();
const route = useRoute();
const updateDetails = ref({});
const updatesBanner = ref([]);
const title = ref('');
const banner = ref([]);
const subtitle = ref([]);
const slides = ref(Array.from(Array(4), () => ({
  title: [],
  description: [],
  visual: '',
})));

onMounted(() => {
  updateDetails.value = updatesData.find((update) => update.link === route.params.update);
  updatesBanner.value = updatesGallery.find((gallery) => gallery.title === updateDetails.value.title);
  if (updateDetails.value) {
    title.value = updateDetails.value.title;
    banner.value = updatesBanner.value.images.slice(0, 3);
    subtitle.value = updateDetails.value.subtitle;
    slides.value[0] = {
      title: '',
      description: updateDetails.value.content.descriptions[0],
      visual: updateDetails.value.video,
    };
    slides.value[1] = {
      title: updateDetails.value.content.titles[1],
      description: updateDetails.value.content.descriptions[1],
      visual: '',
    };
    slides.value[2] = {
      title: updateDetails.value.content.titles[2],
      description: updateDetails.value.content.descriptions[2],
      visual: updatesBanner.value.images[0],
    };
    slides.value[3] = {
      title: updateDetails.value.content.titles[3],
      description: updateDetails.value.content.descriptions[3],
      visual: '',
    };
    console.log(slides.length);
    console.log(slides);
    console.log("mimimimimi");
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
  useHead({
    title: title.value,
  });

});

console.log(slides.length);

const goToPrev = () => {
  router.go(-1);
};
</script>

<style scoped>
.custom-underline {
  text-decoration: underline;
  text-decoration-color: #ff7b02;
}
.display-visuals {
  margin: auto;
  width: 75%;
  object-fit: cover;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3) !important;
  border-radius: 5px !important;
  aspect-ratio: 16 / 9;
}

.carousel-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: white !important;
  color: #ff7b02 !important;
  border: 3px solid !important;
}

.carousel-arrow.left {
  left: 13px;
}

.carousel-arrow.right {
  right: 13px;
}
</style>
