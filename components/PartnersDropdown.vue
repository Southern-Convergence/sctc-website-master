<template>
  <v-card title="Partners" style="border-radius: 0px" class="max-h-72 pb-4 pl-5 font-Poppins">
    <!-- can only fit up to 4 items, trying to fix it could take time -->
    <v-list lines="one">
      <NuxtLink
        v-for="partner in partners"
        active-class="nuxt-link-active"
        :to="`${$route.params === 'partners' ? '' : '/partners'}/${partner.link}`"
        :key="partner.title"
      >
        <!-- <v-list-item :title="partner.title" class="text-hover"></v-list-item> -->
        <p class="text-hover pl-4 py-1">{{ partner.title }}</p>
      </NuxtLink>
    </v-list>
  </v-card>
</template>

<script setup>
const partners = ref([
  {
    title: 'DataStax',
    subtitle: 'DataStax Subtitle',
    link: 'datastax',
  },
  {
    title: 'Fastly',
    subtitle: 'Fastly Subtitle',
    link: 'fastly',
  },
]);
</script>

<style>
.nuxt-link-active {
  color: #ff7b02;
}
</style>
