<template>
  <!-- Back Button -->
  <div
    class="relative py-md-2 md:p-8"
    v-bind:style="{
      backgroundImage: `url(${`/static/images/milestones/${milestoneDetails.bannerImage}`})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '20%',
      width: 'auto',
    }"
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black opacity-0"></div>
    <div class="flex align-center h-100 mx-2 slide-animation">
      <v-btn icon class="arrow" @click="goToPrev">
        <v-icon size="large">mdi-chevron-left</v-icon>
      </v-btn>
    </div>
    <br />
  </div>

  <!-- Carousel -->
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
          <v-carousel-item v-for="(slide, index) in milestoneDetails?.pages" :key="slide" :value="index">
            <!-- TODO Page 1 -->
            <template v-if="index == 0">
              <v-row class="h-100 justify-center align-center">
                <v-col cols="12" md="5" class="borde-xl">
                  <div class="px-8 pt-5">
                    <h2
                      class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                    >
                      {{ milestoneDetails.title }}
                    </h2>
                    <div class="flex items-center mb-4">
                      <v-icon size="18" class="mr-2" color="#ff7b02">mdi-calendar</v-icon>
                      <span class="text-[0.70em] md:text-sm xl:text-md 2xl:text-lg/8">{{ milestoneDetails.date }}</span>
                      <v-icon size="18" class="mx-2" color="#ff7b02">mdi-map-marker</v-icon>
                      <span class="text-[0.70em] md:text-sm xl:text-md 2xl:text-lg/8">{{
                        milestoneDetails.location
                      }}</span>
                    </div>
                    <div
                      class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                    >
                      {{ slide.content }}
                    </div>
                  </div>
                </v-col>
                <v-col cols="11" md="4" class="borde-xl">
                  <video controls autoplay muted class="display-visuals w-75 w-md-100 mx-auto">
                    <source :src="`/static/images/milestones/${slide.asset}`" type="video/mp4" />
                  </video>
                </v-col>
              </v-row>
            </template>

            <!-- TODO Page 2 -->
            <template v-if="index == 1">
              <v-row class="h-100 justify-center align-center">
                <v-col cols="12" md="10" class="borde-xl">
                  <div class="px-8 pt-5">
                    <h2
                      class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                    >
                      {{ slide.header }}
                    </h2>

                    <div
                      class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                    >
                      <template v-for="text in slide.content">
                        <p>{{ text }}</p>
                        <br />
                      </template>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </template>

            <!-- TODO Page 3 -->
            <template v-if="index == 2">
              <v-row class="h-100 justify-center align-center">
                <template v-if="typeof slide.content === 'string'">
                  <v-col cols="12" md="5" class="borde-xl">
                    <div class="px-8 pt-6">
                      <h2
                        class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                      >
                        {{ slide.header }}
                      </h2>
                      <div
                        class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                      >
                        {{ slide.content }}
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-img
                      :src="`/static/images/milestones/${slide.asset}`"
                      alt="Milestone image"
                      class="mx-auto w-[75%] rounded-lg"
                    ></v-img>
                  </v-col>
                </template>
                <template v-else>
                  <v-col cols="12" md="10" class="borde-xl">
                    <div class="px-8 pt-6">
                      <h2
                        class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                      >
                        {{ slide.header }}
                      </h2>
                      <template v-for="item in slide.content">
                        <div
                          class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-semibold"
                        >
                          {{ item.header }}
                        </div>
                        <div
                          class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                        >
                          {{ item.body }}
                        </div>
                        <br />
                      </template>
                    </div>
                  </v-col>
                </template>
              </v-row>
            </template>

            <!-- TODO Page 4 -->
            <template v-if="index == 3">
              <v-row class="h-100 justify-center align-center">
                <template v-if="typeof slide.content === 'string'">
                  <v-col cols="12" md="5" class="borde-xl">
                    <div class="px-8 pt-6">
                      <h2
                        class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                      >
                        {{ slide.header }}
                      </h2>
                      <div
                        class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                      >
                        {{ slide.content }}
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="12" md="4">
                    <v-img
                      :src="`/static/images/milestones/${slide.asset}`"
                      alt="Milestone image"
                      class="mx-auto w-[75%] rounded-lg"
                    ></v-img>
                  </v-col>
                </template>
                <template v-else>
                  <v-col cols="12" md="10" class="borde-xl">
                    <template v-for="item in slide.content">
                      <div class="px-8 pt-5">
                        <h2
                          class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                        >
                          {{ item.header }}
                        </h2>

                        <div
                          class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                        >
                          {{ item.body }}
                        </div>
                      </div>
                    </template>
                  </v-col>
                </template>
              </v-row>
            </template>

            <!-- Page 5 -->
            <template v-if="index == 4">
              <v-row class="h-100 justify-center align-center">
                <v-col cols="12" md="10" class="borde-xl">
                  <template v-for="item in slide.content">
                    <div class="px-8 pt-5">
                      <h2
                        class="text-lg leading-6 md:leading-loose font-semibold md:text-xl xl:text-2xl 2xl:text-3xl font-Poppins mb-2 text-[#ff7b02]"
                      >
                        {{ item.header }}
                      </h2>

                      <div
                        class="text-[0.70em] leading-4 md:leading-loose md:text-sm xl:text-md 2xl:text-lg/8 font-Poppins font-weight-light text-justify"
                      >
                        {{ item.body }}
                      </div>
                    </div>
                  </template>
                </v-col>
              </v-row>
            </template>
          </v-carousel-item>
        </v-sheet>
      </v-carousel>
    </div>
    <div class="h-1/5 flex justify-end align-start pa-5 w-100">
      <div class="flex justify-around align-center w-3/6 md:w-1/6">
        <v-btn icon class="arrow" @click="currentSlide = Math.max(currentSlide - 1, 0)">
          <v-icon size="large">mdi-chevron-left</v-icon>
        </v-btn>
        <v-btn
          icon
          class="arrow"
          @click="currentSlide = Math.min(currentSlide + 1, milestoneDetails?.pages.length - 1)"
        >
          <v-icon size="large">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
import { milestonesData } from '../../../data/content/milestones.content.ts';
import { useRoute, useRouter } from 'vue-router';

const router = useRouter();
const route = useRoute();
const milestoneDetails = ref({});
const currentSlide = ref(0);

onMounted(() => {
  milestoneDetails.value = milestonesData.find((milestone) => milestone.id === route.params.milestone);
  if (!milestoneDetails.value) {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
  useHead({
    title: milestoneDetails.value.title,
  });
});

const goToPrev = () => {
  router.go(-1);
};
</script>
<style scoped>
.arrow {
  background-color: white !important;
  color: #ff7b02 !important;
}
.display-visuals {
  object-fit: cover;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3) !important;
  border-radius: 5px !important;
  aspect-ratio: 16 / 9;
}
</style>
