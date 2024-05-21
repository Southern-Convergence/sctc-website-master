<template>
  <v-app>
    <Popup />
    <NavBar />
    <slot />
  </v-app>
</template>

<script setup>
import NavBar from '/components/NavBar.vue';
</script>
