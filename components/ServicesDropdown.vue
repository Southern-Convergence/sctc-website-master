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
    title: 'Service 1',
    subtitle: 'Service 1 Subtitle',
    link: '/ServiceCSD',
  },
  {
    title: 'Service 2',
    subtitle: 'Service 2 Subtitle',
    link: '/about',
  },
  {
    title: 'Service 2',
    subtitle: 'Service 2 Subtitle',
    link: '/item1',
  },
  {
    title: 'Service 2',
    subtitle: 'Service 2 Subtitle',
    link: '/item1',
  },
]);
</script>
