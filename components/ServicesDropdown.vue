import { NuxtLink } from '#build/components';

<template v-slot:default="{ isActive }">
  <v-card title="Services" style="border-radius: 0px" class="max-h-72 pb-4 pl-5 font-Poppins">
    <!-- can only fit up to 4 items, trying to fix it could take time -->
    <v-list lines="one">
      <NuxtLink v-for="service in services" :to="service.link">
        <v-list-item :title="service.title" :subtitle="service.subtitle" class="text-hover"></v-list-item>
      </NuxtLink>
    </v-list>
  </v-card>
</template>

<script setup>
const services = ref([
  {
    title: 'Custom Software Development',
    subtitle: 'optimizing software solutions tailored to unique business and organizational objectives and processes',
    link: '/ServiceCSD',
  },
  {
    title: 'Consulting Service',
    subtitle: 'advanced software development solutions powered by Fastly and DataStax',
    link: '/ServiceCS',
  },

  // more links to pages could be added here
]);
</script>
