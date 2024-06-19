<template>
  <div class="p-2 md:p-8 lg:p-16">
    <div class="flex items-center mx-2 mt-6 slide-animation">
      <v-icon @click="goToPrev" class="hover:text-[#ff7b02]" size="36"> mdi-chevron-left </v-icon>
      <p class="font-semibold text-2xl md:text-5xl text-[#FF7B02] ml-5 font-Roboto">
        <slot name="header" />
      </p>
    </div>
    <br />
    <v-divider class="border-opacity-100 hidden-sm-and-down"></v-divider>
    <div class="slide-animation">
      <v-row class="justify-center mt-md-5">
        <slot />
      </v-row>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const goToPrev = () => {
  router.go(-1);
};
</script>
