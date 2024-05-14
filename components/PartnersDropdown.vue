<template v-slot:default="{ isActive }">
  <v-card
    title="Partners"
    style="border-radius: 0px"
    class="max-h-72 pb-4 pl-5 font-Poppins"
  >
    <!-- can only fit up to 4 items, trying to fix it could take time -->
    <v-list lines="one">
      <v-list-item
        v-for="partner in partners"
        :title="partner.title"
        :subtitle="partner.subtitle"
        class="text-hover"
      ></v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const partners = ref([
  {
    title: "DataStax",
    subtitle: "DataStax Subtitle",
  },
  {
    title: "Fastly",
    subtitle: "Fastly Subtitle",
  },
]);
</script>
