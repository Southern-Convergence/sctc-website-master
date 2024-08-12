<template>
  <div
    class="flex h-screen text-black justify-center align-center gap-12 flex-col font-semibold bg-white font-Poppins text-4xl lg:text-5xl"
  >
    <div class="flex gap-4">
      <img src="/assets/images/logo.png" :width="80"/>
      <p>Page not found.</p>
    </div>
    <v-btn color="orange" variant="flat" @click="handleError()"> Back to Home </v-btn>
  </div>
</template>
<script setup>
const props = defineProps({
  error: Object,
  required: true,
});

const handleError = () => clearError({ redirect: '/' });
</script>
