<template>
  <v-row>
    <v-col cols="12" md="9" lg="8">
      <div class="mx-5">
        <div>
          <p class="text-body-2 sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
            We know that our clients have unique needs and circumstances. Tell us more about your project, and we will
            get back to you soon with some ideas of how we can address those circumstances while creating the most
            stable software possible.
          </p>
          <br />
          <address class="text-body-2 sm:text-xs md:text-sm xl:text-md 2xl:text-lg font-Poppins">
            <strong class="orange">Southern Convergence Technologies</strong>
            <br /><br />
            Lot 14 Block 5 Emerald Hills Subdivision Sumulong Highway, Sta. Cruz Antipolo City 1870
            <br /><br />
            Tel.: <span class="orange">+(63) 2 8288 2521</span> | <span class="orange">+(63) 929 319 6559</span>
            <br />
            Email: <a href="mailto:info@southernconvergence.com" class="orange">info@southernconvergence.com</a>
          </address>
          <br />
        </div>
        <v-btn @click="$emit('toggleMore')" color="orange" variant="outlined">
          <v-icon right class="mr-2">mdi-arrow-left</v-icon>
          Inquiry
        </v-btn>
        <br />
      </div>
    </v-col>
  </v-row>
</template>

<script setup>
const emits = defineEmits(['toggleMore']);
</script>

<style scoped>
.orange {
  color: #ff7b02;
}
</style>
