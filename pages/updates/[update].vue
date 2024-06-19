<template>
  <div class="flex items-center mx-4 my-6 slide-animation">
    <v-icon @click="goToPrev" class="hover:text-[#ff7b02]" size="28"> mdi-chevron-left </v-icon>
  </div>
  <v-row class="flex flex-col flex-wrap">
        <v-img v-for="image in banner" :aspect-ratio="16/9" :src="`/static/images/${image}`" />
  </v-row>

  <p>
    {{ title }}
  </p>
</template>
\

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
