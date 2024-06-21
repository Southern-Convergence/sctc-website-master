<template>
  <div class="flex items-center mx-4 my-6 slide-animation">
    <div @click="goToPrev" class="flex hover:text-[#ff7b02] cursor-pointer items-center">
      <v-icon size="26"> mdi-chevron-left </v-icon>
      <span class="font-Poppins font-medium text-base md:text-xl whitespace-normal">Back</span>
    </div>
  </div>
  <div class="flex">
    <!-- banner images for desktop view -->
    <v-col cols="4" v-for="image in banner" class="hidden-sm-and-down" style="padding: 0px !important">
      <v-img cover :src="`/static/images/${image}`" :aspect-ratio="50 / 18" />
    </v-col>

    <!-- banner images for desktop view -->
    <v-col cols="4" v-for="image in banner" class="hidden-md-and-up" style="padding: 0px !important">
      <v-img cover :src="`/static/images/${image}`" :aspect-ratio="50 / 30" />
    </v-col>
  </div>
  <div class="m-4">
    <p>
      {{ title }}
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { updatesData } from '../../data/content/updates.content.ts';

const router = useRouter();
const route = useRoute();
const updateDetails = ref({});
const title = ref('');
const banner = ref([]);

onMounted(() => {
  updateDetails.value = updatesData.find((update) => update.link === route.params.update);
  if (updateDetails.value) {
    title.value = updateDetails.value.title;
    banner.value = updateDetails.value.bannerImages;
  } else {
    throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
  }
});

const goToPrev = () => {
  router.go(-1);
};
</script>
