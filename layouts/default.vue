<template>
  <v-app class="app-wrapper">
    <Popup />
    <div>
      <NavBar />
    </div>
    <v-main>
      <div class="content pa-2">
        <slot />
      </div>
    </v-main>


    <div class="mt-2 footer">
      <Footer />
    </div>
  </v-app>
</template>

<script setup>
import NavBar from '/components/NavBar/index.vue';
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100%; /* Full view height */
}

.content {
  flex-grow: 1; /* Expands to fill available space */
  margin-bottom: 20px;
}

.footer {
  flex-shrink: 0;
}
</style>
