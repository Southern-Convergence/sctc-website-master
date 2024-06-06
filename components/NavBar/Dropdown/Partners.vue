<template v-slot:default="{ isActive }">
  <v-card title="Partners" style="border-radius: 0px" class="max-h-72 pb-4 pl-5 font-Poppins">
    <v-list lines="one">
      <NuxtLink v-for="partner in props.props" :to="partner.link" active-class="nuxt-link-active">
        <v-list-item :title="partner.title" :subtitle="partner.subtitle" class="text-hover"></v-list-item>
      </NuxtLink>
    </v-list>
  </v-card>
</template>

<script setup>
const props = defineProps({
  props: {
    type: Array,
    default: () => [],
  },
});
</script>
<style>
.nuxt-link-active {
  color: #ff7b02;
}
</style>
