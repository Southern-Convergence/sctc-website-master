<template v-slot:default="{ isActive }">
  <v-card
    title="Services"
    style="border-radius: 0px"
    class="max-h-72 pb-4 pl-5 font-Poppins"
  >
    <!-- can only fit up to 4 items, trying to fix it could take time -->
    <v-list lines="one">
      <v-list-item
        v-for="service in services"
        :title="service.title"
        :subtitle="service.subtitle"
        class="text-hover"
      ></v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
const services = ref([
  {
    title: "Service 1",
    subtitle: "Service 1 Subtitle",
  },
  {
    title: "Service 2",
    subtitle: "Service 2 Subtitle",
  },
  {
    title: "Service 2",
    subtitle: "Service 2 Subtitle",
  },
  {
    title: "Service 2",
    subtitle: "Service 2 Subtitle",
  },
]);
</script>
