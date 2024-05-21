<template>
  <v-app>
    <Popup />
    <NavBar />
    <slot />
    <Footer />
  </v-app>
</template>

<script setup>
import NavBar from '/components/NavBar.vue';
</script>
