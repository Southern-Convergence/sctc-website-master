<template>
  <v-footer class="absolute-footer bg-black hidden-sm-and-down">
    <v-row align="center" justify="center">
      <v-col class="text-center pa-0 ma-0" cols="12">
        <div>
          <nuxt-link :to="item.link" v-for="item in icons" :key="item.icon">
            <v-btn :icon="item.icon" class="footer-item-size ma-0 pa-0" variant="text"></v-btn>
          </nuxt-link>
          <span class="footer-item-size"
            >{{ new Date().getFullYear() }} — <strong>Southern Convergence Technologies</strong></span
          >
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { ref } from 'vue';

const icons = ref([
  {
    icon: 'mdi-facebook',
    link: 'https://www.facebook.com/southernconvergence/',
  },
  {
    icon: 'mdi-linkedin',
    link: 'https://ph.linkedin.com/company/southern-convergence-technologies',
  },
]);
</script>

<style scoped>
.absolute-footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 1000; /* Ensure it is above other content */
}

.footer-item-size-base {
  font-size: 11px;
}

.footer-item-size {
  font-size: 14px;
}
</style>
