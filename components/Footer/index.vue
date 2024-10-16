<template>
  <v-footer class="footer bg-black hidden-sm-and-down">
    <v-row align="center" justify="center">
      <v-col class="text-center pa-0 ma-0" cols="12">
        <div>
          <v-btn
            v-for="item in footerData"
            :key="item.icon"
            :icon="item.icon"
            class="footer-item-size mr-3 my-0 pa-0 w-auto"
            variant="text"
            target="_blank"
            :href="item.link"
          >
          </v-btn>
          <span class="footer-item-size"
            >{{ new Date().getFullYear() }} — <strong>Southern Convergence Technologies Corporation</strong></span
          >
        </div>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
import { footerData } from '../data/footer-data';
</script>

<style scoped>
.footer {
  position: relative;
  width: 100%;
  height: auto;
  z-index: 1000;
  padding: 16px 0; /* Add some padding to avoid sticking to the bottom */
}

.footer-item-size-base {
  font-size: 11px;
}

.footer-item-size {
  font-size: 14px;
}
</style>
