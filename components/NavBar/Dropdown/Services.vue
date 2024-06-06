import { NuxtLink } from '#build/components';

<template v-slot:default="{ isActive }">
  <v-card title="Services" style="border-radius: 0px" class="max-h-90 pb-4 pl-5 font-Poppins">
    <v-list lines="one" class="max-h-100 overflow-y-auto">
      <NuxtLink
        v-for="service in props.props"
        active-class="nuxt-link-active"
        :to="`${$route.params === 'service' ? '' : '/services'}/${service.link}`"
        :key="service.title"
      >
        <v-list-item :title="service.title" class="text-hover" :subtitle="service.subtitle"></v-list-item>
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
